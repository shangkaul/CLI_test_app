const rd=require('readline-sync');
const quesList=require('./data');
const chalk = require('chalk');


var score=0;

function check_answer(item,ans)
{
  if (ans.toLowerCase()==item.a.toLowerCase())
  {
    console.log(chalk.bgGreen(ans+" is the right answer!"));
    score=score+5;
  }
  else
  {
    console.log(chalk.bgRed("Oooh nice try."))
    console.log("The correct answer was "+item.a)
  }

  console.log("Current Score: "+score)
}

var name=rd.question("May I know your name? ");
console.log(chalk.keyword('orange')("Welcome "+name));
var ch= rd.question("Are you ready to Revv it up?(y/n) ",{limit: ['y', 'n']});
if (ch=='y')
{
  console.log(chalk.blue("Let the game begin!"))

  quesList.map((item)=>{
  var ans=rd.question(item.q+" ");
  check_answer(item, ans);
  });
  console.log("Your final score is: "+score);
  if(score<15)
  {
    console.log(chalk.bgRed("You could do better than that :|"));
  }
  else
  {
      console.log(chalk.bgGreen("Bravo!"));
  }
 


}

console.log("So long partner!");




