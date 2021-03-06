

// DATOS DEL LOCALSTORAGE

let a = localStorage.getItem("img")
let name = localStorage.getItem("nameImg")
let titulo = localStorage.getItem("title")


////////////////////////////////////////
//////////// CAMBIAR IMG, USER Y TITULO

// IMAGEN
let img = document.getElementById("ImgExp");
img.src = `${a}`;


// USER NAME

let p = document.getElementById("p")
p.innerHTML = `${name}`;

// TITULO GIFO

let h1 = document.getElementById("h1Exp")
h1.innerHTML = `${titulo}`;



///////////////////////////////////////////////////////////////////////////////////


// GUARDAR ARRAY DE FAVORITOS EN LOCALSTORAGE


let des = document.getElementById("descarga")
let btnFav = document.getElementById("favorito")

des.classList.add("imgDeExp")
btnFav.classList.add("imgDeExp")



btnFav.addEventListener("mouseover", () => {
    btnFav.src = "./assets/icon-fav-hover.svg"
})


btnFav.addEventListener("mouseout", () => {
    btnFav.src = "./assets/icon-fav.svg"
})

des.addEventListener("mouseover", () => {
    des.src = "./assets/icon-download-hover.svg"
})


des.addEventListener("mouseout", () => {
    des.src = "./assets/icon-download.svg"
})



btnFav.addEventListener("click", () => {

    btnFav.src = "./assets/icon-fav-active.svg"
    btnFav.id = "favActive"


    btnFav.addEventListener("mouseover", () => {
        btnFav.src = "./assets/icon-fav-active.svg"
    })
    
    
    btnFav.addEventListener("mouseout", () => {
        btnFav.src = "./assets/icon-fav-active.svg"
    })

    btnFav.classList.remove("imgDeExp")

    if(localStorage.getItem("arrayFav")){
        let arrayFav = localStorage.getItem("arrayFav")
        arrayFav = JSON.parse(arrayFav)

        let arrayFavNom = localStorage.getItem("arrayFavNom")
        arrayFavNom = JSON.parse(arrayFavNom)

        let arrayFavTittle = localStorage.getItem("arrayFavTittle")
        arrayFavTittle = JSON.parse(arrayFavTittle)

        let fav = localStorage.getItem("fav")
        let name = localStorage.getItem("nameImg")
        let titulo = localStorage.getItem("title")


        arrayFav.push(`${fav}`)
        arrayFavNom.push(`${name}`)
        arrayFavTittle.push(`${titulo}`)
        localStorage.setItem("arrayFav", JSON.stringify(arrayFav));
        localStorage.setItem("arrayFavNom", JSON.stringify(arrayFavNom));
        localStorage.setItem("arrayFavTittle", JSON.stringify(arrayFavTittle));
        
    }else{

        let arrayFav = []
        let arrayFavNom = []
        let arrayFavTittle = []
        let fav = localStorage.getItem("fav")
        let name = localStorage.getItem("nameImg")
        let titulo = localStorage.getItem("title")


        arrayFav.push(`${fav}`)
        arrayFavNom.push(`${name}`)
        arrayFavTittle.push(`${titulo}`)
        localStorage.setItem("arrayFav", JSON.stringify(arrayFav));
        localStorage.setItem("arrayFavNom", JSON.stringify(arrayFavNom));
        localStorage.setItem("arrayFavTittle", JSON.stringify(arrayFavTittle));
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






/////////////////////////////////////////// MODO NOCTURNO

let nocExp;

let cerrar = document.getElementById("cerrar");



if (localStorage.getItem("nocturno-mode") == "true") {
    let log = document.getElementById("logoNoc")
    log.src = "./assets/logo-mobile-modo-noct.svg"
    nocExp = document.getElementById("cExp")
    nocExp.classList.add("expNoc")
    nocExp.classList.remove("containerExpandir")
    document.body.classList.add("bodyNocturno")
    logoNoc.src = "./assets/logo-mobile-modo-noct.svg"
    cerrar.src = "./assets/close-modo-noct.svg"
 
    // modo nocturno activado
}else {
    let log = document.getElementById("logoNoc")
    log.src = "/assets/logo-mobile.svg"
    document.body.classList.remove("bodyNocturno");
    logoNoc.src = "./assets/logo-mobile.svg"
    cerrar.src = "./assets/close.svg"

}



