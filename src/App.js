import { useState } from "react";
import Display from "./Display";
import DrumPad from "./DrumPad";

import "./App.css";

function App() {
  const drumSounds = [
    {
      keyCode: "KeyQ",
      keyLabel: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      id: "heater-1",
    },
    {
      keyCode: "KeyW",
      keyLabel: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      id: "heater-2",
    },
    {
      keyCode: "KeyE",
      keyLabel: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      id: "heater-3",
    },
    {
      keyCode: "KeyA",
      keyLabel: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      id: "heater-4",
    },
    {
      keyCode: "KeyS",
      keyLabel: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      id: "clap",
    },
    {
      keyCode: "KeyD",
      keyLabel: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      id: "open-hh",
    },
    {
      keyCode: "KeyZ",
      keyLabel: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      id: "kick-n-hat",
    },
    {
      keyCode: "KeyX",
      keyLabel: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      id: "kick",
    },
    {
      keyCode: "KeyC",
      keyLabel: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      id: "closed-hh",
    },
  ];

  let [textToDisplay, setTextToDisplay] = useState("");

  window.addEventListener("keydown", (e) => {
    if (
      [
        "KeyQ",
        "KeyW",
        "KeyE",
        "KeyA",
        "KeyS",
        "KeyD",
        "KeyZ",
        "KeyX",
        "KeyC",
      ].includes(e.code)
    ) {
      // debugger;
      for (const obj of drumSounds) {
        if (obj.keyCode === e.code) {
          let button = document.getElementById(obj.id);
          button.click();
          return;
        }
      }
    }
  });

  return (
    <div id="drum-machine" className="App">
      <Display displayText={textToDisplay} />
      <div id="drum-pad-container">
        {drumSounds.map((obj) => (
          <DrumPad
            audioSource={obj.src}
            audioId={obj.keyLabel}
            key={obj.keyLabel}
            drumPadId={obj.id}
            keyLabel={obj.keyLabel}
            onClick={(e) => {
              e.target.children[0].play();
              setTextToDisplay(obj.keyLabel);
            }}
          />
        ))}
      </div>
      <p>
        Made for a{" "}
        <a href="https://www.freecodecamp.org/" target="_blank" rel="noreferrer">
          FreeCodeCamp
        </a>{" "}
        project by{" "}
        <a href="https://github.com/Pruthuvi9" target="_blank" rel="noreferrer">
          Pruthuvi Fernando.
        </a>
      </p>
    </div>
  );
}

export default App;
