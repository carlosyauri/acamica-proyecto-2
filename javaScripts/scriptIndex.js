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


    if ( textoIngresado.length == " "){
        lupita.src = "assets/icon-search.svg"
        return;
    }

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
    arrayTitle.forEach(element => {

        if(element.toLowerCase().includes(textoIngresado.toLowerCase())){
            
            let elementoLista = document.createElement("div")
            div.appendChild(elementoLista)
            elementoLista.innerHTML = `${element}`

            elementoLista.addEventListener("click", () => {

                input.value = elementoLista.innerText;
                lupita.src = "assets/icon-search.svg"

                buscador();

            })
        }
    })

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
    
    if (cerrarLupa.src = "assets/close.svg") {
        cerrarLista("#divBorrar")
        cerrarLupa.src = "assets/icon-search.svg"
        input.value = " ";
    }

})


// BUSCAR CON ENTER keycod = 13

input.addEventListener("keypress", (event) => {

    event.keyCode
    if (event.keyCode == 13){
        buscador ()
    }

})

function buscador (){
    
        cerrarLista("#idMas")
        cerrarLista("#resultados-img");

        let resultados = document.getElementById("resultados");
        let h1 = document.getElementById("h1")
        h1.innerHTML = input.value;

        for ( let i = 0; i < arrayGifs.length ; i++){
            let img = document.createElement("img")
            img.src = arrayGifs[i];
            img.alt = "img"
            img.id = "resultados-img"
            resultados.appendChild(img)
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
        // return false;    

}