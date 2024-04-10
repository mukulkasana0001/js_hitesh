const start = document.querySelector("#start")
    const stop = document.querySelector("#stop")
    const  body =document.querySelector("body")


    start.addEventListener("click",function(){
         set()
    })

    function set(){
        const intervalID = setInterval(saydate,2000,"hello");
        stop.addEventListener("click",function(){
        dismis(intervalID);
    })
       }
    
       function dismis(intervalID){
        clearInterval(intervalID);
        
        console.log("stoped")
    }
    var saydate = function (str){
        
        
        console.log(str)
    }