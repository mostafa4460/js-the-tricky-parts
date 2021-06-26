function guessingGame() {
    let target = Math.floor(Math.random() * 100),
        count = 0,
        gameOver = false;

    return function takeAGuess(guess) {
        let msg;
        if (gameOver) {
            msg = "The game is over, you already won!";
        } else {
            if (guess > target) {
                msg = `${guess} is too high!`;
            } else if (guess < target) {
                msg = `${guess} is too low!`;
            } else {
                count ++;
                msg = `You win! You found ${target} in ${count} guesses.`;
                gameOver = true;
            }
            count ++;
        }
        console.log(target, count, gameOver);
        return msg;
    };
}

module.exports = { guessingGame };
