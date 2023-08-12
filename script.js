const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// const team = players;
// var team1;
// // Create a copy of the array players
// for(let i=0;i<players.length;i++){
// 	team1 = team1 + players[i];
// }
// var cap1;
// for(let i=0;i<person.length;i++){
// 	cap1 = cap1 + person[i];
// }
var team= players;
var team1 =players.slice();
var cap1 = Object.assign({}, person);

// Create a copy of the object person

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
