
let arrayFav = localStorage.getItem("arrayFav")
arrayFav = JSON.parse(arrayFav)

let arrayFavNom = localStorage.getItem("arrayFavNom")
arrayFavNom = JSON.parse(arrayFavNom)

let arrayFavTittle = localStorage.getItem("arrayFavTittle")
arrayFavTittle = JSON.parse(arrayFavTittle)




if ( `${arrayFav}` == "null") {

    let divImg = document.getElementById("sinFav");
    let img = document.createElement("img");
    img.id = "sinResultado"
    img.src = "/assets/icon-busqueda-sin-resultado.svg";
    divImg.appendChild(img);

    let p = document.createElement("p")
    p.innerHTML = "¡Guarda tu primer GIFO en Favoritos para que se muestre aquí!";
    divImg.appendChild(p)

}else {


    if (arrayFav.length < 13){

        for ( let i = 0 ; i < arrayFav.length ; i++){

            let divImg = document.getElementById("resultados");
            let img = document.createElement("img");
            img.src = arrayFav[i];

            // //////////////////////////////////////////////////////////////
            // //////////////// H O V E R ///////////////////////////////////
            
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

            img1.src = "./assets/icon-fav.svg"
            img2.src = "./assets/icon-download.svg"
            img3.src = "./assets/icon-max-normal.svg"

            divHouver.appendChild(img3)
            divHouver.appendChild(img2)
            divHouver.appendChild(img1)
            
            divResultados.appendChild(img)
            divResultados.appendChild(divHouver)
            divImg.appendChild(divResultados)

            ////////////////////// EVENTO FAVORITOS //////////////////////////////

            if (img1.src === "./assets/icon-fav.svg"){
        
                img1.addEventListener("mouseover", () => {
                    img1.src = "./assets/icon-fav-hover.svg"
                });
    
                img1.addEventListener("mouseleave", () => {
                    img1.src = "./assets/icon-fav.svg"
                });

            }


            // img1.addEventListener("click", () => {

            //     if(localStorage.getItem("arrayFav")){
                    
            //         let arrayFav = localStorage.getItem("arrayFav")
            //         arrayFav = JSON.parse(arrayFav)
            
            //         arrayFav.push(arrayGifs[i])
            //         localStorage.setItem("arrayFav", JSON.stringify(arrayFav));
            //         img1.src = "./assets/icon-fav-active.svg"
            
            //     }else{
            
            //         let arrayFav = []
            //         arrayFav.push(arrayGifs[i])
            //         localStorage.setItem("arrayFav", JSON.stringify(arrayFav));
            //         img1.src = "./assets/icon-fav-active.svg"
            //     }

            // })



            ///////////////////////   EVENTO DESCARGA   //////////////////////////

            img2.addEventListener("mouseover", () => {
                img2.src = "./assets/icon-download-hover.svg"
            });

            img2.addEventListener("mouseout", () => {
                img2.src = "./assets/icon-download.svg"
            });

            img2.addEventListener("click", (e) => {

                descargaGif(arrayFav[i])

            })

            ///////////////////////   EVENTO EXPANDIR   //////////////////////////

            img3.addEventListener("mouseover", (e) => {
                img3.src = "./assets/icon-max-hover.svg"

                localStorage.setItem("img", `${arrayFav[i]}`)
                localStorage.setItem("nameImg", `${arrayFavNom[i]}`)
                localStorage.setItem("title", `${arrayFavTittle[i]}`)
                

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


            
            // ////////////////////////////F I N  H O V E R//////////////////////////
            // /////////////////////////////////////////////////////////////////////
            

        }
    }
    
    
    let btnCont = 0;
    let btnCorte = 0;
    
    if (arrayFav.length > 12){
    
        let verMas = document.getElementById("verMas");
        let divMas = document.createElement("div");
        divMas.id = "idMas";
        let imgVerMas = document.createElement("img");
        imgVerMas.src = "assets/CTA-ver-mas.svg";            
        divMas.appendChild(imgVerMas);
        verMas.appendChild(divMas);
    
    
        for (let i = btnCont; i < 12; i++){

            let divImg = document.getElementById("resultados");
            let img = document.createElement("img");
            img.src = arrayFav[i];

            // //////////////////////////////////////////////////////////////
            // //////////////// H O V E R ///////////////////////////////////
            
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

            img1.src = "./assets/icon-fav.svg"
            img2.src = "./assets/icon-download.svg"
            img3.src = "./assets/icon-max-normal.svg"

            divHouver.appendChild(img3)
            divHouver.appendChild(img2)
            divHouver.appendChild(img1)
            
            divResultados.appendChild(img)
            divResultados.appendChild(divHouver)
            divImg.appendChild(divResultados)

            ////////////////////// EVENTO FAVORITOS //////////////////////////////

            if (img1.src === "./assets/icon-fav.svg"){
        
                img1.addEventListener("mouseover", () => {
                    img1.src = "./assets/icon-fav-hover.svg"
                });
    
                img1.addEventListener("mouseleave", () => {
                    img1.src = "./assets/icon-fav.svg"
                });

            }


            // img1.addEventListener("click", () => {

            //     if(localStorage.getItem("arrayFav")){
                    
            //         let arrayFav = localStorage.getItem("arrayFav")
            //         arrayFav = JSON.parse(arrayFav)
            
            //         arrayFav.push(arrayGifs[i])
            //         localStorage.setItem("arrayFav", JSON.stringify(arrayFav));
            //         img1.src = "./assets/icon-fav-active.svg"
            
            //     }else{
            
            //         let arrayFav = []
            //         arrayFav.push(arrayGifs[i])
            //         localStorage.setItem("arrayFav", JSON.stringify(arrayFav));
            //         img1.src = "./assets/icon-fav-active.svg"
            //     }

            // })



            ///////////////////////   EVENTO DESCARGA   //////////////////////////

            img2.addEventListener("mouseover", () => {
                img2.src = "./assets/icon-download-hover.svg"
            });

            img2.addEventListener("mouseout", () => {
                img2.src = "./assets/icon-download.svg"
            });

            img2.addEventListener("click", (e) => {

                descargaGif(arrayFav[i])

            })

            ///////////////////////   EVENTO EXPANDIR   //////////////////////////

            img3.addEventListener("mouseover", (e) => {
                img3.src = "./assets/icon-max-hover.svg"

                localStorage.setItem("img", `${arrayFav[i]}`)
                localStorage.setItem("nameImg", `${arrayFavNom[i]}`)
                localStorage.setItem("title", `${arrayFavTittle[i]}`)
                

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


            
            // ////////////////////////////F I N  H O V E R//////////////////////////
            // /////////////////////////////////////////////////////////////////////
        }
    
    
        divMas.addEventListener("click", () => {
            btnCont += 12;
            btnCorte += (btnCont + 12)
    
            for(let i = btnCont; i < btnCorte; i++){
    
                if( i >= arrayFav.length) {
    
                    verMas.removeChild(divMas)
    
                }else{
                    let divImg = document.getElementById("resultados");
                    let img = document.createElement("img");
                    img.src = arrayFav[i];

                    // //////////////////////////////////////////////////////////////
                    // //////////////// H O V E R ///////////////////////////////////
                    
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

                    img1.src = "./assets/icon-fav.svg"
                    img2.src = "./assets/icon-download.svg"
                    img3.src = "./assets/icon-max-normal.svg"

                    divHouver.appendChild(img3)
                    divHouver.appendChild(img2)
                    divHouver.appendChild(img1)
                    
                    divResultados.appendChild(img)
                    divResultados.appendChild(divHouver)
                    divImg.appendChild(divResultados)

                    ////////////////////// EVENTO FAVORITOS //////////////////////////////

                    if (img1.src === "./assets/icon-fav.svg"){
                
                        img1.addEventListener("mouseover", () => {
                            img1.src = "./assets/icon-fav-hover.svg"
                        });
            
                        img1.addEventListener("mouseleave", () => {
                            img1.src = "./assets/icon-fav.svg"
                        });

                    }


                    // img1.addEventListener("click", () => {

                    //     if(localStorage.getItem("arrayFav")){
                            
                    //         let arrayFav = localStorage.getItem("arrayFav")
                    //         arrayFav = JSON.parse(arrayFav)
                    
                    //         arrayFav.push(arrayGifs[i])
                    //         localStorage.setItem("arrayFav", JSON.stringify(arrayFav));
                    //         img1.src = "./assets/icon-fav-active.svg"
                    
                    //     }else{
                    
                    //         let arrayFav = []
                    //         arrayFav.push(arrayGifs[i])
                    //         localStorage.setItem("arrayFav", JSON.stringify(arrayFav));
                    //         img1.src = "./assets/icon-fav-active.svg"
                    //     }

                    // })



                    ///////////////////////   EVENTO DESCARGA   //////////////////////////

                    img2.addEventListener("mouseover", () => {
                        img2.src = "./assets/icon-download-hover.svg"
                    });

                    img2.addEventListener("mouseout", () => {
                        img2.src = "./assets/icon-download.svg"
                    });

                    img2.addEventListener("click", (e) => {

                        descargaGif(arrayFav[i])

                    })

                    ///////////////////////   EVENTO EXPANDIR   //////////////////////////

                    img3.addEventListener("mouseover", (e) => {
                        img3.src = "./assets/icon-max-hover.svg"

                        localStorage.setItem("img", `${arrayFav[i]}`)
                        localStorage.setItem("nameImg", `${arrayFavNom[i]}`)
                        localStorage.setItem("title", `${arrayFavTittle[i]}`)
                        

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


                    
                    // ////////////////////////////F I N  H O V E R//////////////////////////
                    // /////////////////////////////////////////////////////////////////////


                }
            }
        })
    
    }
}

// function hover (){

//             let resultados = document.getElementById("resultados")
//             let divHouver = document.createElement("div")
//             divHouver.id = "divHouver"


//             let img1 = document.createElement("img")
//             let img2 = document.createElement("img")
//             let img3 = document.createElement("img")

//             img1.id = "idImgHouver1"
//             img2.id = "idImgHouver2"
//             img3.id = "idImgHouver3"

//             img1.src = "./assets/icon-fav.svg"
//             img2.src = "./assets/icon-download.svg"
//             img3.src = "./assets/icon-max-normal.svg"

//             divHouver.appendChild(img3)
//             divHouver.appendChild(img2)
//             divHouver.appendChild(img1)
            
//             divResultados.appendChild(img)
//             divResultados.appendChild(divHouver)
//             resultados.appendChild(divResultados)

//             //////////////////////////////////////////////////////////////////////
//             ////////////////////// EVENTO FAVORITOS //////////////////////////////

//             if (img1.src === "./assets/icon-fav.svg"){
        
//                 img1.addEventListener("mouseover", () => {
//                     img1.src = "./assets/icon-fav-hover.svg"
//                 });
    
//                 img1.addEventListener("mouseleave", () => {
//                     img1.src = "./assets/icon-fav.svg"
//                 });

//             }


//             // img1.addEventListener("click", () => {

//             //     if(localStorage.getItem("arrayFav")){
                    
//             //         let arrayFav = localStorage.getItem("arrayFav")
//             //         arrayFav = JSON.parse(arrayFav)
            
//             //         arrayFav.push(arrayGifs[i])
//             //         localStorage.setItem("arrayFav", JSON.stringify(arrayFav));
//             //         img1.src = "./assets/icon-fav-active.svg"
            
//             //     }else{
            
//             //         let arrayFav = []
//             //         arrayFav.push(arrayGifs[i])
//             //         localStorage.setItem("arrayFav", JSON.stringify(arrayFav));
//             //         img1.src = "./assets/icon-fav-active.svg"
//             //     }

//             // })




           

//             //////////////////////////////////////////////////////////////////////
//             ///////////////////////   EVENTO DESCARGA   //////////////////////////

//             img2.addEventListener("mouseover", () => {
//                 img2.src = "./assets/icon-download-hover.svg"
//             });

//             img2.addEventListener("mouseout", () => {
//                 img2.src = "./assets/icon-download.svg"
//             });

//             img2.addEventListener("click", (e) => {

//                 descargaGif(arrayFav[i])

//             })

//             //////////////////////////////////////////////////////////////////////
//             ///////////////////////   EVENTO EXPANDIR   //////////////////////////

//             img3.addEventListener("mouseover", (e) => {
//                 img3.src = "./assets/icon-max-hover.svg"

//                 localStorage.setItem("img", `${arrayFav[i]}`)
//                 localStorage.setItem("nameImg", `${arrayFavNom[i]}`)
//                 localStorage.setItem("title", `${arrayFavTittle[i]}`)
                

//                 let a = document.createElement("a")
//                 a.appendChild(img3)
//                 divHouver.appendChild(a)
//                 divHouver.appendChild(img2)
//                 divHouver.appendChild(img1)
//                 a.href = "expandir.html"

//             });

//             img3.addEventListener("mouseout", () => {
//                 img3.src = "./assets/icon-max-normal.svg"
//             });

//             img3.addEventListener("click", () => {

//                 a.href = "expandir.html"

//             })

//             //////////////////////////////////////////////////////////////////////
// }

async function descargaGif(url) {

    let a = document.createElement('a');
    let response = await fetch(url);
    let file = await response.blob();
    a.download = 'myGif-proyecto';
    a.href = window.URL.createObjectURL(file);
    a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
    a.click();
    
}