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
            </div>
     `;
    }).join('')
}
getEverything(products);
document.querySelectorAll(".showDetails").forEach(element => {
    element.addEventListener("click", event => {
        event.preventDefault();
        event.target.nextElementSibling.style.display = "block";
    })
});

document.querySelector("[type='submit']").addEventListener("click", e => {
    e.preventDefault();
    const searchValue = document.querySelector("[type='text']").value;
    console.log(searchValue);
    const filteredProducts = products.filter(p => {
        return p.name.includes(searchValue);
    })
    getEverything(filteredProducts);
})

