/*
ASSIGNMENT 4: 
------------
Movie Streaming Platform

You are working on a movie recommendation system.

Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"
*/

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];  

let result=movies.filter(movieObj=>movieObj.genre==="Sci-Fi")
console.log(result)

let result1=movies.map(movieObj=>`${movieObj.title} (${movieObj.rating})`)
console.log(result1)

let result2=movies.reduce((acc,elementObj)=>acc+elementObj.rating,0)/movies.length
console.log(result2)
let result3=movies.find(element=>element.title==="Joker")
console.log(result3)
let result4=movies.findIndex(element=>element.title==="Avengers")
console.log(result4)