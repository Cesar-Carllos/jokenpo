let playerName = ''
let playerScore = 0
let playerChoice = 0
let computerScore = 0
let computerChoice = 0

// Display message on the console.
const message = (text) => document
  .getElementById("message").innerHTML = text

// Sets the player name on screen.
const setPlayerName = (name) => document
  .getElementById("player-name").innerHTML = name

// raffle between two numbers.
const raffle = (min, max) => Math
  .floor(Math.random() * (max - min + 1)) + min

// calculates and returns who won
const calculateChoice = (player, computer) => {
  const tie = 0
  const playerWin = 1
  const computerWin = 2  

  const playerRock = player === 1
  const playerPaper = player === 2
  const playerScissors = player === 3

  const computerRock = computer === 1
  const computerPaper = computer === 2
  const computerScissors = computer === 3

  if (playerRock && computerRock) {
    return tie
  } else if ( playerRock && computerPaper) {
    return computerWin
  } else if (playerRock && computerScissors) {
    return playerWin
  } else if (playerPaper && computerRock) {
    return playerWin
  } else if (playerPaper && computerPaper) {
    return tie
  } else if (playerPaper && computerScissors) {
    return computerWin
  } else if (playerScissors && computerRock) {
    return computerWin
  } else if (playerScissors && computerPaper) {
    return playerWin
  } else if (playerScissors && computerScissors) {
    return tie
  }
}

// adds points to the player.
const sumPointsPlayer = () => {
  playerScore++
  document.getElementById("player-score").innerHTML = playerScore
}

// adds points to the computer.
const sumPointsComputer = () => {
  computerScore++
  document.getElementById("computer-score").innerHTML = computerScore
}

// Adds the selected class.
const selectOn = (type, choice) => document
    .getElementById(`${type}-choice-${choice}`)
    .classList.add("selectOn")

// Remove selected class
const selectOff = (type, choice) => document
    .getElementById(`${type}-choice-${choice}`)
    .classList.remove("selectOn")


// Chooses the user's move.
const toPlay = (choice) => {
  playerChoice = choice
  selectOn("player", playerChoice)

  // raffle the computer game
  computerChoice = raffle(1, 3)
  selectOn("computer", computerChoice)

  const winner = calculateChoice(playerChoice, computerChoice)

  if (winner == 0) {
    message("Tied")
  } else if (winner == 1) {
    message(`Points for ${playerName}`)
    sumPointsPlayer()
  } else if (winner == 2) {
    message("Points for computer")
    sumPointsComputer()
  }

  setTimeout(() => {
    selectOff("player", playerChoice)
    selectOff("computer", computerChoice)
    message(`${playerName} choose an option...`)
  }, 1500)
}

document.getElementById("player-choice-1").onclick = () => {toPlay(1)}
document.getElementById("player-choice-2").onclick = () => {toPlay(2)}
document.getElementById("player-choice-3").onclick = () => {toPlay(3)}

playerName = prompt("Welcome, before starting choose the name of the player!")

message(`Welcome ${playerName} Are you ready? choose an option above...`)
setPlayerName(playerName)
