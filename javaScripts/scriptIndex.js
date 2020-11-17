//SECCIÓN 1 - CONECTAR EL INPUT CON LA API

//Evento que trae las sugerencias de títulos de gifos 
let input = document.getElementById("input")

input.addEventListener("input", (e) => {

    cerrarDivs();

    let textoIngresado = e.target.value
    

    if ( textoIngresado == " "){
        return;
    }

    async function autoCompletar () {

        let searchGifos = `http://api.giphy.com/v1/gifs/search?api_key=DwxPXTIv1WcfUVgrKe2czLBIw3NDagaf&q=${textoIngresado}&limit=12`; 
        let autocompletado = await fetch(searchGifos);
        return autocompletado.json()
    }

    async function prueba (){
        let arrayTitle = []
        let arrayGifs = []
            
        let arrayCompletado =  await autoCompletar()
        console.log(arrayCompletado)
        arrayCompletado.data.forEach(element => {
            arrayTitle.push(element.title);
            arrayGifs.push(element.images.downsized.url)
        })            

    //Creando div de sugerencia
    let divContainer = document.getElementById("divContainer")
    let div = document.createElement("div")
    div.setAttribute("class","div-segerencia")
    div.setAttribute("id", "divBorrar")
    divContainer.appendChild(div) 





    
    if(arrayTitle.length == 0) return;
    arrayTitle.forEach(element => {

        if(element.toLowerCase().includes(textoIngresado.toLowerCase())){
            let elementoLista = document.createElement("div")
            div.appendChild(elementoLista)
            elementoLista.innerHTML = `${element}`
            elementoLista.addEventListener("click", () => {

                input.value = elementoLista.innerText;
                
                let resultados = document.getElementById("resultados");
                let h1 = document.getElementById("h1")
                h1.innerHTML = input.value;

                for ( let i = 0; i < arrayGifs.length ; i++){
                    let img = document.createElement("img")
                    img.src = arrayGifs[i];
                    img.alt = "asd"
                    resultados.appendChild(img)
                }

                cerrarLista();
                return false;
            })
        }
    })

} 

prueba();
                        
});

//funcion que elimina las sugerencias 
function cerrarLista() {

    let elementos = document.querySelectorAll("#divContainer")
    elementos.forEach(element => {
        element.parentNode.removeChild(element); 
    })
}

function cerrarDivs() {

    let elementos = document.querySelectorAll("#divBorrar")
    elementos.forEach(element => {
        element.parentNode.removeChild(element); 
    })
}
