var words = ["This", "is", "JavaScript", "Bootcamp!"];
var sentence = "";

function createSentence(words) {
    for (let i = 0; i < words.length; i++) {
        sentence = sentence + words[0], words[1], words[2], words[3];
    }
}
createSentence();