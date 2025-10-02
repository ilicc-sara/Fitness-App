import { useEffect, useState } from "react";
import { useParams } from "react-router";

function SingleWorkout() {
  type Workout = {
    bodyPart: string;
    category: string;
    description: string;
    difficulty: string;
    equipment: string;
    id: string;
    name: string;
    instructions: string[];
    secondaryMuscles: string[];
    target: string;
  };
  const params = useParams();
  const [workout, setWorkout] = useState<Workout | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const url: string = `https://exercisedb.p.rapidapi.com/exercises/exercise/${params.workoutId}`;
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
  return (
    <section className="text-left grid grid-cols-2 w-7xl !mx-auto !my-8 items-center">
      <h1>Single Workout {params.workoutId}</h1>
    </section>
  );
}

export default SingleWorkout;
