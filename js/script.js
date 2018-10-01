function rollDice() {
// User interface (or front-end) logic:
    var diceOne = document.getElementById("die1");
    var diceTwo = document.getElementById("die2");
    var status = document.getElementById("status");
// Business (or back-end) logic:
    var diceRoll1 = Math.floor(Math.random() * 6) + 1;
    var diceRoll2 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = diceRoll1 + diceRoll2;
    diceOne.innerHTML = diceRoll1;
    diceTwo.innerHTML = diceRoll2;
    status.innerHTML = "you rolled" + diceTotal + ".";
    if (diceRoll1 == diceRoll2) {
        status.innerHTML += "DOUBLES! Free turn!!"
    }

}
