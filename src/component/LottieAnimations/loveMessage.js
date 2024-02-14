"use client";

import useAppendScript from "@/hook/useAppendScript";
const LoveMessage = ({
  width = "300px",
  height = "300px",
  clickEvent = () => {},
}) => {
  const script = useAppendScript({
    srcId: "dotlottie",
    src: "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs",
    type: "module",
  }); // get script needed for lottie animation
  return (
    <div>
      <dotlottie-player
        src="https://lottie.host/5292d4fd-5072-478c-8908-462dc66318dc/yJPW8SbpfK.json"
        background="transparent"
        speed="0.5"
        onClick={clickEvent}
        style={{ width: width, height: height }}
        loop
        autoplay
      ></dotlottie-player>
    </div>
  );
};

export default LoveMessage;
