
let playerScore = 0;
let computerScore = 0;
function playGame(playerInput) {

    clearMessages();

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    // const randomNumber = Math.floor(Math.random() * (3-1) + 1); Cheat mode computer roll number 1 or 2... I don't like use cheats !
    // const randomNumber = Math.floor(Math.random() * (2-1) + 1); Cheat mode computer roll always 1 number I don't like use cheats !
    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    printMessage('Computer choose: ' + computerMove);

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    printMessage('Your choice: ' + playerMove);

    const printResult = displayResult(computerMove, playerMove);
}

document.getElementById('rock').addEventListener('click', function () {
    playGame(1);
});

document.getElementById('papper').addEventListener('click', function () {
    playGame(2);
});

document.getElementById('scissors').addEventListener('click', function () {
    playGame(3);
});













