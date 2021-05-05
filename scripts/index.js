// Variables and element selectors
let mousePos;
const box = document.querySelector(".box");
// Resize function
function resize(e) {
  let parent = box.parentNode;
  let xAxe = mousePos - e.x;
  mousePos = e.x;
  parent.style.width =
    parseInt(getComputedStyle(parent, "").width) + xAxe + "px";
}
// Add event listener
box.addEventListener(
  "mousedown",
  (e) => {
    mousePos = e.x;
    document.addEventListener("mousemove", resize, false);
  },
  false
);
document.addEventListener(
  "mouseup",
  () => {
    document.removeEventListener("mousemove", resize, false);
  },
  false
);
