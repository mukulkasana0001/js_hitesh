const clock = document.querySelector("#clock");
const body = document.querySelector("body");
  let date;
//   function playaudio(audioname){
//     let audio = new Audio(audioname);
//    audio.play();
//     // audio.loop = true;
//   }
//    playaudio("audio.mp3");
 

  setInterval(function(){
    date = new Date();
    clock.innerHTML= date.toLocaleTimeString();
    // console.log(date.toLocaleTimeString());

  } ,1000);
  
  
//   for extra 
// let temp2=0;
// setInterval(function(){
//     temp2=temp2+1;
//     if(temp2===9){
//         playsound();
//     }
//   } ,10000);
  
//    function playsound(){
//     audio = new Audio("audio.mp3");
//     audio.play();
//     console.log("play")
// }
    

let temp = 0;
setInterval(function(){
    temp= temp+1;
    if((temp%2)===0){
    body.style.backgroundColor="rgb(61, 59, 47)";
        }
     else {
        body.style.backgroundColor= "rgb(100, 95, 54)";
        ;
     }
   
  } ,1000);

  