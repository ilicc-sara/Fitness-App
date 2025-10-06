import { useEffect, useState } from "react";
import { useParams } from "react-router";

function SingleWorkout() {
  const params = useParams();
  const [workout, setWorkout] = useState<WorkoutObject | null>(null);

  type WorkoutObject = {
    name: string;
    bodyPart: string;
    category: string;
    description: string;
    difficulty: string;
    equipment: string;
    instrucitons: string[];
    secondaryMuscles: string[];
    target: string;
  };

  useEffect(() => {
    const fetchPost = async () => {
      const url: string = `https://exercisedb.p.rapidapi.com/exercises/exercise/${params.workoutId}`;
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
        console.log(posts);
        setWorkout(posts);
      } catch (error) {}
    };

    fetchPost();
  }, []);

  function toUrlString(sentence: string): string {
    return sentence.trim().toLowerCase().split(" ").join("%20");
  }

  useEffect(() => {
    if (!workout) return;
    const fetchPost = async () => {
      const url = `https://youtube-search-and-download.p.rapidapi.com/search?query=${toUrlString(
        workout?.name
      )}`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "df4967c0b8msh2d8256548a51846p17389ajsn17ef79d2ed98",
          "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const posts = await response.json();
        console.log(posts);
      } catch (error) {}
    };

    fetchPost();
  }, [workout]);

  const [imageUrl, setImageUrl] = useState<string>("");
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await fetch(
          `https://exercises11.p.rapidapi.com/images/${params.workoutId}.gif`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-key":
                "df4967c0b8msh2d8256548a51846p17389ajsn17ef79d2ed98",
              "x-rapidapi-host": "exercises11.p.rapidapi.com",
            },
          }
        );

        const blob = await res.blob();
        const url = URL.createObjectURL(blob);

        setImageUrl(url);
      } catch (err) {
        console.error(err);
      }
    };

    fetchImage();
  }, []);
  return (
    <section className="w-[90%] !mx-auto !my-8">
      <div className="text-left grid grid-cols-2 items-center">
        <img className="w-full" src={imageUrl} />

        <div className="flex flex-col justify-center !p-14">
          <h1 className="text-6xl font-bold capitalize"> {workout?.name} </h1>
          <p className="text-xl !my-7"> {workout?.description} </p>

          <div className="flex flex-col gap-5 text-lg font-medium mt-6">
            <div className="!p-3 flex justify-between bg-red-100 text-red-700 px-4 py-2 rounded-lg shadow-sm">
              <span>Body Part:</span>
              <span>{workout?.bodyPart}</span>
            </div>

            <div className="!p-3 flex justify-between bg-yellow-100 text-yellow-700 px-4 py-2 rounded-lg shadow-sm">
              <span>Target:</span>
              <span>{workout?.target}</span>
            </div>

            <div className="!p-3 flex justify-between bg-blue-100 text-blue-700 px-4 py-2 rounded-lg shadow-sm col-span-2">
              <span>Equipment:</span>
              <span>{workout?.equipment}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleWorkout;
