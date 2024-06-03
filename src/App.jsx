import RatingComponent from "./RatingComponent";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <main className="bg-[#EAF2F8] gap-4 overflow-scroll min-h-[100dvh] flex justify-center items-center flex-col">
      <Toaster />
      <h1 className="text-3xl">My Ratings Component</h1>
      <RatingComponent />
    </main>
  );
}
