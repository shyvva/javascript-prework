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

function displayResult(computerMove, playerMove, playerScore = 0, computerScore = 0) {
	console.log('moves:', computerMove, playerMove);
	if (computerMove == 'kamień' && playerMove == 'kamień') {
		printMessage('Remis');
		computerMove += 1;
	} else if (computerMove == 'kamień' && playerMove == 'papier') {
		playerScore =+ 1;
	} else if (computerMove == 'kamień' && playerMove == 'nożyce') {
		computerScore =+ 1;
	} else if (computerMove == 'papier' && playerMove == 'kamień') {
		computerScore =+ 1;
	} else if (computerMove == 'papier' && playerMove == 'papier') {
		printMessage('Remis');
	} else if (computerMove == 'papier' && playerMove == 'nożyce') {
		playerScore =+ 1;
	} else if (computerMove == 'nożyce' && playerMove == 'kamień') {
		playerScore =+ 1;
	} else if (computerMove == 'nożyce' && playerMove == 'papier') {
		computerScore =+ 1;
	} else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
		printMessage('Remis');
	}
	document.getElementById('computer-score').innerHTML = computerScore;
	document.getElementById('player-score').innerHTML = playerScore;
}

