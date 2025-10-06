import { useState } from "react";
import { enterConvo } from "../../constants";
import Convo from "./EnterStructures/Convo";

function Enter() {
  const [idx, setIdx] = useState(0);

  // handles the animation 
  const handleNext = () => {
    if (idx >= 0 && idx < enterConvo.length) {
      setIdx(prev => prev + 1);
    }
  };

  return (
    <section>
      {idx <= enterConvo.length-1 ?
        (<Convo
          convo={enterConvo[idx]}
          nextHandler={handleNext}
        />) :<>
        <div className="grid place-items-center h-screen text-6xl">
          <h1 className="font-nightintokyo-shadow">
            Welcome to infinity castle
          </h1>
        </div>
        </>
      }
    </section>
  );
}

export default Enter;