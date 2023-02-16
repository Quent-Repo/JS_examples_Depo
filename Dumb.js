//Temp convert
let far;
let cel;
let newt;
var Kelvin = 0;
cel = (Kelvin - 273.15);
far = ((Kelvin-273.15) * 1.8 + 32)
newt = cel * (33/100)
console.log(`${cel} and ${far} and ${newt}`)
/*


*/
//Dog Years
var years = 22;
years-= 2;
years*=4;
years+=20.5;
console.log(Math.floor(years));
/*


*/
//8ball
var resaon = "Are you happy";
var ran = Math.floor(Math.random()*7);
console.log(ran)
if(ran == 7){
  console.log("yes")
}
else if(ran == 3){
  console.log("maybe")
}
else{
  console.log("no")
}
/*



*/
//Race
let raceNumber = Math.floor(Math.random() * 1000);
let age = Math.floor(Math.random()*40)
if(age <= 18){
  console.log(`${age}`+ " "+raceNumber)
}
else{
  console.log(`${age}`+ " "+Math.floor(Math.random()*1000+1000))
}

if(`${age}` >= 18){
  console.log("you run at 9:30 or 11:00")
}
else{
  console.log("You run at 12:30")
}//Race
let raceNumber = Math.floor(Math.random() * 1000);
let reg = "late"
let age = Math.floor(Math.random()*40)
if(age <= 18){
  console.log(`${age}`+ " "+raceNumber)
}
else{
  console.log(`${age}`+ " "+Math.floor(Math.random()*1000+1000))
}

if(`${age}` >= 18 && reg == "late"){
  console.log("you run at 11:00")
}
else if(`${age}` >= 18){
  console.log("you run at 9:30 or 11:00")
}
else{
  console.log("You run at 12:30")
}
/*


*/
//rock paper sci
var x = "RoCk";
const getUserChoice = userInput => {
  let y = Math.floor(Math.random()*3);
  console.log(y);
  if(((userInput=='rock') && y==1) || ((userInput=='paper') && y==2) || ((userInput=='sci') && y==0) ){
    console.log("lose");
  }
  else if(((userInput=='rock') && y==0) || ((userInput=='paper') && y==1) || ((userInput=='sci') && y==2) ){
    console.log("tie");
  }
  else{
    console.log("win");
  }
}
getUserChoice(x.toLowerCase());
/*


*/
//Training day

const getRandEvent = () => {
  let random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "Marathon";
  } else if (random === 1) {
    return "Triathlon";
  } else if (random === 2) {
    return "Pentathlon";
  }
};

// The scope of `days` is too tight
const getTrainingDays = (event) => {
  if (event === "Marathon") {
    return 50;
  } else if (event === "Triathlon") {
    return 100;
  } else if (event === "Pentathlon") {
    return 200;
  } else {
    return 0;
  }
};

// The scope of `name` is too tight
const logEvent = () => {
  console.log(`${name}'s event is: ${event}`);
  console.log(`${name}'s time to train is: ${days} days`);
};


let event = getRandEvent();
let days = getTrainingDays(event);
let name = 'Nala';
logEvent();



event = getRandEvent();
days = getTrainingDays(event);
name = 'Warren';
logEvent();

event = getRandEvent();
days = getTrainingDays(event);
name = 'Dave';
logEvent();
/*



*/
//Whale talk
let speak = "turpentine and turtles";
let hole = "";
for (let i = 0; i < speak.length; i++) {
  if (
    speak[i] == "a" ||
    speak[i] == "i" ||
    speak[i] == "o" ||
    speak[i] == "e" ||
    speak[i] == "u"
  ) {
    if (speak[i] == "e" || speak[i] == "u") {
      hole += speak[i] + speak[i];
    } else {
      hole += speak[i];
    }
  }
}
console.log(hole);



