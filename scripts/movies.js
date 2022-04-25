// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page


const searchMovies = async() => {
    
    try{
        let query = document.getElementById("search").value;
        let url = `https://www.omdbapi.com/?apikey=e00bfee8&s=${query}`;

        const res = await fetch(url);
        const datas = await res.json();

        let movies = datas.Search;
        // console.log(datas.Search);

        return movies;

        
    }
    catch (err) {
        console.log("err", err)
    }
}

// ************************appending Movies here***************************

const appendMovies = (data) => {
    
    document.querySelector("#movies").innerHTML = "";
    data.forEach((elem) => {
        let box = document.createElement("div")
        box.setAttribute("id", "box");
        box.addEventListener("click", function(){
            showVideos(elem);
        })

        let image = document.createElement("img");
        image.src = elem.Poster;
        image.setAttribute("id", "image")

        let title = document.createElement("p");
        title.innerText = elem.Title;

        let button = document.createElement("button");
        button.innerText = "Book Now";
        button.addEventListener("click", function(){
            redirectConfirm(elem);
        });
        button.setAttribute("class", "book_now");

        box.append(image, title, button);

        document.querySelector("#movies").append(box);
    })


    
}


const main = async() => {
    let data = await searchMovies();
    console.log(data);

    if(data === undefined)
    {
        return false;
    }

    // ************************appending Movies here***************************

    appendMovies(data);

}


let id;

function debounce (func, delay)
{
    if(id){
        clearTimeout(id);
    }
    
    setTimeout(() =>{
        func();

    }, delay);
}

// e00bfee8

// let h = document.createElement("h1");
// h.innerText = "Hello"


function redirectConfirm(data)
{
    window.location.href = "checkout.html";
}

const showVideos = (clicked) => {
    console.log(clicked);

    localStorage.setItem("movie", JSON.stringify(clicked));
    
}

let sum = localStorage.getItem("amount");
console.log(sum);
let k = document.querySelector("#wallet");
k.innerText = sum