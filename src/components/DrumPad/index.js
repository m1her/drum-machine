"use client";
import { useEffect, useRef, useState } from "react";
const DrumPad = (props) => {
  const audioRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key == props.id.toLowerCase()) {
        audioRef.current.currentTime = 0;
        audioRef.current.volume = props.volume / 100;
        audioRef.current.play();
        setIsClicked(true);
        setTimeout(() => {
          setIsClicked(false);
        }, 150);
        props.displayHandler(props.display);
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [props.volume]);

  const handleClick = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.volume = props.volume / 100;
    audioRef.current.play();
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 150);
    props.displayHandler(props.display);
  };

  return (
    <div
      id={props.id}
      className={`font-sans font-semibold text-xl drum-pad w-28 h-28 flex items-center justify-center
        rounded select-none
       ${isClicked ? "bg-[#495F8C]" : "drop-shadow-md shadow-lg bg-[#A6B2CA]"}
       `}
      tabIndex={0}
      onMouseUp={handleClick}
    >
      {props.id}
      <audio id={props.id} className="clip" ref={audioRef}>
        <source src={props.audio} />
      </audio>
    </div>
  );
};
export default DrumPad;
