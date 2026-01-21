/*ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    
filter() students who passed (marks ≥ 40)
map() to add a grade field
        ≥90 → A
        ≥75 → B
        ≥60 → C
        else → D

   
reduce() to calculate average marks
find() the student who scored 92
findIndex() of student "Kiran"

*/

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

let result=students.filter(studentObj=>studentObj.marks>40)
console.log(result)

let result1=students.map(studentObj=>
{
    if(studentObj.marks>=90)
    {
        studentObj.grade='A'
    }
    else if(studentObj.marks>=75)
    {
        studentObj.grade='B'
    }
    else if(studentObj.marks>=60)
    {
        studentObj.grade='C'
    }
    else
    {
        studentObj.grade='D'
    }
}
)
let result2=students.reduce((acc,elementObj)=>acc+elementObj.marks,0)/students.length
console.log(result2)
let result3=students.find(element=>element.marks===92)
console.log(result3)
let result4=students.findIndex(element=>element.name==="Kiran")
console.log(result4)