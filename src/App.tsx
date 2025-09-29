import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <section className="text-left grid grid-cols-2">
        <div>
          <img src="./logo.png" alt="gym-logo" className="h-18 object-cover" />
          <h2 className="text-blue-500 text-2xl font-bold">Fitness Club</h2>
          <h1 className="text-3xl font-semibold">Sweat, Smile And Repeat</h1>
          <p>Check out the most effective exercises personalized to you</p>
          <button className="bg-indigo-900 !py-2 !px-3 text-white">
            Explore Exercises
          </button>
        </div>
        <div>
          <img src="./home-image.png" />
        </div>
      </section>
    </>
  );
}

export default App;
