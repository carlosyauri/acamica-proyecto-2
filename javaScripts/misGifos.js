
if (localStorage.getItem("arrayId")){

    var arrayId = localStorage.getItem("arrayId")
    arrayId = JSON.parse(arrayId)

}else{
    var arrayId = []
}


if (arrayId == "null" || arrayId.length == 0){

    let divImg = document.getElementById("sinFav");
    let img = document.createElement("img");
    img.id = "sinResultado"
    img.src = "./assets/icon-mis-gifos-sin-contenido.svg";
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
        let gifById = `https://api.giphy.com/v1/gifs?api_key=8YMF2nldhRgghMtWCUlXoxfY0hlGDFPL&ids=${ids}`
    
        let response = await fetch(gifById);
        return response.json()
          
    }
        catch (error) {
        console.log("entro por error", error)
        }

}  

var arrayObtenidos = [];
var arrayObtenidosTitles = [];
var arrayObtenidosNames = [];




// ARREGLAR CUANDO HAY MAS DE 12 ID. NO ME MUESTRA PORQ TENGO 
// VARIOS AWAYT Y SOLO ASYNC EN LA FUNCION PPAL!

function main() {

    if (arrayId.length < 13){ 

        parteUno();

            img3.addEventListener("mouseout", () => {
                img3.src = "./assets/icon-max-normal.svg"
            });

            img3.addEventListener("click", () => {

                a.href = "expandir.html"

            })

            //////////////////////////////F I N  H O V E R//////////////////////////
            ///////////////////////////////////////////////////////////////////////

        }
    
    
    if(arrayId.length > 12){

        let verMas = document.getElementById("verMas");
        let divMas = document.createElement("div");
        divMas.id = "idMas";
        let imgVerMas = document.createElement("img");
        imgVerMas.src = "./assets/CTA-ver-mas.svg";            
        divMas.appendChild(imgVerMas);
        verMas.appendChild(divMas);

        parteDos();

        divMas.addEventListener("click", () => {

            //// NO ENTRA POR CICLO FOR DE LA FUNCION PARTETRES() - VER
            parteTres();
            
        })   
        
    }

  /////////////////////////////  FIN FUNCION MAIN ()  //////////////////////////////////////////////
}

