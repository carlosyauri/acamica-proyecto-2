//SECCIÓN 1 - CONECTAR EL INPUT CON LA API

//Evento que trae las sugerencias de títulos de gifos 

let arrayTitle ;
let arrayGifs ;
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
    arrayCompletado.data.forEach(element => {
        arrayTitle.push(element.title);
        arrayGifs.push(element.images.downsized.url)
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
        cerrarLista("#resultados-img");

        let resultados = document.getElementById("resultados");
        let h2 = document.getElementById("h1")
        h2.innerHTML = input.value;

        for ( let i = 0; i < arrayGifs.length ; i++){

            let divResultados = document.createElement("div")
            let img = document.createElement("img")
            img.src = arrayGifs[i];
            img.alt = "img"
            img.id = "resultados-img"

            let divHouver = document.createElement("div")
            divHouver.id = "divHouver"

            let img1 = document.createElement("img")
            let img2 = document.createElement("img")
            let img3 = document.createElement("img")

            img1.id = "idImgHouver"
            img2.id = "idImgHouver"
            img3.id = "idImgHouver"

            img1.src = "./assets/icon-fav.svg"
            img2.src = "./assets/icon-download.svg"
            img3.src = "./assets/icon-max-normal.svg"

            divHouver.appendChild(img3)
            divHouver.appendChild(img2)
            divHouver.appendChild(img1)
            
            divResultados.appendChild(img)
            divResultados.appendChild(divHouver)
            resultados.appendChild(divResultados)
        }


        // let dh = document.getElementById("divHouver");
        // dh.addEventListener("mouseover", () =>{
        //     let imghover = document.getElementById("idImgHouver")
        //     imghover.className = ""
        // })
        // let divHouver = document.getElementById("divHouver")
        
        // divHouver.addEventListener("mouseover", () => {
        //     divHouver.classList.add("classHouver")

        // });

        // divHouver.addEventListener("mouseout", () => {
        //     divHouver.classList.remove("classHouver")
        // });

        // function func1(){
        //     divHouver.classList.remove("classHouver")
        // }



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
        // return false;    

}

