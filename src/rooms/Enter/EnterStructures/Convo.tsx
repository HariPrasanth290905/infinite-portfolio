import { useGSAP } from "@gsap/react";
import { useRef, type MouseEventHandler } from "react";
import convoGsap from "../../../gsap/Convo";
import gsap from "gsap";

type ConvoProps = {
  convo: {
    name: string;
    msg: string;
    img: string;
    bimg: string
    style?: {
      position: string;
      bubbleColor: string;
      boxShadow: string
    };
  };
  nextHandler: MouseEventHandler | undefined;
};

function Convo({ convo, nextHandler }: ConvoProps) {

  const paraRef = useRef<HTMLDivElement | null>(null);
  const pgRef = useRef<HTMLParagraphElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const nameRef = useRef<HTMLDivElement | null>(null);

  const isLeft = convo.style?.position === "left" || !convo.style?.position;

  useGSAP(() => {

    gsap.set([pgRef.current, nameRef.current, imgRef.current, paraRef.current],
      {
        opacity: 1,
        x: 0
      });

    const tl = convoGsap({
      pgRef: pgRef.current,
      nameRef: nameRef.current,
      imgRef: imgRef.current,
      paraRef: paraRef.current,
    });

    return () => {
      tl?.kill();
      tl?.clear();
      tl?.revert?.();
    };
  }, [nextHandler]);

  return (
    <div
      className="relative h-screen grid place-items-center bg-cover bg-center transition-opacity duration-300"
      style={{
        backgroundImage: `
        linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4))
        ,url(${convo.bimg})`,
      }}
    >

      <div className={`flex flex-col md:flex-row py-12 rounded-4xl ${isLeft ? "" : "md:flex-row-reverse"} md:m-20 m-8 backdrop-blur-xs bg-white/20`}

      >

        {/* Name & Convo section */}
        <div className="relative flex flex-col p-12 order-1 md:w-1/2">
          {/* Name */}
          <div className="absolute md:static self-center md:mb-auto mt-10 py-2 font-nightintokyo-bold text-4xl text-center md:text-5xl ">
            <h1 ref={nameRef} style={{ color: convo.style?.bubbleColor }}>
              {convo.name}
            </h1>
          </div>

          {/* Speech Bubble */}
          <div
            className="mt-40 md:mt-0 p-4 w-full rounded-xl"
            ref={paraRef}
            style={{
              boxShadow: `0px 0px 5px 3px ${convo.style?.boxShadow}`,
              backgroundColor: convo.style?.bubbleColor,
            }}
          >
            <p
              className="font-yusei text-black"
              ref={pgRef}>{convo.msg}</p>
          </div>
        </div>

        {/* Image Column */}
        <div className="relative place-items-center md:w-1/2 h-64 md:h-full "
        >
          <img
            ref={imgRef}
            src={convo.img}
            alt={convo.name}
            className="w-[300px] rounded-2xl h-[400px] md:w-[350px] mt-4 object-cover"
            style={{
              boxShadow: `0px 0px 5px 3px ${convo.style?.bubbleColor}`
            }}
          />
        </div>
      </div>

      {/* Next Button for switching convo */}
      <div className="absolute bottom-10 left-1/2 transform-translate-x-1/2">
        <button
          className="px-6 py-2 italic text-gray-400 border-2 border-gray-600 rounded-xl hover:text-white hover:border-white transition"
          onClick={nextHandler}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Convo;

