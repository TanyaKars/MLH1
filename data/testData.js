const name = {
    "namePLH": 0,
    "alert": 0,
    "default": "SuperGirl(*|*)",
    "oneSymbol": "i",
    "symbols70": "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
    "allLetters": "abcdefghijklmnopqrstuvwxyz",
    "allCapital": "ABCDEFGHIJLKMNOPQRSTUVWXYZ",
    "allLower": "abcdefghijklmnopqrstuvwxyz",
    "allNumbers": "1234567890",
    "allSymbols": "~!@#$%^&*()-_=+[]{}\\|;':\",./<>?",
    "allSpaces": "   ",
    "lettersWithSpaces": "abc abs ",
    "russianLetters": "абвгдеёжхиклмнопрстуфхцчшщъыьэюя",
    "emoji": "🤪",
    "symbols71": "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
    "code":"<code>"

}

const gender = {
    "he": 0,
    "she": 1,
    "it": 2,
    "his": "his",
    "her": "her",
    "its": "it",
    "hisC": "His",
    "herC": "Her",
    "itsC": "Its",
}

const age = {
    "agePLH": 1,
    "default": 1234567890,
    "oneDigit": 1,
    "digit2": 2,
    "twelveDigits": 999999999999,
    "anyDigits": 1234567890,
    "zeroInTheLeft": 0o001,
    "digitWithSpaces": "123 123"

}

const story = {
    "overcomingTheMonster": 0,
    "rebirth": 1,
    "quest": 2,
    "journeyAndReturn": 3,
    "ragsAndRiches": 4,
    "tragedy": 5,
    "comedy": 6
}

const generatedStory = {

    "storyGenerated": "After a feast, two cats see a piece of cake and start fighting for it.\n" + name.default + ", who is " + age.default + " years old, sees this as an opportunity for gain and offers to help them. Our hero divides the cake into two parts but shakes her head saying they are unequal. She takes a bite of one piece and then the other, but still finds them unequal.\nShe continues doing so until there is no more cake left, leaving the poor little cats disappointed.",
    "storyMoral": "Moral: When you quarrel amongst yourselves, someone else gains from it."

}
module.exports = {name, age, gender, story, generatedStory,};