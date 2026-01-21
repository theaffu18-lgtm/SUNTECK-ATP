/*ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"

*/

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

let result=employees.filter(employeeObj=>employeeObj.department==="IT")
console.log(result)

let result1=employees.map(employeeObj=>{employeeObj.netSalary=employeeObj.salary+employeeObj.salary*0.1; return employeeObj})
console.log(result1)

let result2=employees.reduce((acc,elementObj)=>acc+elementObj.salary,0)
console.log(result2)

let result3=employees.find(element=>element.salary===30000)
console.log(result3)

let result4=employees.findIndex(element=>element.name==="Neha")
console.log(result4)
