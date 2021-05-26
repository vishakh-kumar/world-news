// Constant


// apps State

// cached element references
let $main = $("main");


//funtions
// we need newsArray.content
function handleGetData(event) {
    event.preventDefault();
    $main.empty();
    let searchText = $("input#inputBtn").val();
   

    $.ajax(`https://gnews.io/api/v4/search?q=${searchText}&token=c4c8a4cebef621ab5eafecf6b7a504ea`)
        .then(function (data) {
                eachNews = data.articles;

                for (i = 0; i < 10; i++) {
                    let newsArray = eachNews[i];
                    let content = newsArray.content;
                    $main.append(`
                
        <article>
        <h3>${newsArray.title}</h3>
        <p>${newsArray.description}</p>
        </article>
        `)

                }
            },
            function (error) {
                console.log("Bad request: ", error);
            }

        )
}

//Event Handlers
$("form").on("submit", handleGetData);