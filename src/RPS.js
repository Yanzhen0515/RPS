module.exports = function(player) {
    if (['Rock', 'Scissor', 'Paper'].indexOf(player) == -1) {
        return { code: -1, message: 'have a valid input!' };
    }

    // a random generator for RPS
    var random = Math.random(); // generate a float number between 0.0 to 1.0
    var Computer;

    // random generate for computer action
    if (random <= 0.33) {
        Computer = "Rock";
    } else if (random > 0.67) {
        Computer = "Scissor";
    } else {
        Computer = 'Paper';
    }

    return check(player, Computer); // Return the result of check
}

//check for who wins
var check = function(Player, Computer) {
    if (Computer == Player) {
        return 0; // Draw
    } else if ((Computer == 'Rock' && Player == 'Paper') ||
               (Computer == 'Scissor' && Player == 'Rock') ||
               (Computer == 'Paper' && Player == 'Scissor')) {
        return 1; // Player wins
    } else {
        return -1; // Player loses
    }
}