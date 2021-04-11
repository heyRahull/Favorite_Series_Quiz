// console.log("Enter your name to play the Quiz :")
var readlineSync = require('readline-sync');
const chalk = require('chalk');
 
var score=0;
var emoji = require('node-emoji')
var userName = readlineSync.question("Enter your name to play the Quiz : ");
console.log("\n");
console.log("Hey "+chalk.green(userName)+" Welcome to the quiz ~ "+emoji.get('face_with_monocle')+chalk.green("  ARE YOU A REAL F.R.I.E.N.D.S FAN? ")+emoji.get('face_with_monocle'));
console.log("\n");

console.log("---------------------");
console.log(chalk.green("Answer by pressing 1, 2, 3 or 4 key for correct option and press enter."))
console.log("---------------------");

console.log("\n")

var questions = [{
  question : "Which character has a twin? ",
  options : ["Rachel","Phoebe","Monica","Ross"],
  ans : "2"
},
{
  question : "Who got stuck in a pair of leather pants? : ",
  options : ["Monica","Joey","Ross","Chandeler"],
  ans : "3"
},
{
  question : "What’s Joey’s favorite food? : ",
  options : ["Sandwiches","Pasta","Mango","Pizza"],
  ans : "4"
},
{
  question : "What’s the name of Phoebe’s most popular song? : ",
  options : ["Smelly Cat","Scaredy Cat","Smelly Pig","kitty-Cat"],
  ans : "1"
},
{
  question : "Who is the manager of Central Perk? : ",
  options : ["Hunter","Gunther","Pete","John"],
  ans : "2"
}]

for(var i=0;i<questions.length;i++){
  var currQues = questions[i];
  play(currQues.question,currQues.ans,currQues.options)
}

function play(question,ans,options){
  console.log(question)

for(var i=0;i<options.length;i++)
{
  console.log(i+1,chalk.blueBright(options[i]))
}
var userAns = readlineSync.question("Enter Your Answer : ");
if(userAns === ans){
console.log(chalk.greenBright("You are Correct."))
score = score+1;
}
else 
console.log(chalk.redBright("You are Wrong."))
console.log(chalk.bgMagenta("Your score is : "+score))
console.log("-----------------------------------------")
}

console.log(chalk.green("your Final Score is : "+score) )
if (score < 3) {
      console.log('Score: ' + score);
      console.log('🔥 Looks like F.R.I.E.N.D.S is not your favoriate series.🔥');
    } else if (score > 2 && score < 5) {
      console.log('Score: ' + score);
      console.log("🔥🔥🔥 Yaay!! that's a great score but I am a bigger fan than you.🔥🔥🔥");
    } else {
      console.log('Score: ' + score );
      console.log('🔥🔥🔥 Yo!! Lets have coffee some time at Central Perk. 🔥🔥🔥');
    }