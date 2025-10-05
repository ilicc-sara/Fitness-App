# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

 <img src="./logo.png" alt="gym-logo" className="h-18 w-28" />

useEffect(() => {
const fetchPost = async () => {
const url = "https://muscle-group-image-generator.p.rapidapi.com";
const options = {
method: "GET",
headers: {
"x-rapidapi-key":
"df4967c0b8msh2d8256548a51846p17389ajsn17ef79d2ed98",
"x-rapidapi-host": "muscle-group-image-generator.p.rapidapi.com",
},
};

      try {
        const response = await fetch(url, options);
        const posts = await response.json();
        console.log("image generator", posts);
      } catch (error) {}
    };

    fetchPost();

}, []);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

```import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router";

type WorkoutProps = {
  workouts: any[] | null;
};

type Image = {
  id: string;
  url: string;
};

const WorkoutsSlider = ({ workouts }: WorkoutProps) => {
  const [imageUrl, setImageUrl] = useState<Image[]>([]);

  useEffect(() => {
    const fetchImage = async (id: string) => {
      try {
        const res = await fetch(
          `https://exercises11.p.rapidapi.com/images/${id}.gif`,
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
        // setImageUrl(URL.createObjectURL(blob));
        setImageUrl((prev) => {
          return [...prev, { id, url: URL.createObjectURL(blob) }];
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchImage("0002");
  }, []);

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
                        src={imageUrl}
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
                        src={imageUrl}
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
                        src={imageUrl}
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
```
