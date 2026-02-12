/*
Initial data:
        let totalAmount = 0;

🎯 Tasks
  1. Add ₹500 to the total
  2. Add ₹1200 to the total
  3. Apply a ₹200 discount
  4. Add 18% GST
  5. Print the final bill amount
*/

let totalAmount = 0;


totalAmount+=500;  //adding 500 to total amount
totalAmount+=1200; //adding 1200 to total amount
totalAmount-=200;  //applying discount of 200
totalAmount+=totalAmount*0.18;  //adding 18% GST
console.log("Final Bill Amount:" + totalAmount);  //printing final bill amount