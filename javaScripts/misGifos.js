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


