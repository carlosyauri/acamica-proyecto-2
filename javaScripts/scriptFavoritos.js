
let arrayFav = localStorage.getItem("arrayFav")
arrayFav = JSON.parse(arrayFav)


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

        arrayFav.forEach(element => {
            let divImg = document.getElementById("resultados");
            let img = document.createElement("img");
            img.src = element;
            divImg.appendChild(img);
        })
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
            divImg.appendChild(img);   
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
                    divImg.appendChild(img);
                }
            }
        })
    
    }
}