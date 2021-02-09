const randomWords = ['apple','ostrich','snowman','xylophone','rocket','tsunami','jungle','enthusiasm','telekinesis','chocolate','detective'];

let chosenWord = randomWords[Math.floor(Math.random() * randomWords.length)];

let wordInList = [];

const randomHappyReactions = ["^_^","^o^","^_~","(✿◡‿◡)","(¬‿¬)"];

const randomSadReactions = ["ಥ_ಥ","＞﹏＜","＞︿＜","ಠ_ಠ","ಠ﹏ಠ","┌(ಠ_ಠ)┘","⚆_⚆"];

for (x = 0; x < chosenWord.length; x++) {
    wordInList.push(chosenWord[x]);
};

let display = [];

let lifes = 6;

for (x = 0; x < chosenWord.length; x++) {
    display.push("_");
};

document.getElementById("Bars").innerHTML = display;

document.getElementById("info").innerHTML = "You have "+lifes+" guesses.";

document.addEventListener('keypress', function(event) {


    for (x = 0; x < chosenWord.length; x++) {
        var letter = chosenWord[x]
        if (event.key == letter) {
            display[x] = letter
            document.getElementById("Bars").innerHTML = display;

        };

    };

    if (display.includes("_")) {

    } else {
        document.getElementById("You-win").innerHTML = "You win.";
        document.getElementById("h1").innerHTML = randomHappyReactions[Math.floor(Math.random() * 5)];
        setTimeout(function() {
            location.reload()
        }, 500);

    };
    

    if (wordInList.includes(event.key)) {        
        
    } else {


        lifes -= 1

        document.getElementById("info").innerHTML = "You have "+lifes+" guesses.";



        if (lifes == 0) {
            document.getElementById("You-lose").innerHTML = "You lose.";
            document.getElementById("Bars").innerHTML = wordInList;
            document.getElementById("h1").innerHTML = randomSadReactions[Math.floor(Math.random() * 7)];




            setTimeout(function() {
                location.reload();
            }, 250)


        };

    };

    
  
    if (event.key == event.key.toUpperCase()) {
        alert("Turn Caps Lock off");
    };
    


});

function clicked(key) {

    
    for (x = 0; x < chosenWord.length; x++) {
        var letter = chosenWord[x]
        if (key == letter) {
            display[x] = letter
            document.getElementById("Bars").innerHTML = display;

        };

    };

    if (display.includes("_")) {

    } else {
        document.getElementById("You-win").innerHTML = "You win.";
        document.getElementById("h1").innerHTML = randomHappyReactions[Math.floor(Math.random() * 5)];
        setTimeout(function() {
            location.reload()
        }, 500);

    };
    

    if (wordInList.includes(key)) {        
        
    } else {


        lifes -= 1

        document.getElementById("info").innerHTML = "You have "+lifes+" guesses.";



        if (lifes == 0) {
            document.getElementById("You-lose").innerHTML = "You lose.";
            document.getElementById("Bars").innerHTML = wordInList;
            document.getElementById("h1").innerHTML = randomSadReactions[Math.floor(Math.random() * 7)];




            setTimeout(function() {
                location.reload();
            }, 250)


        };

    };


};
