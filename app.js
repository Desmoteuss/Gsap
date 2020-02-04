const back = document.querySelector(".back");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const headline = document.querySelector(".headline");

const tl = new TimelineMax();

tl.fromTo(back, 1, { height: "10%" }, { height: "80%" }).fromTo(
  slider,
  1.2,
  { x: "-100%" },
  { x: "0%" }
);
