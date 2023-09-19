console.log(1111111)
console.log(2222222)
setTimeout(()=> console.log('aaaa'),1000)
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(res => res.json())
.then(json => console.log(json))

console.log(3333333)
console.log(4444444)