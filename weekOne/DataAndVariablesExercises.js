// A. Declare and assign the variables here:
let shuttleName = 'Determination'
let shuttleSpeed = 17500
let distanceMars = 225000000
let distanceMoon = 384400
let milesPerKm = 0.621 

// B. Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName)
console.log(typeof shuttleSpeed)
console.log(typeof distanceMars)
console.log(typeof distanceMoon)
console.log(typeof milesPerKm)

// Code your solution to exercises C and D here:
const milesToMars = milesPerKm * distanceMars

const hoursToMars = milesToMars / shuttleSpeed

const daysToMars = Number((hoursToMars / 24).toFixed(2))

console.log(shuttleName + ' will take ' + String(daysToMars) + ' days to reach Mars')

// Code your solution to exercise E here:
const milesToMoon = milesPerKm * distanceMoon
const hoursToMoon = milesToMoon / shuttleSpeed
const daysToMoon = Number((hoursToMoon / 24).toFixed(2))

console.log(shuttleName + ' will take ' + String(daysToMoon) + ' days to reach the Moon')
