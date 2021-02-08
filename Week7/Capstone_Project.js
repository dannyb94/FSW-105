const readline = require("./node_modules/readline-sync");
const name = readline.question(`What's your name? `);

readline.question(`Hello ${name}. Welcome to KABLOW! A single player fantasy street fighter where you will risk life and limb to defeat evil! Press "Enter" to start.`);

const badGuys = ["Soul Killer", "Shadow Man", "Grimmjow", "Oogie Boogie"];
const treasure = ["Health Potion", "Exploding Flask", "Chocolate Bar", "Defense Shield"];
var prize = [];
let userHealth = 50;
const options = ["Walk", "Runaway", "Inventory"];
let pickUp = treasure[Math.floor(Math.random() * treasure.length)];

function game(){
    const attackPower = Math.floor(Math.random() * 20);
    const badGuy = badGuys[Math.floor(Math.random() * badGuys.length)];
    let badGuysHealth = 50;
    const badGuysPower = Math.floor(Math.random() * 20);

    const index = readline.keyInSelect(options, `What would you like to do next?`);

    if(options[index] == "Run Away"){
        return userHealth = 0;
    } else if(options[index] == "Inventory"){
        console.log(`${name}: \n ${userHealth} \n Treasure: ${pickUp}`);
    }else if(options[index] === "Walk"){
        let key = Math.random();
        if (key <= .3){
            console.log("Walking...");
        }else if (key >= .3){
            console.log(`${badGuy} has come to destroy you!`);
            while(badGuysHealth > 0 && userHealth > 0){
                const user = readline.question("What should you do? Enter 'r' to run  away or 'a' to attack: ");
               switch (user){
                    case `r`:
                        const run = Math.random();
                        if (run < .5){
                            console.log(`Before you could escape, ${badGuy} attacked you. You took: ${badGuysPower} damage.`);
                        }else{
                            console.log(`${name} managed to run away in fear without any damage.`);
                            break;
                        }
                     case `a`:
                        badGuysHealth -= attackPower;
                        console.log(`You attacked ${badGuy} with ${attackPower} attack!`);

                        userHealth -= badGuysPower;
                        console.log(`${badGuy} attacked you with ${badGuysPower} attack!`);

                        if(badGuysHealth <= 0){
                            console.log(`You defeated ${badGuy}!\n ${badGuy} withered into dust and drapped a: ${pickUp}.`);
                            let loot = Math.random();
                            if(loot <= .3){
                                prize.push(pickUp);
                            }else if(userHealth <= 0){
                                console.log(`${badGuy} has killed you...GAME OVER.`);
                            }
                        }
                    
                }
            }
        }
    }
} 
while(userHealth > 0){
    userRestore = function(){
        userActive = true;
        userHealth = 40;
    };
    userRestore();
    game();
}