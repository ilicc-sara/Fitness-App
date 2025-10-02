import { useState, useEffect } from "react";
import.meta.env.VITE_RAPID_API_KEY;

import Slider from "./Slider";
import { Link } from "react-router";

function Index() {
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
        setWorkoutList(posts);
      } catch (error) {}
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
        setWorkouts(posts);
      } catch (error) {}
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
          <button className="bg-indigo-900 !py-2 !px-3 text-white w-[fit-content] rounded">
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

      <section className="w-7xl !mx-auto !mt-38 !py-20 ">
        <div className="!mx-auto">
          <h1 className="text-5xl font-medium leading-15 text-center !mb-18">
            Awesome Exercises You Should Know
          </h1>
          <div className="!mx-auto w-7xl flex justify-center items-center">
            <input
              className="border border-gray-300 rounded-md !pl-3 bg-white !py-3 !px-5 w-[70%]"
              placeholder="Search Exercises"
            />
            <button className="bg-indigo-900 !py-3 !px-5 text-white w-[fit-content] rounded  !-mr-2">
              Search
            </button>
          </div>
        </div>

        <Slider workoutList={workoutList} />
      </section>

      <section className="w-7xl !mx-auto !mt-38 !py-0 ">
        <h1 className="text-5xl font-medium leading-15 text-left !mb-18">
          Showing Results
        </h1>

        <div className="grid grid-cols-3 gap-y-10">
          {workouts?.map((workout, index) => (
            <Link to={`/workout/${workout.id}`}>
              <div
                key={index}
                className="bg-white !p-4 h-80 aspect-square flex flex-col justify-end gap-4 hover:scale-110 transition-transform duration-300 rounded"
              >
                <div className="flex gap-2 ">
                  <button className="w-[fit-content] !py-1 !px-3 bg-red-200 rounded">
                    {" "}
                    {workout.bodyPart}{" "}
                  </button>
                  <button className="w-[fit-content] !py-1 !px-3 bg-yellow-200 rounded">
                    {" "}
                    {workout.target}{" "}
                  </button>
                </div>
                <p className="text-lg font-medium"> {workout.name} </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default Index;
