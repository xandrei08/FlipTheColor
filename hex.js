const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let random = "#";
  for (let i = 0; i < 6; i++) {
    random += colors[getColors()];
  }
  document.body.style.backgroundColor = random;
  color.textContent = random;
  console.log(random);
});

function getColors() {
  return Math.floor(Math.random() * colors.length);
}
