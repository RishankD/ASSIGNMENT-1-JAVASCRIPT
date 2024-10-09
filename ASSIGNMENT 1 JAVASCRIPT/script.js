const words1 = ["The cat", "A dog", "My friend", "An alien"];
const words2 = ["jumps over", "runs to", "flies above", "sneaks around"];
const words3 = ["the moon", "a car", "the house", "the tree"];
const words4 = ["quickly", "slowly", "mysteriously", "excitedly"];
const words5 = ["and disappears.", "and sleeps.", "and smiles.", "and dances."];
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
