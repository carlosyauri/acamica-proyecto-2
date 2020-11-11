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
