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
        <h1>Welcome to the infinity castle</h1>
        </>
      }
    </section>
  );
}

export default Enter;