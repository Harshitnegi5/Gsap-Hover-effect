let crsr = document.querySelector(".cursor");

window.addEventListener("mousemove", (dets) => {
  gsap.to(crsr, {
    x: dets.clientX - 15 + "px",
    y: dets.clientY - 15 + "px",
    duration: 0.4,
    ease: Expo,
  });
});

let frames = document.querySelectorAll(".frames");

frames.forEach((value) => {
  value.addEventListener("mouseenter", () => {
    gsap.to(crsr, {
      scale: 8,
    });

    gsap.to(value.children, {
      color: "#fff",
      duration: 0.4,
      y: "-5vw",
    });
  });

  value.addEventListener("mouseleave", () => {
    gsap.to(crsr, {
      scale: 1,
    });

    gsap.to(value.children, {
      color: "#000",
      duration: 0.4,
      y: "0",
    });
  });
});
