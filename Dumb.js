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
}
//Race
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
