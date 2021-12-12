var fortune = 10;

if (fortune > 0 && fortune <= 3) {
    console.log("Oh dear! You've selected a low fortune. Better luck next time!");
}
else if (fortune > 3 && fortune <= 7) {
    console.log("You've selected an average fortune.");
}
else if (fortune > 7 && fortune <= 10) {
    console.log("Nice job! You've selected a high fortune! Congratulations!");
}
else {
    console.log("Sorry! We can't determine your fortune, please try again.");
}