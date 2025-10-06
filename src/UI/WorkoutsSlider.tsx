import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router";

const URL_ = "https://exercisedb.p.rapidapi.com";

type WorkoutProps = {
  workouts: any[] | null;
};

type Image = {
  id: string;
  url: string;
};

const WorkoutsSlider = ({ workouts }: WorkoutProps) => {
  const [imagesUrl, setImagesUrl] = useState<Image[]>([]);

  useEffect(() => {
    const fetchImage = async (id: string) => {
      try {
        const res = await fetch(`${URL_}/images/${id}.gif`, {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "df4967c0b8msh2d8256548a51846p17389ajsn17ef79d2ed98",
            "x-rapidapi-host": "exercises11.p.rapidapi.com",
          },
        });

        const blob = await res.blob();
        const url = URL.createObjectURL(blob);

        setImagesUrl((prev) => {
          if (prev.some((img) => img.id === id)) {
            return prev;
          } else {
            return [...prev, { id, url }];
          }
        });
      } catch (err) {
        console.error(err);
      }
    };

    workouts?.forEach((workout) => {
      if (workout.id) fetchImage(workout.id);
    });
  }, [workouts]);

  function getImageUrl(id: string) {
    const image = imagesUrl?.find((img) => img.id === id);
    return image ? image.url : "";
  }

  return (
    <Splide
      options={{
        type: "slide",
        perPage: 1,
        gap: "1rem",
        autoplay: false,
        pagination: true,
        arrows: true,
      }}
    >
      {workouts && (
        <SplideSlide>
          <div className="grid grid-cols-3 !my-10 gap-y-10 place-items-center">
            {workouts?.map((workout, index) => {
              if (index <= 5)
                return (
                  <Link to={`/workout/${workout.id}`}>
                    <div
                      key={index}
                      className="bg-white !p-4 h-90 aspect-square flex flex-col justify-end gap-4 hover:scale-110 transition-transform duration-300 rounded"
                    >
                      <img
                        className="w-[65%] aspect-square !mx-auto"
                        src={getImageUrl(workout.id)}
                      />
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
                );
            })}
          </div>
        </SplideSlide>
      )}
      {workouts && workouts?.length > 6 && (
        <SplideSlide>
          <div className="grid grid-cols-3 !my-10 gap-y-10 place-items-center">
            {workouts?.map((workout, index) => {
              if (index >= 6 && index < 12)
                return (
                  <Link to={`/workout/${workout.id}`}>
                    <div
                      key={index}
                      className="bg-white !p-4 h-90 aspect-square flex flex-col justify-end gap-4 hover:scale-110 transition-transform duration-300 rounded"
                    >
                      <img
                        className="w-[65%] aspect-square !mx-auto"
                        src={getImageUrl(workout.id)}
                      />
                      <div className="flex gap-2 ">
                        <button className="w-[fit-content] !py-1 !px-3 bg-red-200 rounded">
                          {" "}
                          {workout?.bodyPart}{" "}
                        </button>
                        <button className="w-[fit-content] !py-1 !px-3 bg-yellow-200 rounded">
                          {" "}
                          {workout.target}{" "}
                        </button>
                      </div>
                      <p className="text-lg font-medium"> {workout.name} </p>
                    </div>
                  </Link>
                );
            })}
          </div>
        </SplideSlide>
      )}

      {workouts && workouts?.length > 12 && (
        <SplideSlide>
          <div className="grid grid-cols-3 !my-10 gap-y-10 place-items-center">
            {workouts?.map((workout, index) => {
              if (index >= 12 && index < 18)
                return (
                  <Link to={`/workout/${workout.id}`}>
                    <div
                      key={index}
                      className="bg-white !p-4 h-90 aspect-square flex flex-col justify-end gap-4 hover:scale-110 transition-transform duration-300 rounded"
                    >
                      <img
                        className="w-[65%] aspect-square !mx-auto"
                        src={getImageUrl(workout.id)}
                      />
                      <div className="flex gap-2 ">
                        <button className="w-[fit-content] !py-1 !px-3 bg-red-200 rounded">
                          {" "}
                          {workout?.bodyPart}{" "}
                        </button>
                        <button className="w-[fit-content] !py-1 !px-3 bg-yellow-200 rounded">
                          {" "}
                          {workout.target}{" "}
                        </button>
                      </div>
                      <p className="text-lg font-medium"> {workout.name} </p>
                    </div>
                  </Link>
                );
            })}
          </div>
        </SplideSlide>
      )}
    </Splide>
  );
};

export default WorkoutsSlider;
