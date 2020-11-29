let btnStart = document.getElementById('btnInicio');
let btnStop = document.getElementById('btnStop');
let btnRecord = document.getElementById('btnRecord');
let btnUpload = document.getElementById('btnUpload');
let form;
let video = document.getElementById("video")
let comenzar = document.getElementById("comenzar")

// let modoDark = document.querySelector("#btnDark");
// let body = document.querySelector("body");
// let logoNocturno = document.getElementById("logo-noc");



let uno = document.getElementById("uno");
let tres = document.getElementById("tres");


comenzar.addEventListener("click", () => {
    h1.innerHTML = "¿Nos das acceso a tu cámara?";
    p.innerHTML = "El acceso a tu camara será válido sólo por el tiempo en el que estés creando el GIFO.";
    uno.src = "./assets/paso-a-paso-hover-1.svg";
    comenzar.classList.add("sacar-texto")
  
})


var recorder; // globally accessible
let h1 = document.getElementById("titulo")
let p = document.getElementById("parrafo")
let btnImg = document.getElementById("")
let grabar;
let subirGifo;
let finalizar;

btnStart.addEventListener('click', () => {

    video.classList.add("video-activo")
    video.classList.remove("video")
    h1.classList.add("sacar-texto")
    p.classList.add("sacar-texto")
    btnStart.src = "./assets/paso-a-paso-hover-2.svg"
    uno.src = "./assets/paso-a-paso-1.svg"
    comenzar.classList.remove("sacar-texto")
    comenzar.src = "./assets/CTA-grabar.svg"
    comenzar.id = "grabar"
    grabar = document.getElementById("grabar")

    grabar.addEventListener("click", () => {
            
        comenzar.classList.remove("sacar-texto")
        uno.src = "./assets/paso-a-paso-1.svg"
        grabar.src = "./assets/CTA-finalizar.svg"
        grabar.id = "finalizar"

        finalizar = document.getElementById("finalizar")

        finalizar.addEventListener("click", () => {
    
            finalizar.src = "./assets/CTA-subir-gifo.svg"
            finalizar.id = "subir-gifo"
            
    
        })
    });

   



    btnStop.disabled = true;
    captureCamera((camera) => {
       
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
    
    
    form = new FormData();
    form.append('file', blob, 'myGif.gif');
    console.log("ESTE ES EL FILE!!!!", form.get('file'));
    
    recorder.camera.stop();
    recorder.destroy();
    recorder = null;
}



btnRecord.addEventListener('click', () => {
    
    recorder.startRecording();
    btnStop.disabled = false;
});


btnStop.addEventListener('click', () => {
    btnStop.disabled = true;
    recorder.stopRecording(stopRecordingCallback);
} )


btnUpload.addEventListener('click', () => {
    
    // enviar gifo.
    fetch("http://upload.giphy.com/v1/gifs?api_key=YaOhho0nfvtDv9KxcBH64ng3iVX6VW9a", 
    {
        method: 'POST',
        body: form
    })
    .then(res => res.json())
    .then(res => {


        console.log("fin del envio!!", res);
    })
    .catch(err => {
        console.log("error.!!!", err);
    })


} )


