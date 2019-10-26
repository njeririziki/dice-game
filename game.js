var totalScore,activeplayer,score;
var gamePlaying;
const initiate=()=>{
   score=[0,0]
    totalScore=0;
   activeplayer = 0;
   gamePlaying= true;
   document.getElementById('dice_0').innerHTML='Current <br>'+ 0;
   document.getElementById('dice_1').innerHTML='Current <br>'+ 0;
   document.getElementById('score_0').innerHTML='score <br>'+ 0;
   document.getElementById('score_1').innerHTML='score <br>'+ 0;
   document.getElementById('playertitle_1').innerHTML='Player <br> 2';
   document.querySelector('.playername_0').classList.remove('winner');
   document.querySelector('.playername_1').classList.remove('winner');  
   document.querySelector('.part_0').classList.add('active');
   
}
 initiate();

 document.querySelector('#rolldice').addEventListener("click",function(){
    if(gamePlaying){
     let dice= Math.floor(Math.random()*6 + 1);
     document.getElementById('dice_'+activeplayer).innerHTML='Current <br>'+ dice;
     if (dice !== 1){
        totalScore = totalScore +dice;
        document.getElementById('score_'+ activeplayer).innerHTML='score <br>'+ totalScore;
     }else {
         changePlayer();
     }
   }
        });

   const changePlayer=()=>{
      activeplayer ===0?activeplayer=1:activeplayer=0;
      totalScore=0;
      document.getElementById('dice_0').innerHTML='Current <br>'+ 0;
      document.getElementById('dice_1').innerHTML='Current <br>'+ 0; 
      document.querySelector('.part_'+ activeplayer).classList.toggle('active');

   }
  
 document.querySelector('.holdscore').addEventListener('click',function(){
    if(gamePlaying){
    score[activeplayer] =+totalScore;
    if(score[activeplayer]>=20){
      document.querySelector('#score_'+activeplayer).innerHTML='Score <br>'+ score[activeplayer];

      document.querySelector('.playername_'+ activeplayer).classList.add('winner');
      document.getElementById('playertitle_'+ activeplayer).innerHTML='Winner! <br>';
      gamePlaying=false;
    }else{ 
     changePlayer();
    }
   }  
 })

 document.querySelector('.add').addEventListener('click',initiate)

let inputVal= document.getElementById('scoreinput').value;
console.log('this is the winning score'+inputVal);
// document.getElementById('score_'+ activeplayer).innerHTML='score <br>'+ 0;}
//
//document.querySelector('.part_'+ activeplayer).classList.remove('active');
/**
 * document.querySelector('.part_0').classList.remove('active');
   document.querySelector('.part_1').classList.remove('active');
   document.querySelector('#playertitle_0').classList.remove('winner');
   document.querySelector('#playertitle_1').classList.remove('winner');
   document.querySelector('.part_0').classList.add('active');
    const endGame=()=>{
    
       document.getElementById('playertitle_'+activeplayer).innerhtml='Winner!';
       initiate();
    
 }
 */