import { Splide, SplideSlide } from "@splidejs/react-splide";

type WorkoutProps = {
  workoutList: any[] | null;
};

const Slider = ({ workoutList }: WorkoutProps) => {
  return (
    <Splide
      options={{
        type: "slide",
        perPage: 1,
        gap: "1rem",
        autoplay: false,
      }}
    >
      <SplideSlide>
        <div className="flex justify-between !mx-12">
          <div className="!my-14 flex flex-col items-center justify-center h-48 aspect-square bg-white text-center gap-5 hover:scale-110 transition-transform duration-300">
            <img className="h-12 " src="./gym-icon.png" />
            <p className="capitalize text-base font-medium">All</p>
          </div>
          {workoutList?.map((category, index) => {
            if (index <= 2)
              return (
                <div
                  className="!my-14 flex flex-col items-center justify-center h-48 aspect-square bg-white text-center gap-5 hover:scale-110 transition-transform duration-300"
                  key={index}
                >
                  <img className="h-12 " src="./gym-icon.png" />
                  <p className="capitalize text-base font-medium">{category}</p>
                </div>
              );
          })}
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="flex justify-between !mx-12">
          {workoutList?.map((category, index) => {
            if (index > 2 && index <= 6)
              return (
                <div
                  className="!my-14 flex flex-col items-center justify-center h-48 aspect-square bg-white text-center gap-5 hover:scale-110 transition-transform duration-300"
                  key={index}
                >
                  <img className="h-12 " src="./gym-icon.png" />
                  <p className="capitalize text-base font-medium">{category}</p>
                </div>
              );
          })}
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="flex justify-between !mx-12">
          {workoutList?.map((category, index) => {
            if (index > 6 && index <= 10)
              return (
                <div
                  className="!my-14 flex flex-col items-center justify-center h-48 aspect-square bg-white text-center gap-5 hover:scale-110 transition-transform duration-300"
                  key={index}
                >
                  <img className="h-12 " src="./gym-icon.png" />
                  <p className="capitalize text-base font-medium">{category}</p>
                </div>
              );
          })}
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="flex justify-between !mx-12">
          {workoutList?.map((category, index) => {
            if (index > 10 && index <= 14)
              return (
                <div
                  className="!my-14 flex flex-col items-center justify-center h-48 aspect-square bg-white text-center gap-5 hover:scale-110 transition-transform duration-300"
                  key={index}
                >
                  <img className="h-12 " src="./gym-icon.png" />
                  <p className="capitalize text-base font-medium">{category}</p>
                </div>
              );
          })}
        </div>
      </SplideSlide>
    </Splide>
  );
};

export default Slider;
