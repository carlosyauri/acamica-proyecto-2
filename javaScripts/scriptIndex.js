//SECCIÓN 1 - CONECTAR EL INPUT CON LA API

//Evento que trae las sugerencias de títulos de gifos 

let arrayTitle ;
let arrayGifs ;
let arrayGifosNames ;
let arrayVerMas ; 
let num = 0;
let arrayCompletado ;
let textoIngresado;

let input = document.getElementById("input")
input.addEventListener("input", async (e) => {
    
    cerrarLista("#divBorrar");

    textoIngresado = e.target.value
    
    let lupita = document.getElementById("icon-search")
    lupita.src = "assets/close.svg"


    if ( textoIngresado.length == ""){

        let lupaBusqueda = document.getElementById("lupaBusqueda")
        lupaBusqueda.src = ""

        let lineaSugerencia = document.getElementById("lineaSugerencia")
        lineaSugerencia.classList.remove("lineaSugerencia")

        lupita.src = "assets/icon-search.svg"
        let bordeInput = document.getElementById("bordeInput")
        bordeInput.classList.add("bordeBusqueda")
        bordeInput.classList.remove("bordeBusquedaActivo")
        return;
    }

    let lupaBusqueda = document.getElementById("lupaBusqueda")
    lupaBusqueda.src = "assets/icon-search-copia.svg"

    let lineaSugerencia = document.getElementById("lineaSugerencia")
    lineaSugerencia.classList.add("lineaSugerencia")


    //Creando div de sugerencia
    let divContainer = document.getElementById("divContainer")
    let div = document.createElement("div")
    div.setAttribute("class","div-segerencia")
    div.setAttribute("id", "divBorrar")
    divContainer.appendChild(div) 



    let arrayCompletado =  await autoCompletar(textoIngresado, num)
    arrayTitle = []
    arrayGifs = []
    arrayGifosNames = []
    arrayCompletado.data.forEach(element => {
        arrayTitle.push(element.title);
        arrayGifs.push(element.images.downsized.url);
        arrayGifosNames.push(element.username);
    })            


    
    if(arrayTitle.length == 0) return;

    bordeInput.classList.remove("bordeBusqueda")
    bordeInput.classList.add("bordeBusquedaActivo")

    for (let i = 0 ; i < 4; i++){


        if(arrayTitle[i].toLowerCase().includes(textoIngresado.toLowerCase())){
            

            let elementoLista = document.createElement("div")
            let is = document.createElement("img")
            is.src = "./assets/icon-search-copia.svg"
            is.id = "imgSug"
            elementoLista.appendChild(is)
            let spanTexto = document.createElement("span")
            spanTexto.innerHTML =  arrayTitle[i]
            elementoLista.appendChild(spanTexto)

            div.appendChild(elementoLista)

            g();

            elementoLista.addEventListener("click", () => {


                input.value = elementoLista.innerText;
                lupita.src = "assets/icon-search.svg"

                let bordeInput = document.getElementById("bordeInput")
                bordeInput.classList.add("bordeBusqueda")
                bordeInput.classList.remove("bordeBusquedaActivo")

                let lineaSugerencia = document.getElementById("lineaSugerencia")
                lineaSugerencia.classList.remove("lineaSugerencia")

                let lupaBusqueda = document.getElementById("lupaBusqueda")
                lupaBusqueda.src = ""

                buscador();

            })
        }
    }

});

async function autoCompletar (textoIngresado, num) {

    let searchGifos = `http://api.giphy.com/v1/gifs/search?api_key=DwxPXTIv1WcfUVgrKe2czLBIw3NDagaf&q=${textoIngresado}&limit=12&offset=${num}`; 
    let autocompletado = await fetch(searchGifos);
    return autocompletado.json()

}


//funcion que elimina las sugerencias 
function cerrarLista(x) {

    let elementos = document.querySelectorAll(x)
    elementos.forEach(element => {
        element.parentNode.removeChild(element); 
    })
}

let cerrarLupa = document.getElementById("icon-search");
cerrarLupa.addEventListener("click", () => {

    
    let lupaBusqueda = document.getElementById("lupaBusqueda")
    lupaBusqueda.src = ""

    let lineaSugerencia = document.getElementById("lineaSugerencia")
    lineaSugerencia.classList.remove("lineaSugerencia")

    bordeInput.classList.add("bordeBusqueda")
    bordeInput.classList.remove("bordeBusquedaActivo")

    input.value = ""

    
    if (cerrarLupa.src = "assets/close.svg") {
        cerrarLista("#divBorrar")
        cerrarLupa.src = "assets/icon-search.svg"
    }

})


// BUSCAR CON ENTER keycod = 13

input.addEventListener("keypress", (event) => {

    let lupaBusqueda = document.getElementById("lupaBusqueda")
    lupaBusqueda.src = ""

    let lineaSugerencia = document.getElementById("lineaSugerencia")
    lineaSugerencia.classList.remove("lineaSugerencia")

    bordeInput.classList.add("bordeBusqueda")
    bordeInput.classList.remove("bordeBusquedaActivo")

    event.keyCode
    if (event.keyCode == 13){
        buscador ()
    }

})


