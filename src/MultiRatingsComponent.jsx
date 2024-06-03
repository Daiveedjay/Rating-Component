import { createContext, useContext, useState } from "react";

import { FiStar } from "react-icons/fi";
import toast from "react-hot-toast";

const RatingContext = createContext();

const MultiRatingsComponent = ({
  children,
  ratingsData,
  updateRating,
  randomNames,
}) => {
  const [userFeedback, setUserFeedback] = useState([]);
  return (
    <RatingContext.Provider
      value={{
        ratingsData,
        updateRating,

        userFeedback,
        setUserFeedback,
        randomNames,
      }}>
      <div className="relative ">{children}</div>
    </RatingContext.Provider>
  );
};

const Label = ({ name, year }) => {
  return (
    <div className="flex flex-col justify-center gap-1 text-base font-semibold min-w-[220px]">
      <h3>{name}</h3>
      <span className=" text-[12px]  text-[#AAB7B8]">{year}</span>
    </div>
  );
};

const RatingsContainer = () => {
  const { ratingsData, updateRating } = useContext(RatingContext);

  return (
    <div className="min-w-[600px] bg-white rounded-md flex flex-col">
      {ratingsData &&
        ratingsData.map((singleData, index) => (
          <div
            key={index}
            className="flex items-center px-4 py-6 border-[#f7f8f9] gap-[75px] border-[0.5px]">
            <Label name={singleData.name} year={singleData.year} />
            <div className="flex gap-4 ">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <RatingIcon
                  key={starIndex}
                  filled={starIndex < singleData.rating}
                  onClick={() => updateRating(index, starIndex + 1)}
                />
              ))}
            </div>
            <RatingLabel ratingValue={singleData.rating} />
          </div>
        ))}
    </div>
  );
};

const RatingLabel = ({ ratingValue }) => {
  const ratingLabel = [
    { label: "Poor", color: "#E74C3C" },
    { label: "Bad", color: "#E59866" },
    { label: "Okay", color: "#F7DC6F" },
    { label: "Good", color: "#76D7C4" },
    { label: "Great", color: "#229954" },
  ];
  return (
    <>
      {ratingValue > 0 ? (
        <div
          className="font-semibold min-w-[60px] p-2"
          style={{ color: ratingLabel[ratingValue - 1]?.color }}>
          {ratingLabel[ratingValue - 1]?.label}
        </div>
      ) : (
        <p className="font-semibold text-gray-400">No ratings yet...</p>
      )}
    </>
  );
};

const RatingIcon = ({ filled, onClick }) => {
  return (
    <FiStar
      size={25}
      strokeWidth={0}
      fill={filled ? "gold" : "#AAB7B8"}
      cursor="pointer"
      className="star"
      onClick={onClick}
    />
  );
};

const Comment = () => {
  const [comment, setComment] = useState("");
  const { userFeedback, setUserFeedback, randomNames } =
    useContext(RatingContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (comment.length < 3) {
      toast.error("Please add more text");
      return;
    }

    // Generate a random name between 1 and 20
    const randomName =
      randomNames[Math.floor(Math.random() * randomNames.length)];

    // Create a new feedback object
    const newFeedback = { name: randomName, comment };

    // Update the userFeedback state
    setUserFeedback([...userFeedback, newFeedback]);

    // Clear the comment input
    setComment("");
  };

  return (
    <div className="w-full mt-2 ">
      <label className="p-2 text-base font-semibold ">Comment</label>
      <form className="relative " onSubmit={handleSubmit}>
        <textarea
          name="comment"
          placeholder="Add a review"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-4 rounded-md resize-none min-h-20"></textarea>
        <button className="font-semibold absolute -bottom-1/2 right-0 border bg-[#5499C7] transition-all hover:bg-[#21618C] rounded-md py-2 px-4 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

const UserFeedback = () => {
  const { userFeedback } = useContext(RatingContext);
  return (
    <div className="absolute top-0 px-8 py-2 translate-x-full bg-white rounded-md max-w-[300px] -right-5">
      {userFeedback.length > 0 ? (
        <>
          <h3 className="mb-2 text-xl font-semibold">
            Here are what user think
          </h3>
          <ul>
            {userFeedback.map((user, index) => (
              <li key={index} className="px-2 ">
                <h4>
                  {index + 1}.{" "}
                  <span className="font-semibold ">{user.name} </span> --{" "}
                  {user.comment}
                </h4>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="font-semibold ext-xl">No user feedback yet...</p>
      )}
    </div>
  );
};
MultiRatingsComponent.UserFeedback = UserFeedback;

MultiRatingsComponent.Label = Label;
MultiRatingsComponent.RatingsContainer = RatingsContainer;
MultiRatingsComponent.RatingLabel = RatingLabel;
MultiRatingsComponent.Comment = Comment;

export default MultiRatingsComponent;
