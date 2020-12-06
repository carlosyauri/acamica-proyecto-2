let btnStart = document.getElementById('btnInicio');
let btnStop = document.getElementById('btnStop');
let btnRecord = document.getElementById('btnRecord');
let btnUpload = document.getElementById('btnUpload');
let form;
let video = document.getElementById("video")
let comenzar = document.getElementById("comenzar")
let h1 = document.getElementById("titulo")
let p = document.getElementById("parrafo")
let imagen = document.getElementById("imagen")
let divFondo = document.getElementById("div-fondo")
let pSubiendo = document.getElementById("p-subiendo")
let imgLoader = document.getElementById("imgLoader")
let divGifos = document.getElementById("div-iconos")
let iconoDescarga = document.getElementById("icono-descarga")
let iconoLink = document.getElementById("icono-link")

let dos = document.getElementById("dos")
let tres = document.getElementById("tres")


comenzar.addEventListener("click", () => {

    h1.innerHTML = "¿Nos das acceso a tu cámara?";
    p.innerHTML = "El acceso a tu camara será válido sólo por el tiempo en el que estés creando el GIFO.";
    comenzar.classList.add("sacar-texto")
    let lineaD = document.getElementById("lineaDivide");
    lineaD.classList.add("espacio")
    
      
})

//inicio
btnStart.addEventListener('click', () => {

    let lineaD = document.getElementById("lineaDivide");
    lineaD.classList.remove("espacio")

    btnStart.src ="./assets/paso-a-paso-hover-1.svg";
    btnRecord.classList.remove("desaparecer")

    
    video.classList.add("video-activo")
    video.classList.remove("video")
    h1.classList.add("sacar-texto")
    p.classList.add("sacar-texto")
   
   

    btnStop.disabled = true;
    captureCamera((camera) => {
        //video.muted = true;
        //video.volume = 0;
        video.srcObject = camera;

        video.play();


        recorder = RecordRTC(camera, {
            type: 'gif',
            frameRate: 1,
            quality: 10,
            width: 360,
            hidden: 240,
            onGifRecordingStarted: function() {
                console.log('grabacion iniciada')
            },
        });
        recorder.camera = camera
      
    });
}); 

//grabo
    btnRecord.addEventListener('click', () => {

        btnRecord.classList.add("desaparecer")
        btnStop.classList.remove("desaparecer")
        recorder.startRecording();
        btnStop.disabled = false;

        btnStart.src = "./assets/paso-a-paso-1.svg";
        dos.src = "./assets/paso-a-paso-hover-2.svg"
    });

//finalizo
    btnStop.addEventListener('click', () => {

        video.classList.add("desaparecer")
        imagen.classList.remove("desaparecer")


        btnStop.classList.add("desaparecer")
        btnUpload.classList.remove("desaparecer")
        btnStop.disabled = true;
        recorder.stopRecording(stopRecordingCallback);
        console.log("fin de grabacion")
    })

//subir gifo
btnUpload.addEventListener('click', () => {

    divFondo.classList.add("subiendo-gifo");
    divFondo.classList.remove("fondo-gifo");
    dos.src = "./assets/paso-a-paso-2.svg"
    tres.src ="./assets/paso-a-paso-hover-3.svg"
    btnUpload.classList.add("desaparecer");

    // enviar gifo.
    fetch("https://upload.giphy.com/v1/gifs?api_key=8YMF2nldhRgghMtWCUlXoxfY0hlGDFPL",{
        method: 'POST',
        body: form
    })
        .then(res => res.json())
        .then(res => {

            if(localStorage.getItem("arrayId")) {
                let arrayId = localStorage.getItem("arrayId")
                 arrayId = JSON.parse(arrayId)
                 arrayId.push(res.data.id)
                 localStorage.setItem("arrayId", JSON.stringify(arrayId))
 
            } else {
                 let arrayId  = [];
                 arrayId.push(res.data.id)
                 localStorage.setItem("arrayId", JSON.stringify(arrayId))
            }


            console.log("fin del envio!!", res);
            pSubiendo.innerHTML = "GIFO subido con éxito"
            imgLoader.src = "./assets/ok.svg"
            divGifos.classList.remove("desaparecer")

            iconoLink.addEventListener("click", () =>{
                copiarAlPortapapeles(`${video.src}`)
                iconoLink.src = "./assets/icon-link-hover.svg"
            })


            iconoDescarga.addEventListener("click", () => {
                downloadGif(`${video.src}`)
                iconoDescarga.src = "./assets/icon-download-hover.svg"
            })

        })


        .catch(err => {
            console.log("error.!!!", err);
        })


    } )

    

