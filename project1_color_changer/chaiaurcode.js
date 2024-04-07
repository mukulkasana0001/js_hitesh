const button = document.querySelectorAll(".button")
const body = document.querySelector("body");

button.forEach( (button)=>{
   
    button.addEventListener('click', function (e) {
        // console.log(e.target.id)   *** BY TARGET WE CAN  HERE TARGET THE CLICK BUTTON **** 
     if(e.target.id==="grey"){
        body.style.backgroundColor="grey";
     }
     if(e.target.id==="white"){
        body.style.backgroundColor="grey";
     }
     if(e.target.id==="blue"){
        body.style.backgroundColor="grey";
     }
     if(e.target.id==="yellow"){
        body.style.backgroundColor="grey";
     }
    })
});