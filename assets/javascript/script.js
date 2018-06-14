$(document).ready(function () {
    var randomTarget = 0;
    var counter = 0;
    var wins = 0;
    var losses = 0;
    var randomQuacks = 0;
    var sound;

    loadNewGame = function () {
        randomTarget = Math.floor((Math.random() * 101) + 19);
        console.log(randomTarget);
        var tempArr = [];

        $("#target-value").text("Target Number: " + randomTarget);

        var quacks = ["#quack1", "#quack2", "#quack3", "#quack4"];
        for (var q = 0; q < quacks.length; q++) {
            do {
                randomQuacks = Math.floor((Math.random() * 12) + 1);
            }
            while (tempArr.includes(randomQuacks)) 
            
            tempArr.push(randomQuacks);
            $(quacks[q]).attr("data-quack-value", randomQuacks);
            console.log(randomQuacks);
        }
        counter = 0;
        $("#current-value").text("Current Quacks: " + counter);
    }

    loadNewGame();

    $(".quacks").on("click", function () {
        var quackValue = ($(this).attr("data-quack-value"));
        quackValue = parseInt(quackValue);
        counter += quackValue;
        $("#current-value").text("Current Quacks: " + counter);

        sound = document.createElement("audio");
        sound.src = "assets/sounds/QuackSound.mp3";
        sound.play();


        if (counter === randomTarget) {
            alert("You win!");
            wins++;
            $("#wins").text("Wins: " + wins);
            loadNewGame();

        } else if (counter >= randomTarget) {
            alert("You lose!");
            losses--;
            $("#losses").text("Losses: " + losses);
            loadNewGame();
        }
    })


})