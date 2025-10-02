import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Index from "./pages/home/Index.tsx";
import SharedLayout from "./layouts/SharedLayout.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import SingleWorkout from "./pages/singleWorkoutPage/SingleWorkout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        path: "/",
        element: <Index />,
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
