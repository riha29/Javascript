console.log(1111111)
console.log(2222222)
let a=0
// setInterval(()=> console.log(a++),1000)

const timeID= setInterval(()=>{
    console.log(a++)
    if (a>3){
        clearInterval((timeID))   
    }
},1000)
    
console.log(3333333)