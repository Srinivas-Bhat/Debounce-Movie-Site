// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let movie = JSON.parse(localStorage.getItem("movie"));
// console.log(movie.Poster);

const movieAppend = (movie) => {
  let title = document.createElement("h2");
  title.innerText = movie.Title;

  let image = document.createElement("img");
  image.src = movie.Poster;
  image.setAttribute("id", "image");

  document.querySelector("#movie").append(title, image);
  document.querySelector("#movie").style.visibility = "visible";
};
movieAppend(movie);

let sum = localStorage.getItem("amount");
console.log(sum);
let k = document.querySelector("#wallet");
k.innerText = sum;

function myfunction() {
  let num = document.querySelector("#number_of_seats").value;
  console.log(num);

  if (sum > num * 100) {
    alert("Booking successful!");
    sum = sum - num * 100;
    k.innerText = sum;
    localStorage.setItem("amount", sum);
  } else {
    alert("Insufficient Balance!");
  }

  // sum = sum-(+num*100);
  // console.log(sum);

  // localStorage.setItem("amount", sum);
}
