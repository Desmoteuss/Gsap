const back = document.querySelector(".back");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const headline = document.querySelector(".headline");

const tl = new TimelineMax();

tl.fromTo(back, 1, { height: "0%" }, { height: "80%" })
  .fromTo(back, 1.2, { width: "100%" }, { width: "80%" })
  .fromTo(slider, 1.3, { x: "-100%" }, { x: "0%" })
  .fromTo(logo, 1.4, { opacity: "0" }, { opacity: "1" })
  .fromTo(headline, 1.5, { opacity: "0" }, { opacity: "1", y: 20, x: 10 })

