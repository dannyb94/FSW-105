const readline = require("./readline-sync");

var playerName = readline.question("Enter your name: ");
var welcomeMessage = `Hello ${playerName}, welcome to the Escape Room Simulator!`;
console.log(welcomeMessage);

var isAlive = true;
var hasKey = false;

while(isAlive == true){
    const menuOptions = readline.keyIn(' Enter 1 to place hand in the hole \n Enter 2 to find the key \n Enter 3 to open the door', {limit: '$<1-3>'});
    console.log(menuOptions);
    if(menuOptions == 1){
        console.log(`${playerName}, oh no you died. GAME OVER.`);
        isAlive = false;
    }
    else if(menuOptions == 2 && hasKey == false){
        console.log(`${playerName}, you found the missing key!`);
        hasKey = true;
    }
    else if(menuOptions == 2 && hasKey == true){
        console.log(`${playerName}, you have already found the missing key. Proceed to the next option.`);
    }
    else if(menuOptions == 3 && hasKey == false){
        console.log(`${playerName}, you have not found the missing key. Please go back and find the key.`);
    }
    else if(menuOptions == 3 && hasKey == true){
        console.log(`${playerName}, you found the key and opened the door. You have escaped the room. Congratulations!`);
        isAlive = false;
    }
};
/*
*/