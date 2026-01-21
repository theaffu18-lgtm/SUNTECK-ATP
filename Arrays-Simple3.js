/*Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92

    */

    const marks = [78, 92, 35, 88, 40, 67];
    let result=marks.filter(elements=>elements>=40)
    console.log(result) 
    let result1=marks.map(element=>element+5)
    console.log(result1)
    let result2=marks.reduce((acc,element)=>acc>element?acc:element)        
    console.log(result2)
    let result3=marks.find(element=>element<40)
    console.log(result3)
    let result4=marks.findIndex(element=>element===92)
    console.log(result4)
  