"use strict";


const getEverything = (list) => {
    document.getElementById("main").innerHTML = list.map((item, index) => {
        return `
            <div>
                <img src="${item.imgUrl}" />
                <h3>Product Name:${item.name}</h3>
                <p>Rating: ${item.rating}</p>
                <p>Number of Reviews: ${item.numReviews}</p>
                <p>Price: ${item.price}</p>
                <a href="#" class="showDetails">Details</a>
                <div style="display: none">${item.description}</div>
                <br/>
                <a href="#" class="addToCart" data-id="${index}">Add to Cart</a>
                <div style="display: none">${item.name} ${item.price}</div>
            </div>
     `;
    }).join('')
}
fetch("https://acastore.herokuapp.com/products")
.then(res=>res.json())
.then(products=> {
    getEverything(products);
});
document.querySelectorAll(".showDetails").forEach(element => {
    element.addEventListener("click", event => {
        event.preventDefault();
        event.target.nextElementSibling.style.display = "block";
    })
});

document.querySelector("[type='submit']").addEventListener("click", e => {
    e.preventDefault();
    const searchValue = document.querySelector("[type='text']").value;
    const filteredProducts = products.filter(p => {
        return p.name.includes(searchValue);
    })
    getEverything(filteredProducts);
})

const signUp = (e) => {
    fetch("https://acastore.herokuapp.com/users", {
        method: "POST"
    })
    .then(res=>res.json())
    .then(user=> {
        localStorage.setItem("user", "true");
        navigate();
    })
}


const navigate = () => {
    document.querySelector("#signup").style.display = "none";
    document.querySelector("#homepage").style.display = "block";
}

if (localStorage.getItem("user")) {
    navigate();
}

const addProduct = () => {
    const name = document.querySelector("#name").value;
    const description = document.querySelector("#description").value;
    const price = document.querySelector("#price").value;
    fetch(`https://acastore.herokuapp.com/products?name=${name}&description=${description}&price=${price}`, {
        method: "POST",
    
    })
    .then(res=>res.json())
    .then(product=> {
        console.log(product);
    })
}

// document.querySelectorAll(".addToCart").forEach(element => {
//     element.addEventListener("click", e => {
//         e.preventDefault();
//         console.log(e.target.getAttribute("data-id"))
//         document.querySelector("ul").insertAdjacentHTML("beforeend", `
//         <li>
//         Name:  
//         Price: Stuff
//       </li>
//         ` 
//     });





