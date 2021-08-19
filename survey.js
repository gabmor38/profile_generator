const readline = require('readline'); 

const rl = readline.createInterface({ // creates the interface to process data by sending output and listening for user input
  input: process.stdin,
  output: process.stdout
});
 // This will display in the output and waits for user input
 rl.question("What's your name? Nicknames are also acceptable :", (answer1) => {
  rl.question("What's an activity you like doing?", (answer2) => {
    rl.question("What do you listen to while doing that?", (answer3) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.", (answer4) => {
        rl.question("What\'s your favourite thing to eat for that meal?", (answer5) =>{
          //once the user sends the input back then this will return in the terminal
          console.log(`${answer1}. His/her likes to ${answer2} and likes to listen to ${answer3}. His/her favorite meal  of the day is ${answer4}, and the favourite dish for trhat mean is ${answer5}.`);
          rl.close();
        })
      })
    })
  })
});







