const rd=require('readline-sync');
const quesList=require('./data');
const chalk = require('chalk');
var hs=require('./hs');
const fs = require('fs')



var score=0;

function check_answer(item,ans)
{
  if (ans.toLowerCase()==item.a.toLowerCase())
  {
    console.log(chalk.bgGreen(item.a+" is the right answer!"));
    score=score+5;
  }
  else
  {
    console.log(chalk.bgRed("Oooh nice try."))
    console.log("The correct answer was "+item.a)
    score=score-1
  }

  console.log("Current Score: "+score)
}

function max_score(hs)
{
  ms=0
  hs.map((item)=>{
    if (item.score>ms)
    {
      ms=item.score;
    }
  });
  return ms;
}

var name=rd.question("May I know your name? ");
console.log(chalk.keyword('orange')("Welcome "+name));
var ch= rd.question("Are you ready to Revv it up?(y/n) ",{limit: ['y', 'n']});
if (ch.toLowerCase()=='y')
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
       
      if(score>=max_score(hs))
      {
        console.log("You beat the high score!")
        hs.unshift({"name":name,"score":score})
        try {
          data = JSON.stringify(hs);
          data="module.exports="+data
         
          const d = fs.writeFileSync('./hs.js', data)
          //file written successfully
        } catch (err) {
        console.error(err)
}


      }

      
    
  }
  console.log("********Current Leaderboard********")
  console.table(hs)
 


}

console.log("So long partner!");




