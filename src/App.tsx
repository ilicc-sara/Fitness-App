import { useState, useEffect } from "react";
import.meta.env.VITE_RAPID_API_KEY;

import "./App.css";

function App() {
  const [workoutList, setWorkoutList] = useState<string[] | null>(null);

  const [workouts, setWorkouts] = useState<any[] | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const url: string =
        "https://exercisedb.p.rapidapi.com/exercises/targetList";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "df4967c0b8msh2d8256548a51846p17389ajsn17ef79d2ed98",
          "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const posts = await response.json();
        console.log(posts);
        setWorkoutList(posts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = async () => {
      const url: string = "https://exercisedb.p.rapidapi.com/exercises";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "df4967c0b8msh2d8256548a51846p17389ajsn17ef79d2ed98",
          "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const posts = await response.json();
        console.log(posts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, []);

  return (
    <>
      <nav className="shadow-[0px_4px_6px_-2px_rgba(0,0,0,0.1)] !mb-6 !px-7">
        <img src="./logo.png" alt="gym-logo" className="h-16 object-cover" />
      </nav>
      <section className="text-left grid grid-cols-2 w-7xl !mx-auto !my-8 items-center">
        <div className="flex flex-col gap-3 relative">
          <h2 className="text-blue-500 text-3xl font-bold">Fitness Club</h2>
          <h1 className="text-5xl font-semibold leading-15">
            Sweat, Smile <br /> And Repeat
          </h1>
          <p>Check out the most effective exercises personalized to you</p>
          <button className="bg-indigo-900 !py-2 !px-3 text-white w-[fit-content]">
            Explore Exercises
          </button>
          <h1 className=" text-[170px] font-bold text-[#ddd] tracking-[40px] absolute -z-1 -bottom-[90%]">
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
            <input
              className="border border-gray-300 rounded-md"
              placeholder="Search Exercises"
            />
            <button>Search</button>
          </div>
        </div>

        <div className="grid grid-cols-4 place-items-center gap-y-4">
          {/* <img src="https://v2.exercisedb.io/image/UFPboDclIZJmJA" /> */}
          <div className="flex flex-col items-center justify-center h-40 aspect-square bg-white text-center gap-5 hover:scale-110 transition-transform duration-300">
            <img className="h-12 " src="./gym-icon.png" />
            <p className="capitalize text-base font-medium">All</p>
          </div>
          {workoutList?.map((category, index) => (
            <div
              className="flex flex-col items-center justify-center h-40 aspect-square bg-white text-center gap-5 hover:scale-110 transition-transform duration-300"
              key={index}
            >
              <img className="h-12 " src="./gym-icon.png" />
              <p className="capitalize text-base font-medium">{category}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
