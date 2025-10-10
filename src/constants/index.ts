const guideBar = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Skills",
    link: "/skills",
  },
  {
    id: 3,
    name: "About",
    link: "/about",
  },
  {
    id: 4,
    name: "Projects",
    link: "/projects",
  },
  {
    id: 5,
    name: "Contact",
    link: "/contact",
  },
];
const enterConvo = [
  {
    name: "Muzan Kibutsuji",
    msg: "So… another mortal dares to enter my castle? You seek the secrets hidden within? Hmph… You may try, but only if you can withstand what lies ahead.",
    img: "/images/muzan.webp",
    bimg: "/bimages/muzanb2.png",
    style: {
      position: "right",
      bubbleColor: "rgb(169 134 218)",
      boxShadow: "0 4px 12px rgba(130, 102, 168, 0.5)", // slightly darker and transparent
    },
  },
  {
    name: "Tanjiro Kamado",
    msg: "Don’t be afraid, traveler! I’m Tanjiro — a Full-Stack Developer who crafts with care and precision. I’ll guide you through safely.",
    img: "/images/tanjiro.png",
    bimg: "/bimages/tanj.jpg",
    style: {
      position: "left",
      bubbleColor: "#a4d2ee",
      boxShadow: "0 4px 12px rgba(164, 210, 238, 0.5)", // subtle shadow
    },
  },
  {
    name: "Nezuko Kamado",
    msg: "I’m Nezuko! My touch brings beauty and creativity — every project polished and full of life, waiting for you to explore.",
    img: "/images/nezuko.jpg",
    bimg: "/bimages/nezub.png",
    style: {
      position: "left",
      bubbleColor: "#f99f9c",
      boxShadow: "0 4px 12px rgba(249, 159, 156, 0.5)", // subtle shadow
    },
  },
  {
    name: "Zenitsu Agatsuma",
    msg: "Lightning-fast and full of energy! My React apps spark with interactivity ⚡  You’ll see them shine as we go further!",
    img: "/images/zenitsu.jpg",
    bimg: "/bimages/zenb.png",
    style: {
      position: "right",
      bubbleColor: "#ffcd09",
      boxShadow: "0 4px 12px rgba(255, 205, 9, 0.5)", // subtle shadow
    },
  },
  {
    name: "Inosuke Hashibira",
    msg: "Hah! The backend is mine! APIs, databases, Spring Boot — I tear through them like a beast to keep everything strong and fast!",
    img: "/images/inosuke.jpg",
    bimg: "/bimages/inosukeb.jpg",
    style: {
      position: "left",
      bubbleColor: "#aee1f6",
      boxShadow: "0 4px 12px rgba(174, 225, 246, 0.5)", // subtle shadow
    },
  },
  {
    name: "Tanjiro Kamado",
    msg: "Together, we’ll overcome even Muzan’s darkness. Traveler, the portfolio awaits — are you ready?",
    img: "/images/tanjiro2.png",
    bimg: "/bimages/tanjiro.jpg",
    style: {
      position: "right",
      bubbleColor: "#16d6c2",
      boxShadow: "0 4px 12px rgba(22, 214, 194, 0.5)", // subtle shadow
    },
  },
];

export { guideBar, enterConvo };
