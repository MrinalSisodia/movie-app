let a = document.createElement("p")
a.innerText = "Hello World"
document.getElementById("app").appendChild(a)

// API call to servers of OMDB 
const movieData = fetch("http://www.omdbapi.com/?i=tt12735488&apikey=8c3131ae")

// Try
// movieData.then(response => {
//     response.json().then(data => {  
//     })
// })


async function app () {
    let response = await movieData;
    let data = await response.json()
    let AppEle = document.getElementById("app")
    // Data - 
    console.log(data)
    
    
    let title = data.Title;

    let actors = data.Actors;

    let poster = data.Poster;

    let TileEle = document.createElement("h3")
    TileEle.innerText = data.Title;

    let ActorsEle = document.createElement("p");
    ActorsEle.innerText = data.Actors;

    let PosterEle = document.createElement("img")
    PosterEle.setAttribute("src", poster);

    AppEle.appendChild(PosterEle)
    AppEle.appendChild(ActorsEle)
    AppEle.appendChild(TileEle)
    

    console.log(document.getElementById("app"))
}

app();
console.log("Mrinal")