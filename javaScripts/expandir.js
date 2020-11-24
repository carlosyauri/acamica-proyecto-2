
// MODO nocturno

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

///////////////////////////////////////////////////////////////////////////////////


// GUARDAR ARRAY DE FAVORITOS EN LOCALSTORAGE


let btnFav = document.getElementById("favorito")


btnFav.addEventListener("click", () => {


    if(localStorage.getItem("arrayFav")){
        let arrayFav = localStorage.getItem("arrayFav")
        arrayFav = JSON.parse(arrayFav)

        let fav = localStorage.getItem("fav")
        arrayFav.push(`${fav}`)
        localStorage.setItem("arrayFav", JSON.stringify(arrayFav));

    }else{

        let arrayFav = []
        let fav = localStorage.getItem("fav")
        arrayFav.push(`${fav}`)
        localStorage.setItem("arrayFav", JSON.stringify(arrayFav));
    }  
});

///////////////////////////////////////////////////////////////////////////////////

// BOTON DE DESCARGA

let desc = document.getElementById("descarga");
desc.addEventListener("click", ()=>{

    descargaGif(`${a}`)

})

async function descargaGif(url) {

    let a = document.createElement('a');
    let response = await fetch(url);
    let file = await response.blob();
    a.download = 'myGif-proyecto';
    a.href = window.URL.createObjectURL(file);
    a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
    a.click();

}



// ///////////////////////////////////////// modo nocturno







