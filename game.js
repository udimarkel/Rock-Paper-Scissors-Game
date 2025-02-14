const yourScore = document.querySelector("#yourScore");
const comScore = document.querySelector("#comScore");
const allmymove = document.querySelectorAll(".mymove");
const img = document.querySelectorAll("img");
allmymove.forEach((element) => {
  element.addEventListener("click", () => {
    back();
    move(element);
  });
});
function move(element) {
  console.log(element);
  comove = computermove();
  element.style.borderColor = "green";
  let win = howWin(element.id, comove);
  score(win);
}
function back() {
  img.forEach((element) => {
    element.style.borderColor = "black";
  });
}
function score(win) {
  console.log(win);
  if (win === 1) {
    yourScore.innerHTML = `${parseInt(yourScore.innerHTML) + 1}`;
  }
  if (win === 0) {
    comScore.innerHTML = `${parseInt(comScore.innerHTML) + 1}`;
  }
}
function computermove() {
  let comove = Math.random() / (1 / 3);
  comove = Math.floor(comove);
  document.getElementById(`cphoto${++comove}`).style.borderColor = "green";
  return comove;
}
function howWin(you, com) {
  console.log(you);
  console.log(com);
  switch (com) {
    case "1":
      switch (you) {
        case "2":
          return 1;
        case "1":
          return 3;
        default:
          return 0;
      }
    case "2":
      switch (you) {
        case "3":
          return 1;
        case "2":
          return 3;
        default:
          return 0;
      }
    default:
      switch (you) {
        case "1":
          return 1;
        case "3":
          return 3;
        default:
          return 0;
      }
  }
}
