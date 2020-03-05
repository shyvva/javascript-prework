function playGame(playerInput) {

    clearMessages();

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    printMessage('Komputer wybrał: ' + computerMove);
    
    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);

    let printResult = displayResult(computerMove, playerMove);


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










