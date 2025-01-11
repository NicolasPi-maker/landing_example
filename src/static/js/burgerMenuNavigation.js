window.onload = () => {
  const burgerBtn = document.querySelector("#burger-btn");
  const navMobile = document.querySelector("#nav-mobile");
  const openedSvg = document.querySelector("#opened-svg");
  const closedSvg = document.querySelector("#closed-svg");

  burgerBtn.addEventListener("click", () => {
    navMobile.classList.toggle("open");
    toggleSvg();
  });

  const toggleSvg = () => {
    if (navMobile.classList.contains("open")) {
      // switch svg to times icon when nav is open
      openedSvg.style.opacity = "1";
      closedSvg.style.opacity = "0";

      // prevent scrolling when nav is open
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      // switch svg to burger icon when nav is closed
      openedSvg.style.opacity = "0";
      closedSvg.style.opacity = "1";

      // allow scrolling when nav is closed and reset scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  };
};
