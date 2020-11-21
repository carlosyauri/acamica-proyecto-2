
// DATOS DEL LOCALSTORAGE

let a = localStorage.getItem("img")
let name = localStorage.getItem("nameImg")
let titulo = localStorage.getItem("title")

// IMAGEN
let divImg123 = document.getElementById("ImgExp");
let img = document.createElement("img");
img.src = `${a}`;
divImg123.appendChild(img)

// USER NAME

let p = document.getElementById("p")
p.innerHTML = `${name}`;

// TITULO GIFO

let h1 = document.getElementById("h1Exp")
h1.innerHTML = `${titulo}`;

