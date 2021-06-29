const colors = ["#f1f5f8", "#f9a4c1", "#a2f2c3", "b6e2f6", "rgba(78,150,221)"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const random = getColors();
  document.body.style.backgroundColor = colors[random];
  color.textContent = colors[random];
});

function getColors() {
  return Math.floor(Math.random() * colors.length);
}
