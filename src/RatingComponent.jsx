import { FiStar } from "react-icons/fi";
import { useState } from "react";

export default function RatingComponent() {
  const [stars, setStarts] = useState(0);

  const ratingData = [
    { label: "Poor", color: "#E74C3C" },
    { label: "Bad", color: "#E59866" },
    { label: "Okay", color: "#F7DC6F" },
    { label: "Good", color: "#76D7C4" },
    { label: "Great", color: "#229954" },
  ];
  return (
    <div className="flex bg-white items-center justify-between  border border-black rounded-md min-w-[600px]  p-2">
      <div className="p-2 text-base font-semibold">
        Intersteller <span className="text-gray-400 ">(2014)</span>
      </div>
      <div className="flex gap-4 p-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex justify-center">
            <FiStar
              size={25}
              strokeWidth={0}
              fill={index + 1 <= stars ? "gold" : "#D6DBDF"}
              cursor="pointer"
              className="star"
              onClick={() => setStarts(index + 1)}
            />
          </div>
        ))}
      </div>
      {stars > 0 ? (
        <div
          className="font-semibold min-w-[60px] p-2"
          style={{ color: ratingData[stars - 1]?.color }}>
          {ratingData[stars - 1]?.label}
        </div>
      ) : (
        <p className="font-semibold text-gray-400">No ratings yet...</p>
      )}
    </div>
  );
}
