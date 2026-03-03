function moveRandomEl(elm) {
  // Make button stay within viewport
  elm.style.position = "fixed"; // fixed ensures it's always clickable
  elm.style.top = Math.floor(Math.random() * 70 + 15) + "vh"; // use viewport height
  elm.style.left = Math.floor(Math.random() * 70 + 15) + "vw"; // use viewport width
  elm.style.zIndex = 1000; // make sure button is on top
}

const moveRandom = document.querySelector("#move-random");

if (moveRandom) {
  moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
  });
}