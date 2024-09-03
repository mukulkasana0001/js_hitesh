let randomnumber = parseInt(Math.random() * 100 + 1);
const userinput = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
// const userinput = document.querySelector("#guessfield");
const guesssloat = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startover = document.querySelector(".resultParas");

const p = document.createElement('p')


let prevguess = []
let numguess = 1;
let playgame = true;


if (playgame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    
    const quess = parseInt(userinput.value);
     console.log(quess);
     validateguesss(quess);

  });
}


function validateguesss(quess) {
  if(isNaN(quess)){
    alert("please enter a valid number")
  }
  else if(quess<1){
    alert("please enter a more then 1")
  }
  else if(quess>100){
    alert("please enter a less then 100")
  }
  else{
    prevguess.push(quess);
    if( numguess=== 11){
    displayguess(quess);
    displaymessage(`game over random number was ${randomnumber}`);
    endgame();
  }else{
    displayguess(quess);
    checkquess(quess)
  }

  }

}



function checkquess(quess) {
  if(guess===randomnumber){
    displaymessage(`you guessed right`);
    endgame();
  }
  else if(guess<randomnumber){
    displaymessage(`number is too low`);
  }
  else if(guess>randomnumber){
    displaymessage(`number is too high`);
  }
}




function displayguess(quess) {
  userinput.value= '';
  guesssloat.innerHTML += `${quess}  `;
  // console.log(`${guesssloat}`)
numguess++;
remaining.innerHTML = `${11-numguess}`;
}


function displaymessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}



function endgame() {
  userinput.value=''
  userinput.setAttribute('disabled','')
  p.classList.add('button');
  p.innerHTML = `<h2 id= "newgame">start a new game</h2>`;
startover.appendChild(p);
playgame = false;
newgame()
}


function newgame() {
  const newgamebutton = document.querySelector('#newgame')
  newgamebutton.addEventListener('click',function(e){
    randomnumber = parseInt(Math.random() * 100 + 1);
    let prevguess = [];
    let numguess = 1;
    guesssloat .innerHTML= '';
    remaining.innerHTML = `${11-numguess}`
    userinput.removeAttribute('disabled')
    startover.removeChild(p);
    playgame = true;
  });
}