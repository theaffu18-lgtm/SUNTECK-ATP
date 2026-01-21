/*ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer

You are building a bank statement summary.

Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000

    */

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

let result=transactions.filter(transactionObj=>transactionObj.type==="credit")
console.log(result)

let result1=transactions.map(transactionObj=>transactionObj.amount)
console.log(result1)    

let result2=transactions.reduce((acc,elementObj)=>{
    if(elementObj.type==="credit")
    {
        return acc+elementObj.amount
    }       
    else
    {
        return acc-elementObj.amount
    }
},0)
console.log(result2)    

let result3=transactions.find(element=>element.type==="debit")
console.log(result3)    
let result4=transactions.findIndex(element=>element.amount===10000)
console.log(result4)