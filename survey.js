



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = {}; 

rl.question('What is your name? ', (firstName) => {
  answers.firstName = firstName;

  rl.question('Whats an activity you like doing? ', (activity) => {
    answers.activity = activity;
  
    rl.question('What do you listen to while doing that? ', (music) => {
      answers.music = music;

      rl.question('Which meal is your favourite? ', (meal) => {
        answers.meal = meal;

        rl.question('Whats your favourite thing to eat for that meal? ', (food) => {
          answers.food = food;

          rl.question('Which sport is your absolute favourite? ', (sport) => {
            answers.sport = sport;
            
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {
              answers.superpower = superpower;
              
              console.log(`${firstName} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`);

              rl.close();
            });
          });
        });
      });
    });
  });
});


