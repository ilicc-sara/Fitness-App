import { useState } from "react";

import "./App.css";

const workoutCategories = [
  "all",
  "back",
  "cardio",
  "chest",
  "lower arms",
  "lower legs",
  "neck",
  "shoulders",
  "upper arms",
  "upper legs",
  "waist",
];

function App() {
  return (
    <>
      {/* <nav className="shadow-[0px_4px_6px_-2px_rgba(0,0,0,0.1)] !mb-6 !px-7">
        <img src="./logo.png" alt="gym-logo" className="h-16 object-cover" />
      </nav> */}
      <section className="text-left grid grid-cols-2 w-7xl !mx-auto !my-8 items-center">
        <div className="flex flex-col gap-3 relative">
          <img src="./logo.png" alt="gym-logo" className="h-18 w-28" />
          <h2 className="text-blue-500 text-3xl font-bold">Fitness Club</h2>
          <h1 className="text-5xl font-semibold leading-15">
            Sweat, Smile <br /> And Repeat
          </h1>
          <p>Check out the most effective exercises personalized to you</p>
          <button className="bg-indigo-900 !py-2 !px-3 text-white w-[fit-content]">
            Explore Exercises
          </button>
          <h1 className=" text-[170px] font-bold text-[#ddd] tracking-[40px] absolute -z-1 -bottom-[70%]">
            Excercise
          </h1>
        </div>
        <div>
          <img src="./home-image.png" className="rounded" />
        </div>
      </section>

      <section className="w-7xl !mx-auto !mt-38 ">
        <div className="!mx-auto">
          <h1 className="text-5xl font-medium leading-15">
            Awesome Exercises You Should Know
          </h1>
          <div>
            <input placeholder="Search Exercises" />
            <button>Search</button>
          </div>
        </div>

        <div className="flex">
          {workoutCategories.map((category, index) => (
            <div key={index}>
              <img className="h-12 " src="./gym-icon.png" />
              <p>{category}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
