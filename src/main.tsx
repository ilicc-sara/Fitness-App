import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/home/Index.tsx";
import SharedLayout from "./layouts/SharedLayout.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import SingleWorkout from "./pages/singleWorkoutPage/Index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/workout/:workoutId",
        element: <SingleWorkout />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// pogledati supabase
// napraviti acc
// napraviti projekat cinema 100
// napraviti tabelu movies
// u njoj upisati jedan film
// spojiti se na tu bazu iz vite projekta
// dohvatiti film iz baze
// console.log(taj film)
