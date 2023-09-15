// function call
// method-01

function add(num1=0, num2=0){
    return num1+num2
}
console.log(add(15,17))

// mehod-02
const add2= function add2(num1=0, num2=0){
    return num1+num2
}
console.log(add2(15,17))

// method-03
const add3= function (num1=0, num2=0){
    return num1+num2
}
console.log(add3(15,17))

// method-04
const add4= (num1=0, num2=0) => num1+num2

console.log(add4(15,17))

// no parameter
const getName= () => 'Lionel Messi'
console.log(getName())