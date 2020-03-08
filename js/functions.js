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

function compScore(computerScore) {
	document.getElementById('computer-score').innerHTML = computerScore;

}
function score(playerScore) {
	document.getElementById('player-score').innerHTML = playerScore;
}

function displayResult(computerMove, playerMove) {
	console.log('moves:', computerMove, playerMove);
	if (computerMove == 'kamień' && playerMove == 'kamień') {
		printMessage('Remis');
	} else if (computerMove == 'kamień' && playerMove == 'papier') {
		score(playerScore += 1);
	} else if (computerMove == 'kamień' && playerMove == 'nożyce') {
		compScore(computerScore += 1);
	} else if (computerMove == 'papier' && playerMove == 'kamień') {
		compScore(computerScore += 1);
	} else if (computerMove == 'papier' && playerMove == 'papier') {
		printMessage('Remis');
	} else if (computerMove == 'papier' && playerMove == 'nożyce') {
		score(playerScore += 1);
	} else if (computerMove == 'nożyce' && playerMove == 'kamień') {
		score(playerScore += 1);
	} else if (computerMove == 'nożyce' && playerMove == 'papier') {
		compScore(computerScore += 1);
	} else {
		(computerMove == 'nożyce' && playerMove == 'nożyce');
		printMessage('Remis');

	}

}


