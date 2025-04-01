const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const playerScoreDisplay = document.getElementById('playerScore');
const botScoreDisplay = document.getElementById('botScore');
const catScoreDisplay = document.getElementById('catScore');

let currentPlayer = 'O'; // Player is 'O', bot is 'X'
let playerScore = 0;
let botScore = 0;
let catScore = 0;
let winner = null;
let botDifficulty = 'medium'; // Default difficulty
const botPersonalities = {
  easy: { // Easy bot personality
    name: 'Easy Bot',
    moveDelay: 300 // Delay between bot moves in milliseconds
  },
  medium: { // Medium bot personality (default)
    name: 'Medium Bot',
    moveDelay: 200
  },
  hard: { // Hard bot personality
    name: 'Hard Bot',
    moveDelay: 100
  }
};
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (!cell.textContent && !winner && currentPlayer === 'O') {
      cell.textContent = currentPlayer;
      checkWin();
      currentPlayer = 'X'; // Switch to bot's turn after player's move
      botMove();
    }
  });
});

function botMove() {
  setTimeout(() => {
    const availableCells = [...cells].filter(cell => !cell.textContent);
    if (availableCells.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableCells.length);
      const botCell = availableCells[randomIndex];
      botCell.textContent = 'X';
      checkWin();
      currentPlayer = 'O'; // Switch back to player's turn after bot's move
    }
  }, botPersonalities[botDifficulty].moveDelay);
}

function checkWin() {
  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      cells[a].style.backgroundColor = 'lightgreen';
      cells[b].style.backgroundColor = 'lightgreen';
      cells[c].style.backgroundColor = 'lightgreen';
      winner = cells[a].textContent;
      if (winner === 'O') {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
      } else if (winner === 'X') {
        botScore++;
        botScoreDisplay.textContent = botScore;
      }
      setTimeout(() => {
        alert(`Player ${winner === 'O' ? 'O (Player)' : 'X (Bot)'} wins!`);
        resetGame();
      }, 1);
      return;
    }
  }
  if ([...cells].every(cell => cell.textContent)) {
    catScore++;
    catScoreDisplay.textContent = catScore;
    setTimeout(() => {
      alert("It's a draw!");
      resetGame();
    }, 100);
  }
}

function resetGame() {
  cells.forEach(cell => {
    cell.textContent = '';
    cell.style.backgroundColor = '#eee';
  });
  currentPlayer = 'O';
  winner = null;
}

// Function to set the bot difficulty
function setBotDifficulty(difficulty) {
  botDifficulty = difficulty;
  alert(`Bot difficulty set to ${botPersonalities[botDifficulty].name}`);
}



var tabs = document.querySelectorAll(".lboard_tabs ul li");
var today = document.querySelector(".today");
var month = document.querySelector(".month");
var year = document.querySelector(".year");
var items = document.querySelectorAll(".lboard_item");

tabs.forEach(function(tab){
	tab.addEventListener("click", function(){
		var currenttab = tab.getAttribute("data-li");
		
		tabs.forEach(function(tab){
			tab.classList.remove("active");
		})

		tab.classList.add("active");

		items.forEach(function(item){
			item.style.display = "none";
		})

		if(currenttab == "today"){
			today.style.display = "block";
		}
		else if(currenttab == "month"){
			month.style.display = "block";
		}
		else{
			year.style.display = "block";
		}
    function goBack() {
      window.location.href = "other.html";
    }
	})
})