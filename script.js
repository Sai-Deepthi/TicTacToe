
var boardElement = document.getElementById("board");
var currentPlayer = "O";
var boardValues = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
var game = true;
for (let i = 0; i < 9; i++) {
  var tile = document.createElement("div");
  boardElement.appendChild(tile);
  tile.innerText = " "
  tile.classList.add("tile-style");
  tile.addEventListener("click", tileClick);
  var x = Math.floor(i / 3);
  var y = (i + 3) % 3;
  tile.id = x + '-' + y;
}


function tileClick() {
  if (game == true) {
    console.log(game + "hello");
    var x = this.id.charAt(0);
    var y = this.id.charAt(2);
    var value = boardValues[x][y];
    if (value !== ' ')
      return;

    if (currentPlayer == 'X') {
      this.innerText = "X";
      currentPlayer = "O";
      boardValues[x][y] = "X";
    } else {
      this.innerText = "O";
      currentPlayer = "X";
      boardValues[x][y] = "O";
    }
    if (check()) {
      document.getElementById("whoswinner").innerText = (currentPlayer == 'X' ? 'O' : 'X');
      document.getElementById("winnerText").style = "opacity : 1";
      game = false;
    }
  }
}


function check() {
  if (boardValues[0][0] == boardValues[0][1] && boardValues[0][1] == boardValues[0][2] && boardValues[0][0] !== ' ') {
    document.getElementById("0-0").classList.add("winner");
    document.getElementById("0-1").classList.add("winner");
    document.getElementById("0-2").classList.add("winner");
    return true;
  }

  if (boardValues[1][0] == boardValues[1][1] && boardValues[1][1] == boardValues[1][2] && boardValues[1][0] !== ' ') {
    document.getElementById("1-0").classList.add("winner");
    document.getElementById("1-1").classList.add("winner");
    document.getElementById("1-2").classList.add("winner");
    return true;
  }

  if (boardValues[2][0] == boardValues[2][1] && boardValues[2][1] == boardValues[2][2] && boardValues[2][0] !== ' ') {
    document.getElementById("2-0").classList.add("winner");
    document.getElementById("2-1").classList.add("winner");
    document.getElementById("2-2").classList.add("winner");
    return true;
  }

  if (boardValues[0][0] == boardValues[1][0] && boardValues[1][0] == boardValues[2][0] && boardValues[0][0] !== ' ') {
    document.getElementById("0-0").classList.add("winner");
    document.getElementById("1-0").classList.add("winner");
    document.getElementById("2-0").classList.add("winner");
    return true;
  }

  if (boardValues[0][1] == boardValues[1][1] && boardValues[1][1] == boardValues[2][1] && boardValues[0][1] !== ' ') {
    document.getElementById("0-1").classList.add("winner");
    document.getElementById("1-1").classList.add("winner");
    document.getElementById("2-1").classList.add("winner");
    return true;
  }

  if (boardValues[0][2] == boardValues[1][2] && boardValues[1][2] == boardValues[2][2] && boardValues[0][2] !== ' ') {
    document.getElementById("0-2").classList.add("winner");
    document.getElementById("1-2").classList.add("winner");
    document.getElementById("2-2").classList.add("winner");
    return true;
  }

  if (boardValues[0][0] == boardValues[1][1] && boardValues[1][1] == boardValues[2][2] && boardValues[0][0] !== ' ') {
    document.getElementById("0-0").classList.add("winner");
    document.getElementById("1-1").classList.add("winner");
    document.getElementById("2-2").classList.add("winner");
    return true;
  }

  if (boardValues[0][2] == boardValues[1][1] && boardValues[1][1] == boardValues[2][0] && boardValues[0][2] !== ' ') {
    document.getElementById("0-2").classList.add("winner");
    document.getElementById("1-1").classList.add("winner");
    document.getElementById("2-0").classList.add("winner");
    return true;
  }

}


/*
Enchancements
1. Don't let user input anything once anyone wins the game
vokay donee
*/