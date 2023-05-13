"use client";
import DrumPad from "@/components/DrumPad";
import { useEffect, useState } from "react";

export default function Home() {
  const [display, setDisplay] = useState("");
  const [audio, setAudio] = useState(50);
  
 

  const setDisplayHandler = (display) => {    
    setDisplay(display);
  };

  

  const audioHandler = (e) => {
    setAudio(e.target.value);
  }

  useEffect(() => {
    setDisplay(audio);
    setTimeout(() => {
      setDisplay('');
    }, 1000);
  }, [audio]);

  return (
    <main className="flex min-h-screen items-center justify-center p-24 bg-[#343840] ">
      <div
        id="drum-machine"
        className="w-[700px] bg-[#050B14] flex relative border-8 border-[#6382C0]"
      >
        <div className="grid grid-cols-3 gap-4 w-8/12 h-7/12 m-8 ">
          <DrumPad
            id="Q"
            audio="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            display="Heater 1"
            displayHandler={setDisplayHandler}
            volume={audio}
          />
          <DrumPad
            id="W"
            audio="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
            display="Heater 2"
            displayHandler={setDisplayHandler}
            volume={audio}
          />
          <DrumPad
            id="E"
            audio="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
            display="Heater 3"
            displayHandler={setDisplayHandler}
            volume={audio}
          />
          <DrumPad
            id="A"
            audio="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
            display="Heater 4"
            displayHandler={setDisplayHandler}
            volume={audio}
          />
          <DrumPad
            id="S"
            audio="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
            display="Clap"
            displayHandler={setDisplayHandler}
            volume={audio}
          />
          <DrumPad
            id="D"
            audio="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
            display="Open-HH"
            displayHandler={setDisplayHandler}
            volume={audio}
          />
          <DrumPad
            id="Z"
            audio="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            display="Kick-n'-Hat"
            displayHandler={setDisplayHandler}
            volume={audio}
          />
          <DrumPad
            id="X"
            audio="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
            display="Kick"
            displayHandler={setDisplayHandler}
            volume={audio}
          />
          <DrumPad
            id="C"
            audio="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
            display="Closed-HH"
            displayHandler={setDisplayHandler}
            volume={audio}
          />
        </div>

        <div className="w-72 m-4 flex flex-col justify-center items-center">
          <div
            id="display"
            className="w-44 h-[51px] bg-[#A6B2CA] text-center p-3 text-lg font-semibold font-mono"
          >
            {display}
          </div>

          <div className=" mt-8 py-[2px] flex bg-white">
            <input
              id="audio-range"
              type="range"
              value={audio}
              onChange={audioHandler}
              className="w-full h-2 bg-indigo-300 drop-shadow-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
        <div className="absolute right-0 text-[#CCB58C] p-2">Coded by m1her</div>
      </div>
    </main>
  );
}
