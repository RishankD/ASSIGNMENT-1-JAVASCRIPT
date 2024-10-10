const words1 = ["A wizard", "A knight", "A dragon", "A pirate"];
const words2 = ["found", "fought", "discovered", "stole"];
const words3 = ["a magical sword", "a treasure chest", "a secret map", "a cursed relic"];
const words4 = ["in a forest", "on a distant island", "in a dark cave", "at the top of a mountain"];
const words5 = ["and became a hero.", "and vanished forever.", "and started a new journey.", "and saved the kingdom."];

let selectedWords = ["", "", "", "", ""];

document.getElementById('btn1').addEventListener('click', function() {
    cycleWord(0, words1, 'btn1');
});
document.getElementById('btn2').addEventListener('click', function() {
    cycleWord(1, words2, 'btn2');
});
document.getElementById('btn3').addEventListener('click', function() {
    cycleWord(2, words3, 'btn3');
});
document.getElementById('btn4').addEventListener('click', function() {
    cycleWord(3, words4, 'btn4');
});
document.getElementById('btn5').addEventListener('click', function() {
    cycleWord(4, words5, 'btn5');
});

document.getElementById('generate-story').addEventListener('click', function() {
    let story = selectedWords.join(' ');
    document.getElementById('story-output').textContent = story;
});
document.getElementById('random-story').addEventListener('click', function() {
    let randomStory = `${randomWord(words1)} ${randomWord(words2)} ${randomWord(words3)} ${randomWord(words4)} ${randomWord(words5)}`;
    document.getElementById('story-output').textContent = randomStory;
});

document.getElementById('reset-story').addEventListener('click', function() {
    selectedWords = ["", "", "", "", ""];
    document.querySelectorAll('.word-button').forEach(btn => btn.textContent = 'Word');
    document.getElementById('story-output').textContent = '';
});

function cycleWord(index, wordArray, outputId) {
    let currentWord = selectedWords[index] || wordArray[0];
    let nextWord = wordArray[(wordArray.indexOf(currentWord) + 1) % wordArray.length];
    selectedWords[index] = nextWord;
    document.getElementById(outputId).textContent = nextWord;
}

function randomWord(wordArray) {
    return wordArray[Math.floor(Math.random() * wordArray.length)];
}
