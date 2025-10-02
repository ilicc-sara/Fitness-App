import { Splide, SplideSlide } from "@splidejs/react-splide";

const Slider = () => {
  return (
    <Splide
      options={{
        type: "loop",
        perPage: 3,
        gap: "1rem",
        autoplay: true,
      }}
    >
      <SplideSlide>
        <div className="flex flex-col items-center justify-center h-40 aspect-square bg-white text-center gap-5 hover:scale-110 transition-transform duration-300">
          <img className="h-12 " src="./gym-icon.png" />
          <p className="capitalize text-base font-medium">All</p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <img src="https://via.placeholder.com/300x200" alt="Slide 2" />
      </SplideSlide>
      <SplideSlide>
        <img src="https://via.placeholder.com/300x200" alt="Slide 3" />
      </SplideSlide>
    </Splide>
  );
};

export default Slider;
