// Read as clockwise through legend on page
// 1: Rock
// 2: Lizard
// 3: Spock
// 4: Scissors
// 5: Paper

var combinationsArray = [
    {computer: 1, user: 1, result: "It's a tie."},
    {computer: 1, user: 2, result: "You lose."},
    {computer: 1, user: 3, result: "You win!"},
    {computer: 1, user: 4, result: "You lose."},
    {computer: 1, user: 5, result: "You win!"},

    {computer: 2, user: 1, result: "You win!"},
    {computer: 2, user: 2, result: "It's a tie."},
    {computer: 2, user: 3, result: "You lose."},
    {computer: 2, user: 4, result: "You win!"},
    {computer: 2, user: 5, result: "You lose."},

    {computer: 3, user: 1, result: "You lose."},
    {computer: 3, user: 2, result: "You win!"},
    {computer: 3, user: 3, result: "It's a tie."},
    {computer: 3, user: 4, result: "You lose."},
    {computer: 3, user: 5, result: "You win!"},

    {computer: 4, user: 1, result: "You win!"},
    {computer: 4, user: 2, result: "You lose."},
    {computer: 4, user: 3, result: "You win!"},
    {computer: 4, user: 4, result: "It's a tie."},
    {computer: 4, user: 5, result: "You lose."},

    {computer: 5, user: 1, result: "You lose."},
    {computer: 5, user: 2, result: "You win!"},
    {computer: 5, user: 3, result: "You lose."},
    {computer: 5, user: 4, result: "You win!"},
    {computer: 5, user: 5, result: "It's a tie."},
]

// document.getElementsByClass("play_buttons").addEventListener("click", function(num) {
//     wouldYouLikeToPlayAGame(num);
// })

function wouldYouLikeToPlayAGame(userResult) {
    //get a random number between 1 and 5
    function getRandomInt() {
      return Math.round(Math.random() * (5 - 1)) + 1;
    }

    var compResult = getRandomInt();

    //.filter instead of .map because we're not mutating any object key/value pairs inside combinationsArray
    combinationsArray.filter(function(obj) {
        if (obj.computer == compResult && obj.user == userResult) {
            alert(obj.result);
            return true;
        } else {
            return false;
            alert("BLEEP BLOOP ERROR HOW DID YOU MESS THIS UP SO BAD");
        }
    });

    //Checking dev work in console
    console.log("The computer's number was " + compResult + " and the user's number was " + userResult + ".");
}


//Nested if / elses are bit more ugly, but also is likely more performant than the object array mapping solution at this complexity level. I like the latter because of structure, but here's the former just in case!
var play2 = function wouldYouLikeToPlayAGame2(user) {
    function getRandomInt() {
      return Math.round(Math.random() * (5 - 1)) + 1;
    }

    var computer = getRandomInt();

    if (computer == 1) {
        if (user == 2 || 4) {
            alert("You lose.");
        } else if (user == 3 || 5) {
            alert("You win!");
        } else {
            alert("It's a tie.");
        }
    } else if (computer == 2) {
        if (user == 3 || 5) {
            alert("You lose.");
        } else if (user == 1 || 4) {
            alert("You win!");
        } else {
            alert("It's a tie.");
        }
    } else if (computer == 3) {
        if (user == 4 || 1) {
            alert("You lose.");
        } else if (user == 2 || 5) {
            alert("You win!");
        } else {
            alert("It's a tie.");
        }
    } else if (computer == 4) {
        if (user == 5 || 2) {
            alert("You lose.");
        } else if (user == 3 || 1) {
            alert("You win!");
        } else {
            alert("It's a tie.");
        }
    } else if (computer == 5) {
        if (user == 1 || 3) {
            alert("You lose.");
        } else if (user == 4 || 2) {
            alert("You win!");
        } else {
            alert("It's a tie.");
        }
    } else {
        alert("BLEEP BLOOP ERROR HOW DID YOU MESS THIS UP SO BAD");
    }
}
