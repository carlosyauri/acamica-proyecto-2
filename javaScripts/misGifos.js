let divImg = document.getElementById("sinFav");
let img = document.createElement("img");
img.id = "sinResultado"
img.src = "/assets/icon-mis-gifos-sin-contenido.svg";
divImg.appendChild(img);

let p = document.createElement("p")
p.innerHTML = "¡Anímate a crear tu primer GIFO!";
divImg.appendChild(p)



let idLocalStorage = localStorage.getItem("idGifos")


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

let arrayMisGifos;

async function main() {

    arrayMisGifos=[];

    try {
    
        let resultado = await misGifos(idLocalStorage);
        console.log(resultado)

    
            arrayMisGifos.push(resultado.data[0].embed_url)
            console.log(arrayMisGifos)
    
        
    }
    catch (error) {
        console.log("entro por catch", error)
    }
}


main()



// if (arrayMisGifos.length < 13){
//     arrayMisGifos.forEach(element => {
//         let resultados = document.getElementById("resultados");
//         let img = document.createElement("img")
//     });
// }



