import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Junior @ Fast NUCES",
          "Machine Learning Enthusiast",
          "Full Stack Developer",
          "Deep Learning Newbie",
          "Cloud Computing Explorer",
          "Artistic Coder + Tunes Composer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
