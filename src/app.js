import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import InertiaPlugin from "gsap/InertiaPlugin";
import MotionPathPlugin from "gsap/MotionPathPlugin";
gsap.registerPlugin(Draggable, InertiaPlugin, MotionPathPlugin);


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

// GSAP Animations

const mover = document.getElementById("mover");

gsap.from("#header a, #header img", {
    duration: .5,
    opacity: 0,
    y: -10,
    stagger: 0.5
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

gsap.from(".tools img", {
    duration: 1.5,
    opacity: 0,
    ease: "none"
});
Draggable.create(".tools img", {
    type: "x,y",
    bounds: ".tools",
    inertia: true
})