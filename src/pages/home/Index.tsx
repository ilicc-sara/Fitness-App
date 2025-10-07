import { useState, useEffect, useRef } from "react";
import.meta.env.VITE_RAPID_API_KEY;
import Slider from "./components/Slider";
import WorkoutsSlider from "../../UI/WorkoutsSlider";
import { ToastContainer, toast } from "react-toastify";

const URL_ = "https://exercisedb.p.rapidapi.com";

// type Student = {
//   name: string;
//   lastName: string;
//   scores: {
//     history: number;
//     sports: number;
//   };
// };

// const nemanja: Student = {
//   name: "Nemanja",
//   lastName: "Malesija",
//   scores: {
//     history: 10,
//     // sports: 10,
//   },
// };

// nemanja.

const fetchData = async <T,>(
  endpoint: string,
  setter: React.Dispatch<React.SetStateAction<T>>,
  customError?: string
) => {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(`${URL_}${endpoint}`, options);
    if (!response.ok) throw new Error(customError || "Something went wrong.");
    const data = await response.json();

    setter(data as T);
  } catch (error: any) {
    toast.error(error?.message || "Failed to fetch data.");
  }
};

function Home() {
  type WorkoutsObject = {
    bodyPart: string;
    equipment: string;
    id: string;
    name: string;
    target: string;
    secondaryMuscles: string[];
    instructions: string[];
    description: string;
    difficulty: string;
    category: string;
  };

  const [workoutList, setWorkoutList] = useState<string[]>([]);
  const [workouts, setWorkouts] = useState<WorkoutsObject[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("");
  const [searchFilter, setSearchFilter] = useState<string>("");

  const workoutsRef = useRef<HTMLElement | null>(null);

  const scrollToWorkouts = () => {
    workoutsRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    fetchData<string[]>("/exercises/bodyPartList", setWorkoutList);
  }, []);

  useEffect(() => {
    fetchData<any[]>("/exercises", setWorkouts);
  }, []);

  useEffect(() => {
    if (activeFilter === "") return;
    fetchData<any[]>(`/exercises/bodyPart/${activeFilter}`, setWorkouts);
  }, [activeFilter]);

  function searchByInput() {
    if (searchFilter === "") return;

    fetchData<any[]>(
      `/exercises/bodyPart/${searchFilter}`,
      setWorkouts,
      `No exercises found for "${searchFilter}".`
    );
    setSearchFilter("");
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
              className="border border-gray-300 rounded-tl rounded-bl !pl-3 bg-white !py-3 !px-5 w-[70%]"
              placeholder="Search Exercises"
            />
            <button
              onClick={() => searchByInput()}
              className="bg-indigo-900 !py-3 !px-5 text-white w-[fit-content] rounded-tr rounded-br  !-mr-2"
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

export default Home;
