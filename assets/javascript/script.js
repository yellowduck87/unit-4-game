
$(document).ready(function () {
    var randomTarget = 0;
    var counter = 0;
    var wins = 0;
    var losses = 0;
    var randomQuacks = 0;
    var sound;

    loadNewGame = function () {
        randomTarget = Math.floor((Math.random() * 100) + 19);
        console.log(randomTarget);

        $("#target-value").text("Target Number: " + randomTarget);

        var quacks = ["#quack1", "#quack2", "#quack3", "#quack4"];
        for (var q = 0; q < quacks.length; q++) {
            randomQuacks = Math.floor((Math.random() * 12) + 1);
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
        sound.src ="assets/sounds/QuackSound.mp3";
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








//1 create caracters as objects
//a player 1 
//hp
//ap
//cap
//b player 1 
//hp
//ap
//cap 
//c player 1 
//hp
//ap
//cap 
//d player 1 
//hp
//ap
//cap   

//1.5 when a character attacks, its ap goes up incrementaly.

//2 when one chrater is selected, the rest are moved to enemies possition

//3 when one enemy is selected, it is moved to the defender possition

//4 when a character attacks, it removes hp from the defender, and the defender responds by removing hp from the chracter

//5 when any character gets to 0 or less hp, the charcter is defeated

//6 when a defnding character is defeted, the image goes away

//7 if the selected character defeats the other three, the user wins.