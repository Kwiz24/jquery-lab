$(document).ready(function() {
    const startGameButton = $('[data-action="start"]');
    const gameArea = $('#game-area');
    const buzzerButton = $('[data-action="buzzer"]');
    const resultDisplay = $('#result');
    const winSound = $('#win-sound')[0];
    const loseSound = $('#lose-sound')[0];
    const toggleModeButton = $('#toggle-mode-button');
    const body = $('body');

    toggleModeButton.click(function() {
        body.toggleClass('dark-mode');
    });

    startGameButton.click(function() {
        startGameButton.hide();
        gameArea.show();
    });

    buzzerButton.click(function() {
        const randomNumber = Math.random();
        const winThreshold = 0.5;

        if (randomNumber > winThreshold) {
            resultDisplay.text('Congratulations! You win a cookie!').addClass('fade-in');
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
            winSound.play();
        } else {
            resultDisplay.text('Sorry, you didn\'t win this time. Try again!').addClass('fade-in');
            loseSound.play();
        }
    });

    function computerPlayerClick() {
        setTimeout(() => {
            buzzerButton.click();
        }, 2000);
    }

    // Call computerPlayerClick() to simulate the computer player
    // Uncomment the following line if you want the computer player to click the buzzer after the game starts
    computerPlayerClick();

    // Save data to localStorage
    function saveHighScore(score) {
        localStorage.setItem('highScore', score);
    }

    // Retrieve data from localStorage
    function getHighScore() {
        return localStorage.getItem('highScore');
    }

    // Example of setting and getting high score
    // Uncomment the following lines to test localStorage
    saveHighScore(100);
    console.log('High Score:', getHighScore());
});
