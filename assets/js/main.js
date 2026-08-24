document.addEventListener("DOMContentLoaded", () => {
  const toTop = document.getElementById("to-top");
  if (toTop) {
    window.addEventListener("scroll", () => {
      toTop.classList.toggle("visible", window.scrollY > 400);
    });
  }
});
