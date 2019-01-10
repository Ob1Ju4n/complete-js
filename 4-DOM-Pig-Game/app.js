/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
function newGame() {
    "use strict";
    var i;
    playing = true;
    scores = [0, 0];
    dices = [0, 0];
    targetScore = 100;
    roundScore = 0;
    activePlayer = 0;

    var tgtElement = document.getElementById('tgt-score');
    tgtElement.disabled =  false;
    tgtElement.value =  '';
    tgtElement.focus();

    for (i = 0; i < scores.length; i++) {
        document.getElementById('score-' + i).textContent = '0';
        document.getElementById('current-' + i).textContent = '0';
        document.getElementById('name-' + i).textContent = 'Player ' + i;
        document.querySelector('.player-' + i + '-panel').classList.add('active');
        document.querySelector('.player-' + i + '-panel').classList.remove('winner');
    }

    for (i = 0; i < dices.length; i++) {
        document.getElementById('dice-' + (i + 1)).style.display = 'none';
    }
}

function gameOver() {
    "use strict";
    playing = false;
    document.getElementById('name-' + activePlayer).textContent = 'WINNER!';
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    for (var i = 0; i < dices.length; i++) {
        document.getElementById('dice-' + (i + 1)).style.display = 'none';
    }
}

function nextPlayer() {
    "use strict";

    if (playing) {
        activePlayer = activePlayer === 0 ? 1 : 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        for (var i = 0; i < dices.length; i++) {
            document.getElementById('dice-' + (i + 1)).style.display = 'none';
        }
    }
}

var scores, targetScore, roundScore, activePlayer, dices, playing;

newGame();

document.querySelector('.btn-new').addEventListener('click', newGame);

document.querySelector('#tgt-score').addEventListener('blur', function () {
    "use strict";
    if (playing) {
        var inputElement = document.getElementById('tgt-score');
        console.log(inputElement.value);
        targetScore = (inputElement.value > 0 ? inputElement.value : targetScore) - 1;
        inputElement.disabled =  true;
    }
});

document.querySelector('.btn-roll').addEventListener('click', function () {
   "use strict";

    if (playing) {
        var i;

        for (i = 0; i < dices.length; i ++) {
            dices[i] = Math.floor(Math.random() * 6) + 1;

            var diceElement = document.getElementById('dice-' + (i + 1));
            diceElement.style.display = 'block';
            diceElement.src = 'dice-' + dices[i] + '.png';
        }

        i = 0;
        if (dices[i] === 1 || dices[i + 1] === 1) {
            nextPlayer();
        } else if (dices[i] === 6 && dices[i+1] === 6) {
            scores[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = 0;
            nextPlayer();
        } else {
            roundScore += dices[i] + dices[i + 1];
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    "use strict";

    if (playing) {
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        if (scores[activePlayer] > targetScore) {
            gameOver();
        } else {
            nextPlayer();
        }
    }
});




