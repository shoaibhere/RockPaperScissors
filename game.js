const score = JSON.parse(localStorage.getItem("score"))|| {
  wins: 0,
  losses: 0,
  ties: 0
};

function computerTurnExecuter(){
const computerTurn= Math.random();
let computerEmoji;
if(computerTurn<=1/3)
  computerEmoji='rock';
else if(computerTurn<=2/3)
  computerEmoji='paper';
else
  computerEmoji='scissors';
return computerEmoji;
}
function resetScore(){
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  document.getElementById("wins-disp").textContent=`Wins : ${score.wins}`;
  document.getElementById("losses-disp").textContent=`Losses : ${score.losses}`;
  document.getElementById("ties-disp").textContent=`Ties : ${score.ties}`;
}
function resultDecider(player,comp){
  if(player===comp)
    return "tie";
  else
  {
    if(player==="rock")
    {
      if(comp==="paper")
        return "lost";
      else
        return "won";
    }
    else if(player==="paper")
      {
        if(comp==="scissors")
          return "lost";
        else
          return "won";
      }
    else
      {
        if(comp==="rock")
          return "lost";
        else
          return "won";
      }
  }
}
window.onload= function(){
  var rock = document.getElementById("rock");
  var paper = document.getElementById("paper");
  var scissors = document.getElementById("scissors");
  var reset = document.getElementById("reset")
  rock.onclick=handleClick;
  paper.onclick=handleClick;
  scissors.onclick=handleClick;
  reset.onclick=resetScore;
  document.getElementById("wins-disp").textContent=`Wins : ${score.wins}`;
  document.getElementById("losses-disp").textContent=`Losses : ${score.losses}`;
  document.getElementById("ties-disp").textContent=`Ties : ${score.ties}`;
}
function handleClick(event)
{
  let tied = document.getElementById('tied');
  let won = document.getElementById('won');
  let lost = document.getElementById('lost');

  let youRock = document.getElementById('you-rock');
  let youPaper = document.getElementById('you-paper');
  let youScissors = document.getElementById('you-scissors');
  let compRock = document.getElementById('comp-rock');
  let compPaper = document.getElementById('comp-paper');
  let compScissors = document.getElementById('comp-scissors');

  document.getElementById('choices-display').style.setProperty('display','inline','important');
  document.getElementById('stats-div').style.setProperty('display','flex','important');

  reset.style.setProperty('display','inline','important');  

  console.log("Your Choice "+event.target.id);
  let computerEmoji=computerTurnExecuter();
  console.log("Computer's Choice "+computerEmoji);
  let result= resultDecider(event.target.id,computerEmoji);
  if(result==="won")
  {
    tied.style.setProperty('display','none','important');
    lost.style.setProperty('display','none','important');
    won.style.setProperty('display','inline','important');

    console.log('YOU WON');
    score.wins++;
  }
  else if(result==="lost")
  {
    tied.style.setProperty('display','none','important');
    won.style.setProperty('display','none','important');
    lost.style.setProperty('display','inline','important');

    console.log('YOU LOST');
    score.losses++;
  }
  else
  {
    won.style.setProperty('display','none','important');
    lost.style.setProperty('display','none','important');
    tied.style.setProperty('display','inline','important');
    console.log('MATCH TIED ');

    score.ties++;
  }
  localStorage.setItem("score",JSON.stringify(score));

  if(event.target.id==="rock")
  {
    youPaper.style.setProperty('display','none','important');
    youScissors.style.setProperty('display','none','important');
    youRock.style.setProperty('display','inline','important');
  }
  else if(event.target.id==="paper")
  {
    youRock.style.setProperty('display','none','important');
    youScissors.style.setProperty('display','none','important');
    youPaper.style.setProperty('display','inline','important');
  }
  else
  {
    youRock.style.setProperty('display','none','important');
    youPaper.style.setProperty('display','none','important');
    youScissors.style.setProperty('display','inline','important');
  } 

  if(computerEmoji==="rock")
    {
      compPaper.style.setProperty('display','none','important');
      compScissors.style.setProperty('display','none','important');
      compRock.style.setProperty('display','inline','important');
    }
    else if(computerEmoji==="paper")
    {
      compRock.style.setProperty('display','none','important');
      compScissors.style.setProperty('display','none','important');
      compPaper.style.setProperty('display','inline','important');
    }
    else
    {
      compRock.style.setProperty('display','none','important');
      compPaper.style.setProperty('display','none','important');
      compScissors.style.setProperty('display','inline','important');
    }  
    document.getElementById("wins-disp").textContent=`Wins : ${score.wins}`;
    document.getElementById("losses-disp").textContent=`Losses : ${score.losses}`;
    document.getElementById("ties-disp").textContent=`Ties : ${score.ties}`;

}