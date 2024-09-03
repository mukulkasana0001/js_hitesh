//   this is by me

// const start = document.querySelector("#start")
//     const stop = document.querySelector("#stop")
//     const  body =document.querySelector("body")
//     const randomcolor = function (){
   
//         const hex ="0123456789ABCDEF"
//         let color = "#"
//         for(i=0 ; i<6 ;i++)
//         {
//             color +=hex[Math.floor(Math.random()*16)]
            
//         }
    
//         return color;
    
//     }

//     console.log(randomcolor())


//     start.addEventListener("click",function(){
//          set()
//     })
   
//     function set(){
//         let intervalID = setInterval(saydate,1000,"started");
//         stop.addEventListener("click",function(){
//         dismis(intervalID);
//     })
//        }
    
//        function dismis(intervalID){
//         clearInterval(intervalID);
//         intervalID =null;
//         body.style.backgroundColor = randomcolor()
//         console.log("stoped")
//     }
//     var saydate = function (str){
        
//         body.style.backgroundColor = randomcolor()
//         console.log(str)
//     }


    
// @divyajyotibasu3001
// 8 months ago


// I think the 'Stop' button not 'seemingly' working at 29:10 is not because of indexId
//  value being changed from null to the reference of setInterval() but because of that prior 
//  to clicking the 'Stop' button, the 'Start' button was clicked multiple times hence multiple 
//  setInterval() methods are running simultaneously. The indexId has the reference of only the 
//  last setInterval() and the references of the previously started intervals have been lost. 
//  Clicking on 'Stop' clears that process but the other prior started setIntervals continue to 
//  run hence it appears that 'Stop' did not work at all. The check if(!intervalId) ensures that
//   if an interval is already executing, another interval should not start. Great series overall! 
//   Enjoyed watching and doing the projects myself alongside




//generate a random color
// this is by hitesh 

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalId;
  const startChangingColor = function () {
    if (!intervalId) {
      intervalId = setInterval(changeBgColor, 1000);
    }
  
    function changeBgColor() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
  
  