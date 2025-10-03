import gsap from "gsap";
import { SplitText } from "gsap/all";

type props = {
  pgRef: HTMLParagraphElement | null;
  nameRef: HTMLDivElement | null;
  imgRef: HTMLDivElement | null;
  paraRef: HTMLDivElement | null;
};

export default function nameGsap({ pgRef, nameRef, imgRef, paraRef }: props) {
  const msg = new SplitText(pgRef, {
    type: "chars,words",
  });
  const name = new SplitText(nameRef, {
    type: "words,chars",
  });

  const tl = gsap.timeline();
  tl.from(msg.chars, { opacity: 0, stagger: 0.05 }, 0)
    .from(paraRef, { opacity: 0, x: -10 }, 0)
    .from(imgRef, { opacity: 0, duration: 1, x: 10 }, 0)
    .from(
      name.chars,
      { x: -10, opacity: 0, ease: "power1.inOut", stagger: 0.03 },
      0
    );
  return tl;
}
