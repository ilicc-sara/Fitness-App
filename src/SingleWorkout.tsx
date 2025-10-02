import { useParams } from "react-router";

function SingleWorkout() {
  const params = useParams();
  return (
    <div>
      <h1>Single Workout {params.workoutId}</h1>
    </div>
  );
}

export default SingleWorkout;
