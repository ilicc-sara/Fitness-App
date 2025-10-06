import { useEffect, useState } from "react";
import { useParams } from "react-router";

function SingleWorkout() {
  const params = useParams();
  const [workout, setWorkout] = useState<WorkoutObject | null>(null);

  type WorkoutObject = {
    name: string;
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
    <section className="text-left grid grid-cols-2 w-7xl !mx-auto !my-8 items-center">
      <img src={imageUrl} />
      <h1>Single Workout {params.workoutId}</h1>
    </section>
  );
}

export default SingleWorkout;
