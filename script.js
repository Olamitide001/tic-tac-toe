"use strict";
const newGameButton = document.querySelector(".new-game");
const allLayer = document.querySelectorAll(".gameboard div");
const player1 = document.querySelector("#name--0");
const player2 = document.querySelector("#name--1");
const winner = document.querySelector('.winner-img')

winner.style.display ='none'
let activePlayer;
let gameActive = true;
document.getElementById(`name--0`).classList.toggle("player-active");
// allLayer.forEach(top => top.style.color = 'blue')
//Active Player
const winningCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function playing(play) {
  play.forEach((top, index) =>
    top.addEventListener("click", function layout(event) {
      if (gameActive) {
        const circle = document.createElement("nav");
        circle.classList.add("circle");
        const cross = document.createElement("nav");
        cross.classList.add("cross");
        document.querySelector(`.avater--${activePlayer}`);
        activePlayer = activePlayer === 0 ? 1 : 0;
        if (activePlayer === 0) {
          top.append(cross);
        } else {
          top.append(circle);
        }
        // document.getElementById(`name--${activePlayer}`).classList.toggle('player-active')
        document.getElementById(`name--0`).classList.toggle("player-active");
        document.getElementById(`name--1`).classList.toggle("player-active");
        checkScore();
        event.target.removeEventListener("click", layout);
      }
    })
  );
}
playing(allLayer);

function checkScore() {
  const winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  winningCombo.forEach((curr) => {
    const crossWins = curr.every((cell) =>
      allLayer[cell].firstChild?.classList.contains("cross")
    );
    const circleWins = curr.every((cell) =>
      allLayer[cell].firstChild?.classList.contains("circle")
    );
    if (crossWins) {
      player1.textContent = "Winner";
      winner.style.display ='block'
      gameActive = false;
    } else if (circleWins) {
      player2.textContent = "Winner";
      winner.style.display ='block'
      gameActive = false
    }
  });
}

//New Game Button
newGameButton.addEventListener("click", function (e) {});
