const MissionComander = require('./app/missionComander');

const carlo = new MissionComander("Carlo")
const fer = new MissionComander("Fernanda")
const rodri = new MissionComander("Rodrigo")

console.log(carlo.name)
console.log(fer.name)
console.log(rodri.name)