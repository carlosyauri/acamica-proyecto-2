// let video = document.getElementById("videoGif");

// function getStreamAndRecord () { 
//         navigator.mediaDevices.getUserMedia({
//             audio: false,
//             video:{
//                 height: { max: 480 }
//             }
//         })
// .then (function(stream) {
//     video.src = stream;
//     video.play()
// })

// }

// getStreamAndRecord()

// let arrayFav = localStorage.getItem("arrayFav")
// arrayFav = JSON.parse(arrayFav)


// if ( `${arrayFav}` == "null") {

    let divImg = document.getElementById("sinFav");
    let img = document.createElement("img");
    img.id = "sinResultado"
    img.src = "/assets/icon-mis-gifos-sin-contenido.svg";
    divImg.appendChild(img);

    let p = document.createElement("p")
    p.innerHTML = "¡Anímate a crear tu primer GIFO!";
    divImg.appendChild(p)

// }else {
//     print("hola")
// }


