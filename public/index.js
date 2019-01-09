document.getElementById("main").innerHTML = products.map((item, index)=> {
    return `<img src="${item.imgUrl}" />`
    // return '<img src="' + item.imgUrl + '">'
    // return "<img src='" + item.imgUrl + "'>"
}).join('')

'<h1>Hello!</h1>'
"<h1>Hello!</h1>"

const name = 'Laura';

`<h1>${name}</h1>`