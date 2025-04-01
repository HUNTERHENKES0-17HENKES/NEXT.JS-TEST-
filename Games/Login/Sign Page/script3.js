document.addEventListener('DOMContentLoaded', function () {
  let score = 0;
  let timeLeft = 60;
  let timerInterval;
  let gameStarted = false;
  let level = 1;
  let clickRate = 1; // Click multiplier
  let clickInterval = 1000; // Milliseconds between each click
  let scoreNeededForNextLevel = 50; // Adjust as needed
  let currentGameMode = GameModes.NORMAL; // Default game mode

  const startButton = document.getElementById('startButton');
  const stopButton = document.getElementById('stopButton');
  const resetButton = document.getElementById('resetButton');
  const clickButton = document.getElementById('clickButton');
  const timeWarpButton = document.getElementById('timeWarpButton');
  const relaxationModeButton = document.getElementById('relaxationModeButton');
  const endGameButton = document.getElementById('endGameButton');
  const scoreDisplay = document.getElementById('score');
  const timerDisplay = document.getElementById('timer');
  const messageDisplay = document.getElementById('message');

  startButton.addEventListener('click', startGame);
  stopButton.addEventListener('click', stopGame);
  resetButton.addEventListener('click', resetGame);
  clickButton.addEventListener('click', clickHandler);
  timeWarpButton.addEventListener('click', activateTimeWarp);
  relaxationModeButton.addEventListener('click', activateRelaxationMode);
  endGameButton.addEventListener('click', endGame);

  // Define game modes
  const GameModes = {
    NORMAL: 'normal',
    TIMED: 'timed',
    HARDCORE: 'hardcore',
    RELAXED: 'relaxed'
  };

  // Function to set the game mode
  function setGameMode(mode) {
    currentGameMode = mode;
    // Adjust game settings based on the selected mode
    switch (mode) {
      case GameModes.NORMAL:
        // Reset game settings to default values for normal mode
        timeLeft = 60;
        timerDisplay.textContent = timeLeft;
        scoreNeededForNextLevel = 50;
        break;
      case GameModes.TIMED:
        // Set specific game settings for timed mode
        timeLeft = 30; // Adjust timer duration for timed mode
        timerDisplay.textContent = timeLeft;
        scoreNeededForNextLevel = 100; // Adjust score requirement for timed mode
        break;
      case GameModes.HARDCORE:
        // Set specific game settings for hardcore mode
        timeLeft = 120; // Adjust timer duration for hardcore mode
        timerDisplay.textContent = timeLeft;
        scoreNeededForNextLevel = 25; // Adjust score requirement for hardcore mode
        break;
      case GameModes.RELAXED:
        // Set specific game settings for relaxed mode
        timeLeft = Infinity; // No time limit for relaxed mode
        timerDisplay.textContent = '∞';
        scoreNeededForNextLevel = 75; // Adjust score requirement for relaxed mode
        break;
      default:
        break;
    }
  }
  
  function startGame() {
    if (!gameStarted) {
      gameStarted = true;
      clickButton.disabled = false;
      timerInterval = setInterval(updateTimer, 1000);
      updateLevelDisplay();
    }
  }

  function stopGame() {
    clearInterval(timerInterval);
    clickButton.disabled = true; // Disable click button when the game is stopped
    gameStarted = false;
  }

  function resetGame() {
    stopGame();
    score = 0;
    timeLeft = 60;
    level = 1;
    clickRate = 1;
    clickInterval = 1000;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = timeLeft;
    messageDisplay.textContent = '';
    updateLevelDisplay();
  }

  function updateTimer() {
    timeLeft--;
    timerDisplay.textContent = Math.max(0, timeLeft); // Ensure timer doesn't go below 0
    if (timeLeft === 0) {
      stopGame();
      messageDisplay.textContent = `Game Over! Your final score: ${score}`;
    } else if (score >= scoreNeededForNextLevel * level) {
      level++;
      updateLevelDisplay();
      updateGameDifficulty();
    }
  }

  function clickHandler() {
    if (gameStarted) {
      score += clickRate;
      scoreDisplay.textContent = score;
    }
  }

  function updateLevelDisplay() {
    messageDisplay.textContent = `Level: ${level}`;
  }

  function updateGameDifficulty() {
    // Adjust click rate and interval based on level
    clickRate += 0.5;
    clickInterval -= 50;
  }

  function activateTimeWarp() {
    clickInterval = 500;
    setTimeout(() => {
      clickInterval = 1000;
    }, 5000);
  }

  function activateRelaxationMode() {
    timeLeft = Infinity;
    timerDisplay.textContent = '∞';
  }

  function endGame() {
    // End the game
    stopGame();
    messageDisplay.textContent = "Game ended by player.";
  }
});
