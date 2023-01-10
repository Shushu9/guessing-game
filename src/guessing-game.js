class GuessingGame {
    constructor() {
        this.minNumber;
        this.maxNumber;
        this.guessingNumber;
    }

    setRange(min, max) {
        this.minNumber = min;
        this.maxNumber = max;

    }

    guess() {
        this.guessingNumber = this.minNumber + Math.round((this.maxNumber - this.minNumber) / 2);
        return this.guessingNumber;
    }

    lower() {
        this.maxNumber = this.guessingNumber;

    }

    greater() {
        this.minNumber = this.guessingNumber;
    }
}

module.exports = GuessingGame;
