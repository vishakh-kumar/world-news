

let initialData;
let mainData;

let apiKey = "c4c8a4cebef621ab5eafecf6b7a504ea";
let newsLink = "https://gnews.io/api/v4/search?q=example&token=c4c8a4cebef621ab5eafecf6b7a504ea"

//https://newsapi.org/v2/everything?q=keyword&apiKey=8bfde7e8fc53418a8467de3409e72ab8
let newsApi = $.ajax(newsLink)
.then(function(data){

console.log(data);
})


//how to create modal for the pop up