function cerrarLista(x) {

    let elementos = document.querySelectorAll(x)
    elementos.forEach(element => {
        element.parentNode.removeChild(element); 
    })
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




let btnCrear = document.getElementById("btn-gifos");


if (localStorage.getItem("nocturno-mode") == "true") {

    logoNoc.src = "./assets/logo-mobile-modo-noct.svg"
    btnCrear.src = "./assets/CTA-crar-gifo-modo-noc.svg"
    flechaD.src = "./assets/button-slider-right-md-noct.svg"
    flechaI.src = "./assets/button-slider-left-md-noct.svg"
    nocturno.innerHTML = "Modo Diurno"    
    // modo nocturno activado
}else {
    logoNoc.src = "./assets/logo-mobile.svg"
    btnCrear.src = "./assets/button-crear-gifo.svg"
    flechaD.src = "./assets/button-slider-right.svg"
    flechaI.src = "./assets/button-slider-left.svg"
    nocturno.innerHTML = "Modo Nocturno" 
   // modo diruno activado
}


if(localStorage.getItem("nocturno-mode") == "true") {
    document.body.classList.add("bodyNocturno");
    logoNoc.src = "./assets/logo-mobile-modo-noct.svg"
    btnCrear.src = "./assets/CTA-crar-gifo-modo-noc.svg"
    flechaD.src = "./assets/button-slider-right-md-noct.svg"
    flechaI.src = "./assets/button-slider-left-md-noct.svg"
    nocturno.innerHTML = "Modo Diurno"  
   
 
} else {
    document.body.classList.remove("bodyNocturno");
    logoNoc.src = "./assets/logo-mobile.svg"
    btnCrear.src = "./assets/button-crear-gifo.svg"
    flechaD.src = "./assets/button-slider-right.svg"
    flechaI.src = "./assets/button-slider-left.svg"
    nocturno.innerHTML = "Modo Nocturno";
}





async function parteUno (){
    for ( let i = 0; i < arrayId.length ; i++){


        let espera = await misGifos(arrayId[i])
        arrayObtenidos.push(espera.data[0].images.downsized.url)
        arrayObtenidosTitles.push(espera.data[0].title)
        arrayObtenidosNames.push(espera.data[0].username)

        let resultado = document.getElementById("resultados")
        let imgPush = document.createElement("img")

        imgPush.src = arrayObtenidos[i]
        

        ////////////////////////////////////////////////////////////////
        ////////////////// H O V E R ///////////////////////////////////
        
        let divResultados = document.createElement("div")
        divResultados.id = "divResultados"

        let divHouver = document.createElement("div")
        divHouver.id = "divHouver"


        let img1 = document.createElement("img")
        let img2 = document.createElement("img")
        let img3 = document.createElement("img")

        img1.id = "idImgHouver1"
        img2.id = "idImgHouver2"
        img3.id = "idImgHouver3"

        img1.src = "./assets/icon-trash-normal.svg"
        img2.src = "./assets/icon-download.svg"
        img3.src = "./assets/icon-max-normal.svg"

        divHouver.appendChild(img3)
        divHouver.appendChild(img2)
        divHouver.appendChild(img1)
        
        divResultados.appendChild(imgPush)
        divResultados.appendChild(divHouver)
        resultado.appendChild(divResultados)

        ////////////////////// EVENTO ELIMINAR FAVORITOS //////////////////////////////

        img1.addEventListener("mouseover", ()=> {
            img1.src = "./assets/icon-trash-hover.svg"
            let a = document.createElement("a")
            a.appendChild(img1)

            divHouver.appendChild(img3)
            divHouver.appendChild(img2)
            divHouver.appendChild(a)

            a.href = "misGifos.html"
        })
        img1.addEventListener("mouseout", ()=> {
            img1.src = "./assets/icon-trash-normal.svg"
        })

        img1.addEventListener("click", () => {

            arrayId.splice(i,1)
            localStorage.setItem("arrayId", JSON.stringify(arrayId));
            
            a.href = "misGifos.html"
        })
        
       
        ///////////////////////   EVENTO DESCARGA   //////////////////////////

        img2.addEventListener("mouseover", () => {
            img2.src = "./assets/icon-download-hover.svg"
        });

        img2.addEventListener("mouseout", () => {
            img2.src = "./assets/icon-download.svg"
        });

        img2.addEventListener("click", (e) => {

            descargaGif(arrayObtenidos[i])

        })

        ///////////////////////   EVENTO EXPANDIR   //////////////////////////

        img3.addEventListener("mouseover", () => {

            img3.src = "./assets/icon-max-hover.svg"

            localStorage.setItem("img", `${arrayObtenidos[i]}`)
            localStorage.setItem("fav", `${arrayObtenidos[i]}`)
            localStorage.setItem("nameImg", `${arrayObtenidosNames[i]}`)
            localStorage.setItem("title", `${arrayObtenidosTitles[i]}`)
            

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

        //////////////////////////////F I N  H O V E R//////////////////////////
        ///////////////////////////////////////////////////////////////////////

    }
}

var btnCont = 0;
var btnCorte;

async function parteDos (){


    for(let i = 0 ; i < 12; i++){
        let espera = await misGifos(arrayId[i])
        arrayObtenidos.push(espera.data[0].images.downsized.url)
        arrayObtenidosTitles.push(espera.data[0].title)
        arrayObtenidosNames.push(espera.data[0].username)

        let resultado = document.getElementById("resultados")
        let imgPush = document.createElement("img")

        imgPush.src = arrayObtenidos[i]

        ////////////////////////////////////////////////////////////////
        ////////////////// H O V E R ///////////////////////////////////
        
        let divResultados = document.createElement("div")
        divResultados.id = "divResultados"

        let divHouver = document.createElement("div")
        divHouver.id = "divHouver"


        let img1 = document.createElement("img")
        let img2 = document.createElement("img")
        let img3 = document.createElement("img")

        img1.id = "idImgHouver1"
        img2.id = "idImgHouver2"
        img3.id = "idImgHouver3"

        img1.src = "./assets/icon-trash-normal.svg"
        img2.src = "./assets/icon-download.svg"
        img3.src = "./assets/icon-max-normal.svg"

        divHouver.appendChild(img3)
        divHouver.appendChild(img2)
        divHouver.appendChild(img1)
        
        divResultados.appendChild(imgPush)
        divResultados.appendChild(divHouver)
        resultado.appendChild(divResultados)

        ////////////////////// EVENTO ELIMINAR FAVORITOS //////////////////////////////

        img1.addEventListener("mouseover", ()=> {
            img1.src = "./assets/icon-trash-hover.svg"
            let a = document.createElement("a")
            a.appendChild(img1)

            divHouver.appendChild(img3)
            divHouver.appendChild(img2)
            divHouver.appendChild(a)

            a.href = "misGifos.html"
        })
        img1.addEventListener("mouseout", ()=> {
            img1.src = "./assets/icon-trash-normal.svg"
        })

        img1.addEventListener("click", () => {

            arrayId.splice(i,1)
            localStorage.setItem("arrayId", JSON.stringify(arrayId));
            
            a.href = "misGifos.html"
        })
        
        
        ///////////////////////   EVENTO DESCARGA   //////////////////////////

        img2.addEventListener("mouseover", () => {
            img2.src = "./assets/icon-download-hover.svg"
        });

        img2.addEventListener("mouseout", () => {
            img2.src = "./assets/icon-download.svg"
        });

        img2.addEventListener("click", (e) => {

            descargaGif(arrayObtenidos[i])

        })

        ///////////////////////   EVENTO EXPANDIR   //////////////////////////

        img3.addEventListener("mouseover", () => {

            img3.src = "./assets/icon-max-hover.svg"

            localStorage.setItem("img", `${arrayObtenidos[i]}`)
            localStorage.setItem("fav", `${arrayObtenidos[i]}`)
            localStorage.setItem("nameImg", `${arrayObtenidosNames[i]}`)
            localStorage.setItem("title", `${arrayObtenidosTitles[i]}`)
            

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

        //////////////////////////////F I N  H O V E R//////////////////////////
        ///////////////////////////////////////////////////////////////////////
    }    
}


async function parteTres(){

    btnCont += 12;
    btnCorte += (btnCont + 12)

    for ( let i = btnCont; i < btnCorte ; i ++){

        if( i >= arrayId.length) {

            cerrarLista("#idMas");

        }else{
            let espera = await misGifos(arrayId[i])
            arrayObtenidos.push(espera.data[0].images.downsized.url)
            arrayObtenidosTitles.push(espera.data[0].title)
            arrayObtenidosNames.push(espera.data[0].username)

            let resultado = document.getElementById("resultados")
            let imgPush = document.createElement("img")

            imgPush.src = arrayObtenidos[i]


            ////////////////////////////////////////////////////////////////
            ////////////////// H O V E R ///////////////////////////////////
            
            let divResultados = document.createElement("div")
            divResultados.id = "divResultados"

            let divHouver = document.createElement("div")
            divHouver.id = "divHouver"


            let img1 = document.createElement("img")
            let img2 = document.createElement("img")
            let img3 = document.createElement("img")

            img1.id = "idImgHouver1"
            img2.id = "idImgHouver2"
            img3.id = "idImgHouver3"

            img1.src = "./assets/icon-trash-normal.svg"
            img2.src = "./assets/icon-download.svg"
            img3.src = "./assets/icon-max-normal.svg"

            divHouver.appendChild(img3)
            divHouver.appendChild(img2)
            divHouver.appendChild(img1)
            
            divResultados.appendChild(imgPush)
            divResultados.appendChild(divHouver)
            resultado.appendChild(divResultados)

            ////////////////////// EVENTO ELIMINAR FAVORITOS //////////////////////////////

            img1.addEventListener("mouseover", ()=> {
                img1.src = "./assets/icon-trash-hover.svg"
                let a = document.createElement("a")
                a.appendChild(img1)

                divHouver.appendChild(img3)
                divHouver.appendChild(img2)
                divHouver.appendChild(a)

                a.href = "misGifos.html"
            })
            img1.addEventListener("mouseout", ()=> {
                img1.src = "./assets/icon-trash-normal.svg"
            })

            img1.addEventListener("click", () => {

                arrayId.splice(i,1)
                localStorage.setItem("arrayId", JSON.stringify(arrayId));
                
                a.href = "misGifos.html"
            })
            

            ///////////////////////   EVENTO DESCARGA   //////////////////////////

            img2.addEventListener("mouseover", () => {
                img2.src = "./assets/icon-download-hover.svg"
            });

            img2.addEventListener("mouseout", () => {
                img2.src = "./assets/icon-download.svg"
            });

            img2.addEventListener("click", (e) => {

                descargaGif(arrayObtenidos[i])

            })

            ///////////////////////   EVENTO EXPANDIR   //////////////////////////

            img3.addEventListener("mouseover", () => {

                img3.src = "./assets/icon-max-hover.svg"

                localStorage.setItem("img", `${arrayObtenidos[i]}`)
                localStorage.setItem("fav", `${arrayObtenidos[i]}`)
                localStorage.setItem("nameImg", `${arrayObtenidosNames[i]}`)
                localStorage.setItem("title", `${arrayObtenidosTitles[i]}`)
                

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

            //////////////////////////////F I N  H O V E R//////////////////////////
            ///////////////////////////////////////////////////////////////////////

        }
    }
    
}