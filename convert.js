
function inchToFeet(number) {
    feet= number/2.54
    return feet
}

// console.log(inchToFeet(2.54))


function oddOrEven(number){
    if (number/2==0){
        return 'Even'
    }
    else{
        return 'odd'
    }
}

// console.log(oddOrEven(11))

var fact= 1
for (var i=1; i<=5; i++){
        fact= fact*i
}
console.log(fact)