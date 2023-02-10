//* option-1: Directly set on the HTML element
//*<button onclick="console.log(57)">Another button</butt

console.log('This is separate js file');


//* option-2: add onclick function on the HTML element
//* Important:
//*<button onclick="makeRed()">Make red</button>
function makeRed(){
    document.body.style.backgroundColor = 'red';
}


//*option-3: 

const makeBlueButton = document.getElementById('make-blue');
      makeBlueButton.onclick = makeBlue;
      function makeBlue(){
        document.body.style.backgroundColor = 'blue';
      }


//*option-3: Another [we will use some time]
      const purpleButton = document.getElementById('make-purple');
      purpleButton.onclick = function makePurple(){
        document.body.style.backgroundColor = 'purple';
      }


//*option-4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink );
function makePink(){
    document.body.style.backgroundColor = 'pink';

}

//*option-4: Another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen(){
  document.body.style.backgroundColor = 'green';
})


//*option-4: Final
//*Important: we will use this some time
document.getElementById('make-goldenrod').addEventListener('click',function(){
    document.body.style.backgroundColor = 'goldenrod';
})