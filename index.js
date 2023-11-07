document.getElementById('player1Rock').addEventListener('click', function() {
    selectChoice('player1', 'rock');
});
document.getElementById('player1Paper').addEventListener('click', function() {
    selectChoice('player1', 'paper');
});
document.getElementById('player1Scissors').addEventListener('click', function() {
    selectChoice('player1', 'scissors');
});

document.getElementById('player2Rock').addEventListener('click', function() {
    selectChoice('player2', 'rock');
});
document.getElementById('player2Paper').addEventListener('click', function() {
    selectChoice('player2', 'paper');
});
document.getElementById('player2Scissors').addEventListener('click', function() {
    selectChoice('player2', 'scissors');
});
// document.getElementById('restartButton').addEventListener('click', function() {
//     resetGame();
// });
var player1Choice = "null";
var player2Choice = "null";
function selectChoice(player, choice) {
    if (player === 'player1') {
        player1Choice = choice;
        document.getElementById("select1Choice").textContent = "✅";
    } else {
        player2Choice = choice;
        document.getElementById("select2Choice").textContent = "✅";
    }

    if (player1Choice != "null" && player2Choice != "null") {
        determineWinner();
    }
}

function determineWinner() {
    // var player1Choice = document.getElementById('player1Choice').textContent;
    // var player2Choice = document.getElementById('player2Choice').textContent;
    var result = '';

    if (player1Choice === player2Choice) {
        result = '👍 it\'s a tie! 👍';
    } else if (
        (player1Choice === 'rock' && player2Choice === 'scissors') ||
        (player1Choice === 'paper' && player2Choice === 'rock') ||
        (player1Choice === 'scissors' && player2Choice === 'paper')
    ) {
        result = 'Player 1 wins! 🟢';
    } else {
        result = 'Player 2 wins! 🔴';
    }

    document.getElementById('result').innerHTML = result;
    document.getElementById('player1Choice').textContent = player1Choice;
    document.getElementById('player2Choice').textContent = player2Choice;
    resetGame();
}
function resetGame() {
    setTimeout(function () {
        document.getElementById('player1Choice').textContent = '-';
        document.getElementById('player2Choice').textContent = '-';
        document.getElementById("select1Choice").textContent = "❌";
        document.getElementById("select2Choice").textContent = "❌";
        document.getElementById('result').textContent = "Welcome to Rock-Paper-Scissor Game";
        player1Choice = "null";
        player2Choice = "null";
    }, 1500); // 2000 milliseconds = 2 seconds
}
