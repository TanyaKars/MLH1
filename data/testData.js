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
}

const gender = {
    "he": 0,
    "she": 1,
    "it": 2,

}

const age = {
    "agePLH": 1,
    "default": "1234567890",
    "oneDigit": "1",
    "digit2": "2",
    "twelveDigits": "999999999999",
    "thirteenDigits": "1000000000000",
    "anyDigits": "1234567890",
    "zeroInTheLeft": "0001",
    "digitWithSpaces": "123 123",
    "zero": "0",
    "negativeDigit": "-237",
    "floatNumber": "1.2",
    "rusLetters": "фьрк",

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
const imagePath = {
    "test": '../../data/photo/Ameliia2.jpg'
}
const generatedStory = {
    "storyINDX": 0,
    "moraINDX": 1,
    "storyGenerated": "After a feast, two cats see a piece of cake and start fighting for it.\n" + name.default + ", who is " + age.default + " years old, sees this as an opportunity for gain and offers to help them. Our hero divides the cake into two parts but shakes her head saying they are unequal. She takes a bite of one piece and then the other, but still finds them unequal.\nShe continues doing so until there is no more cake left, leaving the poor little cats disappointed.",

}
module.exports = {name, age, gender, story, generatedStory, imagePath};