import { useState, useEffect, useRef } from "react";
import.meta.env.VITE_RAPID_API_KEY;
import Slider from "./components/Slider";
import WorkoutsSlider from "../../UI/WorkoutsSlider";
import { ToastContainer, toast } from "react-toastify";

const URL = "https://exercisedb.p.rapidapi.com";

function Index() {
  const [workoutList, setWorkoutList] = useState<string[] | null>(null);
  const [workouts, setWorkouts] = useState<any[] | null>(null);
  const [activeFilter, setActiveFilter] = useState<null | string>(null);
  const [searchFilter, setSearchFilter] = useState<string>("");

  const workoutsRef = useRef<HTMLElement | null>(null);

  const scrollToWorkouts = () => {
    workoutsRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const fetchPost = async () => {
      const url: string = `${URL}/exercises/bodyPartList`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "37b9fbdafamsh38ae9b00f9888abp1cb0e5jsn54745baf4c79",
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
      const url: string = `${URL}/exercises`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "37b9fbdafamsh38ae9b00f9888abp1cb0e5jsn54745baf4c79",
          "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const posts = await response.json();
        setWorkouts(posts);
      } catch (error) {
        toast.error("Something went wrong...");
      }
    };

    fetchPost();
  }, []);

  useEffect(() => {
    if (!activeFilter) return;

    const fetchPost = async () => {
      const url: string = `${URL}/exercises/bodyPart/${activeFilter}`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "37b9fbdafamsh38ae9b00f9888abp1cb0e5jsn54745baf4c79",
          "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const posts = await response.json();
        setWorkouts(posts);
      } catch (error) {
        toast.error("Something went wrong...");
      }
    };

    fetchPost();
  }, [activeFilter]);

  function searchByInput() {
    if (searchFilter === "") return;

    const fetchPost = async () => {
      const url: string = `${URL}/exercises/bodyPart/${searchFilter}`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "37b9fbdafamsh38ae9b00f9888abp1cb0e5jsn54745baf4c79",
          "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`No exercises found for "${searchFilter}".`);
        }
        const posts = await response.json();
        if (!posts || posts.length === 0) {
          throw new Error(`No results found for "${searchFilter}".`);
        }
        setWorkouts(posts);
      } catch (error: any) {
        toast.error(error.message);
      }
    };

    setSearchFilter("");
    fetchPost();
  }

  return (
    <>
      <ToastContainer position="top-center" />
      <section className="text-left grid grid-cols-2 w-7xl !mx-auto !my-8 items-center">
        <div className="flex flex-col gap-3 relative">
          <h2 className="text-blue-500 text-3xl font-bold">Fitness Club</h2>
          <h1 className="text-5xl font-semibold leading-15">
            Sweat, Smile <br /> And Repeat
          </h1>
          <p>Check out the most effective exercises personalized to you</p>
          <button
            onClick={() => scrollToWorkouts()}
            className="bg-indigo-900 !py-2 !px-3 text-white w-[fit-content] rounded"
          >
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
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="border border-gray-300 rounded-md !pl-3 bg-white !py-3 !px-5 w-[70%]"
              placeholder="Search Exercises"
            />
            <button
              onClick={() => searchByInput()}
              className="bg-indigo-900 !py-3 !px-5 text-white w-[fit-content] rounded  !-mr-2"
            >
              Search
            </button>
          </div>
        </div>

        <Slider
          workoutList={workoutList}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </section>

      <section ref={workoutsRef} className="w-7xl !mx-auto !mt-38 !py-0 ">
        <h1 className="text-5xl font-medium leading-15 text-left !mb-18">
          Showing Results
        </h1>

        <WorkoutsSlider workouts={workouts} />
      </section>
    </>
  );
}

export default Index;
