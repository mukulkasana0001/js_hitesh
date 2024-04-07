const form = document.querySelector("form")

//  *** THIS USE CASE GIVE YOU EMPTY VALUE BECAUSE HERE WE ARE NOT FILL THE FORM  
// const height = parseInt(document.querySelector("#height").value)

form.addEventListener('submit', function (e){
   e.preventDefault()
   const height = parseInt(document.querySelector("#height").value)
   const weight = parseInt(document.querySelector("#weight").value)
   const results = document.querySelector("#results") 
   

//    FOR CHECK MIX OF NUMBER OR  CHARECTER FOR HEIGHT
   const str= document.querySelector("#height").value;
   var isanychar;
          const arr = str.split("");
            arr.forEach((e) =>{ 
                            const check=  isNaN(e);
                               if(check==true){
                                          isanychar= 1;
                                        }
                                  })
                console.log(isanychar)

//    FOR CHECK MIX OF NUMBER OR  CHARECTER FOR HEIGHT
const str2= document.querySelector("#weight").value;
   var isanychar2;
          const arr2 = str2.split("");
            arr2.forEach((e) =>{ 
                            const check2=  isNaN(e);
                               if(check2==true){
                                          isanychar2= 1;
                                        }
                                  })
                console.log(isanychar2)
        
        //   arr.forEach((e) => {
        //     console.log(isNaN(e)) 
        //     console.log(e)
        //   });
        



   if((weight ==="" || weight <0 || isNaN(weight) || isanychar2===1) && ( height ===""|| height <0|| isNaN(height)|| isanychar ===1) ){
    results.innerHTML= "plese enter valid weight and height  "
   }
   else if(weight ==="" || weight <0 || isNaN(weight) || isanychar2 ===1) 
   {
    results.innerHTML= "plese enter valid weight  "
   }
   else if(height ===""|| height <0|| isNaN(height)|| isanychar ===1){
    results.innerHTML = `plese enter valid height `;
   }
   
   else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    results.innerHTML = bmi;
   }

})