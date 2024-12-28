
// API call to servers of OMDB 
let movieData = fetch("http://www.omdbapi.com/?i=tt12735488&apikey=8c3131ae")

// Try
// movieData.then(response => {
//     response.json().then(data => {  
//     })
// })

const input = document.createElement("input");
//input.setAttribute("text");

const button = document.createElement("button");
button.innerText = "Go!";


document.getElementById("app").appendChild(input); 

const btnfunc = function(e){
console.log("acv", e);
console.log(input.value);
movieData = fetch(`http://www.omdbapi.com/?i=${input.value}&apikey=8c3131ae`);
let newApp = document.getElementById("app")
while(newApp.firstChild){
    newApp.removeChild(newApp.firstChild);
}
document.getElementById("app").appendChild(input);
button.addEventListener("click", btnfunc);
document.getElementById("app").appendChild(button);

app();
}


button.addEventListener("click", btnfunc);
document.getElementById("app").appendChild(button);

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