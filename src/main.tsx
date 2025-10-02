import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Index from "./Index.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import SingleWorkout from "./SingleWorkout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [],
  },
  {
    path: "/workout/:workoutId",
    element: <SingleWorkout />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
