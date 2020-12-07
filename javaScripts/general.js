let body = document.querySelector("body");
let nocturno = document.getElementById("nocturno");
let logoNoc = document.getElementById("logoNoc");
let iconSearch = document.getElementById("icon-search");
let btnGifos = document.getElementById("btn-gifos");
let flechaD = document.getElementById("flechaD");
let flechaI = document.getElementById("flechaI");



nocturno.addEventListener("click", () => {
    
    let dark = document.body.classList.toggle("bodyNocturno")

    if(dark) {
        localStorage.setItem("nocturno-mode", "true");
    }else {
        localStorage.setItem("nocturno-mode", "false");
    }


    if (localStorage.getItem("nocturno-mode") == "true") {

        logoNoc.src = "./assets/logo-mobile-modo-noct.svg"
        iconSearch.src = "./assets/icon-search-modo-noct.svg"
        btnGifos.src = "./assets/CTA-crar-gifo-modo-noc.svg"
        flechaD.src = "./assets/Button-slider-right-md-noct.svg"
        flechaI.src = "./assets/button-slider-left-md-noct.svg"
        nocturno.innerHTML = "Modo Diurno"    
        // modo nocturno activado
    }else {
        logoNoc.src = "./assets/logo-mobile.svg"
        iconSearch.src = "./assets/icon-search.svg"
        btnGifos.src = "./assets/button-crear-gifo.svg"
        flechaD.src = "./assets/Button-slider-right.svg"
        flechaI.src = "./assets/button-slider-left.svg"
        nocturno.innerHTML = "Modo Nocturno" 
       // modo diruno activado
    }


});

    if(localStorage.getItem("nocturno-mode") == "true") {
        document.body.classList.add("bodyNocturno");
        logoNoc.src = "./assets/logo-mobile-modo-noct.svg"
        iconSearch.src = "./assets/icon-search-modo-noct.svg"
        btnGifos.src = "./assets/CTA-crar-gifo-modo-noc.svg"
        flechaD.src = "./assets/Button-slider-right-md-noct.svg"
        flechaI.src = "./assets/button-slider-left-md-noct.svg"
        nocturno.innerHTML = "Modo Diurno"  
       
     
    } else {
        document.body.classList.remove("bodyNocturno");
        logoNoc.src = "./assets/logo-mobile.svg"
        iconSearch.src = "./assets/icon-search.svg"
        btnGifos.src = "./assets/button-crear-gifo.svg"
        flechaD.src = "./assets/Button-slider-right.svg"
        flechaI.src = "./assets/button-slider-left.svg"
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
        

        let gifo1 = document.getElementById("gifimg1");
        let gifo2 = document.getElementById("gifimg2");
        let gifo3 = document.getElementById("gifimg3");
        gifo1.src = arrayGifos[0] ;
        gifo2.src = arrayGifos[1] ;
        gifo3.src = arrayGifos[2] ;


        arrayGifosName = [];
        nuevo.data.forEach(element => {
            arrayGifosName.push(element.username);
        });


        arrayGifosTitulos = [];
        nuevo.data.forEach(element => {
            arrayGifosTitulos.push(element.title);
        });

        gifo1.addEventListener("click", () => {
            localStorage.removeItem("title")
            localStorage.removeItem("img")
            localStorage.removeItem("nameImg")

            localStorage.setItem("img", `${gifo1.src}`)
            localStorage.setItem("fav", `${gifo1.src}`)
            localStorage.setItem("nameImg", `${arrayGifosName[0]}`)
            localStorage.setItem("title", `${arrayGifosTitulos[0]}`)
        });
        gifo2.addEventListener("click", () => {
            localStorage.removeItem("title")
            localStorage.removeItem("img")
            localStorage.removeItem("nameImg")

            localStorage.setItem("img", `${gifo2.src}`)
            localStorage.setItem("fav", `${gifo2.src}`)
            localStorage.setItem("nameImg", `${arrayGifosName[1]}`)
            localStorage.setItem("title", `${arrayGifosTitulos[1]}`)
        });
        gifo3.addEventListener("click", () => {
            localStorage.removeItem("title")
            localStorage.removeItem("img")
            localStorage.removeItem("nameImg")

            localStorage.setItem("img", `${gifo3.src}`)
            localStorage.setItem("fav", `${gifo3.src}`)
            localStorage.setItem("nameImg", `${arrayGifosName[2]}`)
            localStorage.setItem("title", `${arrayGifosTitulos[2]}`)
        });
       

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


    gifo1.addEventListener("click", () => {
        localStorage.removeItem("nameImg")
        localStorage.setItem("nameImg", `${arrayGifosName[posicionActual]}`)

        localStorage.removeItem("title")
        localStorage.setItem("title", `${arrayGifosTitulos[posicionActual]}`)
    });
   
    gifo2.addEventListener("click", () => {
        localStorage.removeItem("nameImg")
        localStorage.setItem("nameImg", `${arrayGifosName[posicionActual + 1]}`)

        localStorage.removeItem("title")
        localStorage.setItem("title", `${arrayGifosTitulos[posicionActual + 1]}`)
    });
   
    gifo3.addEventListener("click", () => {
        localStorage.removeItem("nameImg")
        localStorage.setItem("nameImg", `${arrayGifosName[posicionActual + 2]}`)

        localStorage.removeItem("title")
        localStorage.setItem("title", `${arrayGifosTitulos[posicionActual + 2]}`)
    });


}

