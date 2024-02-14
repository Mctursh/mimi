"use client";
import useAppendScript from "@/hook/useAppendScript";

const HappyValentine = ({ width = "400px", height = "400px" }) => {
  const script = useAppendScript({
    srcId: "dotlottie",
    src: "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs",
    type: "module",
  }); //get script needed for lottie animation
  return (
    <div>
      <dotlottie-player
        src="https://lottie.host/d94bbd39-0966-4d23-a45d-ddcb32f6c12c/mt40J5OJdY.json"
        background="transparent"
        speed="0.5"
        onClick={() => {}}
        style={{ width: width, height: height }}
        loop={false}
        autoplay
      ></dotlottie-player>
    </div>
  );
};

export default HappyValentine;