function captureCamera(callback) {
    navigator.mediaDevices.getUserMedia({ 
        audio: false, 
        video: {
            height: { max: 480 }
        }
    }).then(function(camera) {
        callback(camera);
    }).catch(function(error) {
        alert('Unable to capture your camera. Please check console logs.');
        console.error(error);
    });
}

function stopRecordingCallback() {
    
   
    video.src = video.srcObject = null;
    video.muted = false;
    video.volume = 1;
    let blob = recorder.getBlob();
    video.src = URL.createObjectURL(blob);
  
    imagen.src = URL.createObjectURL(blob);
    console.log(video.src)
    
    form = new FormData();
    form.append('file', blob, 'myGif.gif');
    console.log("ESTE ES EL FILE!!!!", form.get('file'));
    
   
    recorder.camera.stop();
    recorder.destroy();
    recorder = null;
}

var recorder; // globally accessible


function copiarAlPortapapeles(url) {
    var aux = document.createElement("input");
    aux.setAttribute("value", url);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}

async function downloadGif(url) {

    let a = document.createElement('a');
    let response = await fetch(url);
    let file = await response.blob();
    a.download = 'myGif-proyecto';
    a.href = window.URL.createObjectURL(file);
    a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
    a.click();
    
}



let btnCrear = document.getElementById("btn-gifos");
let pelicula = document.getElementById("pelicula");
let camara = document.getElementById("camara");
let luzCamara = document.getElementById("luz-camara");

///////////////////// MODO DARK

let nocturno = document.getElementById("nocturno")

nocturno.addEventListener("click", () => {
    
    let dark = document.body.classList.toggle("bodyNocturno")

    if(dark) {
        localStorage.setItem("nocturno-mode", "true");
    }else {
        localStorage.setItem("nocturno-mode", "false");
    }


    if (localStorage.getItem("nocturno-mode") == "true") {

        logoNoc.src = "./assets/logo-mobile-modo-noct.svg"
        pelicula.src = "./assets/pelicula-modo-noc.svg"
        btnCrear.src = "./assets/CTA-crar-gifo-modo-noc.svg"
        camara.src = "./assets/camara-modo-noc.svg"
        btnStart.src = "./assets/uno-modo-noc.svg"
        dos.src = "./assets/dos-modo-noc.svg"
        tres.src = "./assets/tres-modo-noc.svg"
        nocturno.innerHTML = "Modo Diurno"    
        // modo nocturno activado
    }else {
        logoNoc.src = "assets/logo-mobile.svg"
        pelicula.src = "./assets/pelicula.svg"
        btnCrear.src = "assets/button-crear-gifo.svg"
        camara.src = "./assets/camara.svg"
        btnStart.src = "./assets/paso-a-paso-1.svg"
        dos.src = "./assets/paso-a-paso-2.svg"
        tres.src = "./assets/paso-a-paso-3.svg"
        nocturno.innerHTML = "Modo Nocturno" 
    // modo diruno activado
    }

});

    if(localStorage.getItem("nocturno-mode") == "true") {
        document.body.classList.add("bodyNocturno");
        logoNoc.src = "./assets/logo-mobile-modo-noct.svg"
        pelicula.src = "./assets/pelicula-modo-noc.svg"
        btnCrear.src = "./assets/CTA-crar-gifo-modo-noc.svg"
        camara.src = "./assets/camara-modo-noc.svg"
        btnStart.src = "./assets/uno-modo-noc.svg"
        dos.src = "./assets/dos-modo-noc.svg"
        tres.src = "./assets/tres-modo-noc.svg"
        nocturno.innerHTML = "Modo Diurno"  
    
    
    } else {
        document.body.classList.remove("bodyNocturno");
        logoNoc.src = "assets/logo-mobile.svg"
        pelicula.src = "./assets/pelicula.svg"
        btnCrear.src = "assets/button-crear-gifo.svg"
        camara.src = "./assets/camara.svg"
        btnStart.src = "./assets/paso-a-paso-1.svg"
        dos.src = "./assets/paso-a-paso-2.svg"
        tres.src = "./assets/paso-a-paso-3.svg"
        nocturno.innerHTML = "Modo Nocturno"
        
    }