function g (){
    input.addEventListener("keypress", (e) => {
        e.keyCode
        if (e.keyCode == 46){

            let lupaBusqueda = document.getElementById("lupaBusqueda")
            lupaBusqueda.src = ""

            let lineaSugerencia = document.getElementById("lineaSugerencia")
            lineaSugerencia.classList.remove("lineaSugerencia")

            bordeInput.classList.add("bordeBusqueda")
            bordeInput.classList.remove("bordeBusquedaActivo")
        }
    })
}


function buscador (){
    
        cerrarLista("#idMas")
        cerrarLista("#divResultados");

        let resultados = document.getElementById("resultados");
        let h2 = document.getElementById("h1")
        h2.innerHTML = input.value;

        for ( let i = 0; i < arrayGifs.length ; i++){

            let divResultados = document.createElement("div")
            divResultados.id = "divResultados"
            let img = document.createElement("img")
            img.src = arrayGifs[i];
            img.alt = "img"
            img.id = "resultados-img"

            let divHouver = document.createElement("div")
            divHouver.id = "divHouver"


            let img1 = document.createElement("img")
            let img2 = document.createElement("img")
            let img3 = document.createElement("img")

            img1.id = "idImgHouver1"
            img2.id = "idImgHouver2"
            img3.id = "idImgHouver3"

            img1.src = "./assets/icon-fav.svg"
            img2.src = "./assets/icon-download.svg"
            img3.src = "./assets/icon-max-normal.svg"

            divHouver.appendChild(img3)
            divHouver.appendChild(img2)
            divHouver.appendChild(img1)
            
            divResultados.appendChild(img)
            divResultados.appendChild(divHouver)
            resultados.appendChild(divResultados)


            ////////////////////// EVENTO FAVORITOS //////////////////////////////

            if (img1.src === "./assets/icon-fav.svg"){
        
                img1.addEventListener("mouseover", () => {
                    img1.src = "./assets/icon-fav-hover.svg"
                });
    
                img1.addEventListener("mouseleave", () => {
                    img1.src = "./assets/icon-fav.svg"
                });

            }


            img1.addEventListener("click", () => {

                if(localStorage.getItem("arrayFav")){
                    
                    let arrayFav = localStorage.getItem("arrayFav")
                    arrayFav = JSON.parse(arrayFav)
            
                    arrayFav.push(arrayGifs[i])
                    localStorage.setItem("arrayFav", JSON.stringify(arrayFav));
                    img1.src = "./assets/icon-fav-active.svg"
            
                }else{
            
                    let arrayFav = []
                    arrayFav.push(arrayGifs[i])
                    localStorage.setItem("arrayFav", JSON.stringify(arrayFav));
                    img1.src = "./assets/icon-fav-active.svg"
                }

            })




           

            //////////////////////////////////////////////////////////////////////
            ///////////////////////   EVENTO DESCARGA   //////////////////////////

            img2.addEventListener("mouseover", () => {
                img2.src = "./assets/icon-download-hover.svg"
            });

            img2.addEventListener("mouseout", () => {
                img2.src = "./assets/icon-download.svg"
            });

            img2.addEventListener("click", (e) => {

                descargaGif(arrayGifs[i])

            })

            //////////////////////////////////////////////////////////////////////
            ///////////////////////   EVENTO EXPANDIR   //////////////////////////

            img3.addEventListener("mouseover", (e) => {
                img3.src = "./assets/icon-max-hover.svg"

                localStorage.setItem("img", `${arrayGifs[i]}`)
                localStorage.setItem("nameImg", `${arrayGifosNames[i]}`)
                localStorage.setItem("title", `${arrayTitle[i]}`)
                

                let a = document.createElement("a")
                a.appendChild(img3)
                divHouver.appendChild(a)
                divHouver.appendChild(img2)
                divHouver.appendChild(img1)
                a.href = "expandir.html"

            });

            img3.addEventListener("mouseout", () => {
                img3.src = "./assets/icon-max-normal.svg"
            });

            img3.addEventListener("click", () => {

                a.href = "expandir.html"

            })

            //////////////////////////////////////////////////////////////////////
            

        }


        // BOTON VER MAS

        let verMas = document.getElementById("verMas");
        let divMas = document.createElement("div");
        divMas.id = "idMas";
        let imgVerMas = document.createElement("img");
        imgVerMas.src = "assets/CTA-ver-mas.svg";            
        divMas.appendChild(imgVerMas);
        verMas.appendChild(divMas);
    
        
        imgVerMas.addEventListener("click", async() => {

            num += 12 ;
            arrayVerMas = []
            arrayCompletado = await autoCompletar(textoIngresado, num)
            arrayCompletado.data.forEach(element => {
                arrayVerMas.push(element.images.downsized.url)
            });

            for ( let i = 0; i < arrayVerMas.length ; i++){
                let img = document.createElement("img")
                img.src = arrayVerMas[i];
                img.alt = "img"
                img.id = "resultados-img"
                resultados.appendChild(img)
            }

        })

        cerrarLista("#divBorrar");
        
}

async function descargaGif(url) {

    let a = document.createElement('a');
    let response = await fetch(url);
    let file = await response.blob();
    a.download = 'myGif-proyecto';
    a.href = window.URL.createObjectURL(file);
    a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
    a.click();
    
}