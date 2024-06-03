import MultiRatingsComponent from "./MultiRatingsComponent";

import { Toaster } from "react-hot-toast";
import { useState } from "react";

export default function App() {
  const multiRatings = [
    { name: "The Dark Knight", year: 2008, length: 5, rating: 0 },
    { name: "Knives Out", year: 2019, length: 5, rating: 0 },
    { name: "Serendipity", year: 2001, length: 5, rating: 0 },
    { name: "The Dressmaker", year: 2015, length: 5, rating: 0 },
    { name: "The Grand Budapest Hotel", year: 2015, length: 5, rating: 0 },
  ];

  const randomNames = [
    "Anonymous Llama",
    "Mysterious Moose",
    "Stealthy Sloth",
    "Phantom Panda",
    "Incognito Iguana",
    "Unknown Unicorn",
    "Enigmatic Elephant",
    "Ghostly Giraffe",
    "Shadowy Shark",
    "Cryptic Cobra",
    "Silent Swan",
    "Nameless Narwhal",
    "Obscure Octopus",
    "Unseen Uakari",
    "Hidden Hedgehog",
    "Masked Macaw",
    "Veiled Vulture",
    "Concealed Chameleon",
    "Covert Cockatoo",
    "Invisible Impala",
  ];

  const [ratings, setRatings] = useState(multiRatings);

  const updateRating = (index, newRating) => {
    setRatings((prevRatings) =>
      prevRatings.map((r, i) => (i === index ? { ...r, rating: newRating } : r))
    );
    console.log(ratings);
  };
  return (
    <main className="bg-[#EAF2F8] gap-4 overflow-scroll min-h-[100dvh] flex justify-center items-center flex-col">
      <Toaster />
      <h1 className="text-3xl">My Ratings Component</h1>
      <MultiRatingsComponent
        ratingsData={ratings}
        updateRating={updateRating}
        randomNames={randomNames}>
        <MultiRatingsComponent.RatingsContainer />
        <MultiRatingsComponent.Comment />
        <MultiRatingsComponent.UserFeedback />
      </MultiRatingsComponent>
    </main>
  );
}
