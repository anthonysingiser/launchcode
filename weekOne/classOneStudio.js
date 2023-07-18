// FORK this starter file and save it to your own Repl.it account.
const input = require('readline-sync')

// Declare and initialize the 12 variables here:
let date = 'Monday 2019-03-18';
let time = '10:05:34 AM';
let astronautCount = input.question('How many astronauts are onboard?');
let astronautStatus = 'ready';
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = '100%';
let weatherStatus = 'clear';

function banner (title) {
  let lineBreak = '-------------------------------------';
  console.log(lineBreak)
  console.log(`> ${title}`)
  console.log(lineBreak)
}

// Write code to generate the LC04 report here:

banner('LC04 - LAUNCH CHECKLIST')
console.log(`Date: ${date}`);
console.log(`Time: ${time}` + '\n');

banner('ASTRONAUT INFO')
console.log(`* count: ${astronautCount}`);
console.log(`* status: ${astronautStatus}` + `\n`);

banner('FUEL DATA')
console.log(`* Fuel temp celsius: ${fuelTempCelsius}`);
console.log(`* Fuel level: ${fuelLevel}` + `\n`);

banner('MASS DATA')
console.log(`* Crew mass: ${crewMassKg.toFixed(2)}`);
console.log(`* Fuel mass: ${fuelMassKg}`);
console.log(`* Shuttle mass: ${shuttleMassKg}`);
console.log(`* Total mass: ${totalMassKg.toFixed(2)}` + `\n`);

banner('FLIGHT PLAN')
console.log(`* weather: ${weatherStatus}` + `\n`);

banner('OVERALL STATUS')
console.log(`* Clear for takeoff: YES` + `\n`);


// When done, have your TA check your code.

// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.