function makeRed() {
    document.body.style.backgroundColor = "red";
  }

// handle blue button
const blueButton = document.getElementById("make-blue-button");
console.log(blueButton);
blueButton.onclick = makeBlue
function makeBlue() {
    document.body.style.backgroundColor = "blue";
}

// handle green button
const greenButton= document.getElementById('make-green-button')
greenButton.onclick= function (){ document.body.style.backgroundColor='green' }


// handle golden-rod button by using addEventListener
const goldenRodButton= document.getElementById('make-golden-rod')
goldenRodButton.addEventListener('click', goldenRod)
function goldenRod(){
    document.body.style.backgroundColor=' goldenRod'
}

// handle hotpink button
const hotPinkButton= document.getElementById('make-hotpink-button')
hotPinkButton.addEventListener('click', function (){document.body.style.backgroundColor='hotPink'})
