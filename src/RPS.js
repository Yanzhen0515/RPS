

//check for player input
module.exports = function(player) {
    if (['Rock', 'Scissor', 'Paper'].indexOf(player) == -1){
        return { code: -1, message: 'have a valid input!' };
    }

    // a random generator for RPS
    var random = Math.random(); //generate a float number between 0.0 to 1.0
    var Computer;

    // random generate for computer action
    if(random <= 0.33){
        Computer = "Rock";
    }
    else if(random > 0.67){
        Computer = "scissor";
    }
    else{
        Computer = 'Paper';
    }

    check(player, Computer);

}

//check for who is win
var check = function(Player, Computer){
    if(Computer == Player){
        return 0;
    }
    else if( (Computer == 'Rock' && Player == 'Paper')
    || (Computer == 'Scissor' && Player == 'Rock')
    || (Computer == 'Paper' && Player == 'Scissor')){
        return 1;
    }
    else{
        return -1;
    }
    
}
