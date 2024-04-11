const start = document.querySelector("#start")
    const stop = document.querySelector("#stop")
    const  body =document.querySelector("body")
    const randomcolor = function (){
   
        const hex ="0123456789ABCDEF"
        let color = "#"
        for(i=0 ; i<6 ;i++)
        {
            color +=hex[Math.floor(Math.random()*16)]
            
        }
    
        return color;
    
    }

    console.log(randomcolor())


    start.addEventListener("click",function(){
         set()
    })
   
    function set(){
        let intervalID = setInterval(saydate,1000,"started");
        stop.addEventListener("click",function(){
        dismis(intervalID);
    })
       }
    
       function dismis(intervalID){
        clearInterval(intervalID);
        intervalID =null;
        body.style.backgroundColor = randomcolor()
        console.log("stoped")
    }
    var saydate = function (str){
        
        body.style.backgroundColor = randomcolor()
        console.log(str)
    }