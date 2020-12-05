let arrayObtenidos = [];
let arrayId = localStorage.getItem("arrayId")
arrayId = JSON.parse(arrayId)


if (arrayObtenidos == "null" || arrayObtenidos.length == 0){

    let divImg = document.getElementById("sinFav");
    let img = document.createElement("img");
    img.id = "sinResultado"
    img.src = "/assets/icon-mis-gifos-sin-contenido.svg";
    divImg.appendChild(img);

    let p = document.createElement("p")
    p.innerHTML = "¡Anímate a crear tu primer GIFO!";
    divImg.appendChild(p)

}
else {
    main()
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////   FUNCIONES  ///////////////////////////////////////////////////////


async function misGifos(ids) {

    try {
        let gifById = `http://api.giphy.com/v1/gifs?api_key=YaOhho0nfvtDv9KxcBH64ng3iVX6VW9a&ids=${ids}`
    
        let response = await fetch(gifById);
        return response.json()
          
    }
        catch (error) {
        console.log("entro por error", error)
        }

}  

async function main(){

    for ( let i = 0; i < arrayId.length ; i++){

        let espera = await misGifos(arrayId[i])
        arrayObtenidos.push(espera.data[0].images.downsized.url)

        let resultado = document.getElementById("resultados")
        let imgPush = document.createElement("img")
        imgPush.src = arrayObtenidos[i]

        resultado.appendChild(imgPush)

    }

}


let btnCrear = document.getElementById("btn-gifos");


if (localStorage.getItem("nocturno-mode") == "true") {

    logoNoc.src = "./assets/logo-mobile-modo-noct.svg"
    // iconSearch.src = "./assets/icon-search-modo-noct.svg"
    btnCrear.src = "./assets/CTA-crar-gifo-modo-noc.svg"
    flechaD.src = "./assets/button-slider-right-md-noct.svg"
    flechaI.src = "./assets/button-slider-left-md-noct.svg"
    nocturno.innerHTML = "Modo Diurno"    
    // modo nocturno activado
}else {
    logoNoc.src = "assets/logo-mobile.svg"
    // iconSearch.src = "assets/icon-search.svg"
    btnCrear.src = "assets/button-crear-gifo.svg"
    flechaD.src = "./assets/button-slider-right.svg"
    flechaI.src = "./assets/button-slider-left.svg"
    nocturno.innerHTML = "Modo Nocturno" 
   // modo diruno activado
}


if(localStorage.getItem("nocturno-mode") == "true") {
    document.body.classList.add("bodyNocturno");
    logoNoc.src = "./assets/logo-mobile-modo-noct.svg"
    // iconSearch.src = "./assets/icon-search-modo-noct.svg"
    btnCrear.src = "./assets/CTA-crar-gifo-modo-noc.svg"
    flechaD.src = "./assets/button-slider-right-md-noct.svg"
    flechaI.src = "./assets/button-slider-left-md-noct.svg"
    nocturno.innerHTML = "Modo Diurno"  
   
 
} else {
    document.body.classList.remove("bodyNocturno");
    logoNoc.src = "assets/logo-mobile.svg"
    // iconSearch.src = "assets/icon-search.svg"
    btnCrear.src = "assets/button-crear-gifo.svg"
    flechaD.src = "./assets/button-slider-right.svg"
    flechaI.src = "./assets/button-slider-left.svg"
    nocturno.innerHTML = "Modo Nocturno"
    
}