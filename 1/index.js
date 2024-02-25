const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power1.out" } });

tl.fromTo(
  ".cookie-container",
  { scale: 0 },
  { scale: 1, ease: "elastic.out(1, 0.3)", duration: 1.5 }
);

tl.fromTo(
  ".cookie",
  { opacity: 0, x: -50, rotation: "-45deg" },
  { opacity: 1, x: 0, rotation: "0deg" },
  "<50%"
);

// <50% : when the 'cookie-container' is in 0.75 of 1.5, I want the cookie to show up

// '<' sync with the previous animations
tl.fromTo(".text", { x: 30, opacity: 0 }, { x: 0, opacity: 1 }, "<");

// click on the button and then the card fades
const button = document.querySelector("button");
button.addEventListener("click", () => {
  gsap.to(".cookie-container", { y: 30, opacity: 0 });
});

// cookie jump
tl.fromTo(
  ".cookie",
  { y: 0 },
  { y: -30, rotation: "-30deg", yoyo: true, repeat: -1 }
);

tl.fromTo("#crumbs", { y: 0 }, { y: -30, repeat: -1, yoyo: true }, "<");
