let body = document.querySelector("body")
let nocturno = document.getElementById("nocturno")
let logoNoc = document.getElementById("logoNoc");
let iconSearch = document.getElementById("icon-search");
// let btnGifos = document.getElementById("btn-gifos");


nocturno.addEventListener("click", () => {
    let dark = document.body.classList.toggle("bodyNocturno")

    if(dark) {
    localStorage.setItem("nocturno-mode", "true");

    }else {
    localStorage.setItem("nocturno-mode", "false");
    }


    if (localStorage.getItem("nocturno-mode") == "true") {
        logoNoc.src = "assets/logo-mobile-modo-noct.svg"
        iconSearch.src = "assets/icon-search-modo-noct.svg"
        // btnGifos.src = "assets/CTA-crar-gifo-modo-noc.svg"
        nocturno.innerHTML = "Modo Diurno"    
        // modo nocturno activado
    }else {
        logoNoc.src = "assets/logo-mobile.svg"
        iconSearch.src = "assets/icon-search.svg"
        // btnGifos.src = "assets/button-crear-gifo.svg"
        nocturno.innerHTML = "Modo Nocturno" 
       // modo diruno activado
    }


    });

    if(localStorage.getItem("nocturno-mode") == "true") {
        document.body.classList.add("bodyNocturno");
        logoNoc.src = "assets/logo-mobile-modo-noct.svg"
        iconSearch.src = "assets/icon-search-modo-noct.svg"
        // btnGifos.src = "assets/CTA-crar-gifo-modo-noc.svg"
        nocturno.innerHTML = "Modo Diurno"  
       
     
    } else {
        document.body.classList.remove("bodyNocturno");
        logoNoc.src = "assets/logo-mobile.svg"
        iconSearch.src = "assets/icon-search.svg"
        // btnGifos.src = "assets/button-crear-gifo.svg"
        nocturno.innerHTML = "Modo Nocturno"
        
}


async function ponerGifo() {
    try{
        let tranding = "http://api.giphy.com/v1/gifs/trending?api_key=DwxPXTIv1WcfUVgrKe2czLBIw3NDagaf&limit=12"
        let data = await fetch(tranding);
        return data.json();
    }
    catch (err){
        console.log('Fallo el fetch', err)
    }
    
}


let arrayGifos;

async function menu() {

    try{

        arrayGifos = [];
        let nuevo = await ponerGifo();

        nuevo.data.forEach(element => {
            arrayGifos.push(element.images.downsized.url);
        });
        
        for(let i = 0; i < 3 ; i++){

            let divPrincipal = document.getElementById("gifosCentral")
            let div = document.createElement("div")
            div.id = "divGifo"
            let gifo = document.createElement("img")
            gifo.src = arrayGifos[i]
            gifo.id = "imgGifo"
            div.appendChild(gifo)
            divPrincipal.appendChild(div)

        }

        // let gifo1 = document.getElementById("gifimg1");
        // let gifo2 = document.getElementById("gifimg2");
        // let gifo3 = document.getElementById("gifimg3");
        // gifo1.src = arrayGifos[0] ;
        // gifo2.src = arrayGifos[1] ;
        // gifo3.src = arrayGifos[2] ;

    }   
    catch(err){
        console.log('Fallo el fetch', err)
    }
}

menu();


let sliderLeft = document.getElementById("flechaIzq")
let sliderRight = document.getElementById("flechaDer")

sliderLeft.addEventListener("click", () => {
    cambiarImagen(-1);
})

sliderRight.addEventListener("click", () => {
    cambiarImagen(1);
})


let posicionActual = 0

function cambiarImagen(numero) {

    let cantImagenes = arrayGifos.length;
    posicionActual = posicionActual + numero;


    if ((posicionActual + numero + 2) > cantImagenes) return ;

    if ((posicionActual + numero) < 0) posicionActual = 0;
    

    let gifo1 = document.getElementById("gifimg1");
    let gifo2 = document.getElementById("gifimg2");
    let gifo3 = document.getElementById("gifimg3");
    gifo1.src = arrayGifos[posicionActual]
    gifo2.src = arrayGifos[posicionActual + 1]
    gifo3.src = arrayGifos[posicionActual + 2]

}

