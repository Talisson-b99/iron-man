document.addEventListener("DOMContentLoaded", () => {
  function isDesktop() {
    return window.innerWidth >= 1024;
  }

  let topPercentage = isDesktop() ? "35%" : "60%";

  let tl = gsap.timeline();
  tl.to(".bg-loader-1", { y: "-100%", duration: 3 });
  tl.to(
    ".bg-loader-2",
    {
      y: "100%",
      duration: 2.7,
    },
    "<"
  );
  tl.to(".bg-loader", { display: "none" });
  tl.fromTo(
    ".logo",
    { y: "-100%", opacity: 0 },
    { duration: 1, y: 0, opacity: 1 }
  );
  tl.fromTo(
    ".menu-item",
    { y: "-100%", opacity: 0 },
    { duration: 1, y: 0, opacity: 1, stagger: 0.25 },
    "<"
  );
  tl.fromTo(
    ".text-1",
    { y: -50, opacity: 0 },
    { duration: 1, y: 0, opacity: 1, stagger: 0.25 },
    "<"
  );
  tl.fromTo(
    ".container-img",
    { y: "100%", x: "-100%" },
    { duration: 1.5, y: -30, x: 0 }
  );
  tl.to(".container-text-right", { top: topPercentage, duration: 1 }, "<");
});
