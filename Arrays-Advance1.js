/*ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.

Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    
Use filter() to get only inStock products
Use map() to create a new array with:  { name, totalPrice }
Use reduce() to calculate grand total cart value
Use find() to get details of "Mouse"
Use findIndex() to find the position of "Keyboard"

*/

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

let result=cart.filter(cartobj=>cartobj.inStock==true)
console.log(result)

let result1=cart.map(cartobj=>[{name:cartobj.name,totalPrice:cartobj.price*cartobj.quantity}])
console.log(result1)
let result2=cart.reduce((acc,elementObj)=>acc+elementObj.price*elementObj.quantity,0)
console.log(result2)

let result3=cart.find(element=>element.name=='Mouse')
console.log(result3)

let result4=cart.findIndex(element=>element.name==="Keyboard")
console.log(result4)
