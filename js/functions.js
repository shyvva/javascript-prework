function printMessage(msg) {
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages() {
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(moveId) {
	if (moveId == 1) {
		return 'kamień';
	} else if (moveId == 2) {
		return 'papier';
	} else if (moveId == 3) {
		return 'nożyce';
	} else {
		return moveId;
	}
}

function displayResult(computerMove, playerMove) {

	if (computerMove == 'kamień' && playerInput == 'kamień') {
		printMessage('Remis');
	} else if (computerMove == 'kamień' && playerMove == 'papier') {
		printMessage('Wygrałeś !');
	} else if (computerMove == 'kamień' && playerMove == 'nożyce') {
		printMessage('Przegrałeś');
	} else if (computerMove == 'papier' && playerMove == 'kamień') {
		printMessage('Przegrałeś');
	} else if (computerMove == 'papier' && playerMove == 'papier') {
		printMessage('Remis');
	} else if (computerMove == 'papier' && playerMove == 'nożyce') {
		printMessage('Wygrałeś !');
	} else if (computerMove == 'nożyce' && playerMove == 'kamień') {
		printMessage('Wygrałeś !');
	} else if (computerMove == 'nożyce' && playerMove == 'papier') {
		printMessage('Przegrałeś');
	} else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
		printMessage('Remis');
	} else {
		(playerInput >= 4);
		(printMessage('Nieprawidłowa liczba. YOU LOSE !'));
	}
}