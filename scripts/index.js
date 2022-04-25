// Store the wallet amount to your local storage with key "amount"

// let k = localStorage.getItem("amount")

let sum = localStorage.getItem("amount") || 0;
document.querySelector("#wallet").innerText = sum;

const addAmount = () => {
    let amount = document.querySelector("#amount").value;

    sum = (+sum) + (+amount);
    document.querySelector("#wallet").innerText = sum;
    localStorage.setItem("amount", sum);
}




// let sum = 0;
// document.querySelector("#wallet").innerText = sum;
// const addAmount = () => {
//     let amount = document.querySelector("#amount").value;
//     // console.log(amount);

//     localStorage.setItem("money", amount);

//     let a = localStorage.getItem("money");
//     sum += (+a);
//     console.log(sum);

    
    
//     localStorage.setItem("amount", sum);
// }




const toMovies = () => {
    window.location.href = "movies.html";
}
