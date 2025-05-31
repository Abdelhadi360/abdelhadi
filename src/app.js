import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InertiaPlugin from "gsap/InertiaPlugin";
import MotionPathPlugin from "gsap/MotionPathPlugin";
gsap.registerPlugin(Draggable, ScrollTrigger, InertiaPlugin);

// Theme Toggle

let sunBtn = document.getElementById("sunBtn");
let moonBtn = document.getElementById("moonBtn");
let html = document.documentElement;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    html.classList.add("dark");
    showSun();
  } else {
    html.classList.remove("dark");
    showMoon();
  }

  sunBtn.addEventListener("click", toggleDarkMode);
  moonBtn.addEventListener("click", toggleDarkMode);

  function toggleDarkMode() {
    html.classList.toggle("dark");
    const isDark = html.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    isDark ? showSun() : showMoon();
  }

  function showSun() {
    sunBtn.classList.remove("hidden");
    sunBtn.classList.add("block");
    moonBtn.classList.add("hidden");
    moonBtn.classList.remove("block");
  }

  function showMoon() {
    moonBtn.classList.remove("hidden");
    moonBtn.classList.add("block");
    sunBtn.classList.add("hidden");
    sunBtn.classList.remove("block");
  }

// Side Bar
let barBtn = document.getElementById("barBtn");
let xBtn = document.getElementById("xBtn");
const sideBar = document.getElementById("sideBar");
const backdrop = document.getElementById("backdrop");

barBtn.addEventListener("click", openSideBar);
xBtn.addEventListener("click", closeSideBar);
backdrop.addEventListener("click", closeSideBar);

function openSideBar() {
  backdrop.classList.remove("hidden");

  gsap.to(backdrop, {
    duration: .3,
    opacity: .5
  });

  gsap.to(sideBar, {
    duration: .7,
    opacity: 1,
    x: 0
  });
}
function closeSideBar() {
  gsap.to(backdrop, {
    duration: .3,
    opacity: 0,
    onComplete: () => {
      backdrop.classList.add("hidden");
    }
  });

  gsap.to(sideBar, {
    duration: .7,
    opacity: 0,
    x: 384
  });
}

// GSAP Animations

const mover = document.getElementById("mover");

gsap.from("#header a, #header img", {
    duration: .5,
    opacity: 0,
    y: -10,
    stagger: 0.3
});

gsap.to("#horiz-line", {
    duration: 3,
    left: -100,
    opacity: 0,
    repeatDelay: 3,
    repeat: -1
});
gsap.to("#n1", {
    duration: 1.5,
    top: 0,
    opacity: 0,
    repeatDelay: 6,
    repeat: -1
});
gsap.to("#n2", {
    delay: 2,
    duration: 1.5,
    top: 0,
    opacity: 0,
    repeatDelay: 7,
    repeat: -1
});

gsap.from(".content .cont-elmnt", {
    duration: 1.5,
    y: 100,
    opacity: 0,
    stagger: 1
});

let currentZ = 30;
const minZ = 30;
const maxZ = 40;
Draggable.create(".tools img", {
    type: "x,y",
    zIndexBoost: false,
    bounds: ".tools",
    inertia: true,
    onPress: function () {

      currentZ++
      if(currentZ > maxZ) currentZ = minZ

      gsap.set(this.target, {
        zIndex: currentZ
      });
    }
});

gsap.from(".tools img", {
    duration: 1.5,
    opacity: 0,
    ease: "none"
});
gsap.to(".scrol-bar", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        end: "bottom 90%",
        scrub: true
    },
    duration: 1,
    height: "100%",
    ease: "none"
});


gsap.from(".cards div", {
    scrollTrigger: {
        trigger: "#skills",
        start: "top 80%",
        end: "bottom 90%",
        // markers: true
    },
    duration: 1.5,
    opacity: 0,
    y: 100,
    ease: "none"
});