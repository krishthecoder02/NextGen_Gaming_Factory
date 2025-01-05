import Hero from "./Sections/Hero";
import Navbar from "./Sections/Navbar";
import Review from "./Sections/Review";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div>
        <h1 className="text-emerald-500 text-5xl text-center mb-6 font-extrabold font-serif">
          Review
        </h1>
      </div>
      <Review />
    </>
  );
}
