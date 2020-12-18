var pregunta = document.getElementById('pregunta');
var enviarData = document.getElementById('btnEnviar');

window.onload = function () {
    var valor = sessionStorage.getItem("sesion");
    if (valor != "True") {
        document.getElementById("question").style.display = "none";
    }
};

var dataBD = firebase.database().ref('preguntasF').push();
enviarData.addEventListener('click', preguntasF);
function preguntasF() {
    dataBD.set({
        pregunta: pregunta.value,
        clave: dataBD.getKey(),
        Respuesta: ""
    })
    alert("Públicado correctamente");
    location.href = "/Sistema_Bonsai/foro.html";
}

var config = {

    apiKey: "AIzaSyCF-MKz6J2s2Hsx-p1__dVDpINAnUvduik",
    authDomain: "usuarios-b3f75.firebaseapp.com",
    databaseURL: "https://usuarios-b3f75.firebaseio.com",
    projectId: "usuarios-b3f75",
    storageBucket: "usuarios-b3f75.appspot.com",
    messagingSenderId: "348913451512",
    appId: "1:348913451512:web:071687dd05cafd4014960d",
    measurementId: "G-X0B5X37G19"

};

var database = firebase.database();

var referencia = database.ref("preguntasF");

var preguntasF = {};
var arr = [];
var visualizarP = "";

firebase.database().ref("preguntasF").once('value').then(function (snapshot) {
    var data = snapshot.val();
    for (var k in data) {
        visualizarP += '<tr >';
        visualizarP += '<td >';
        visualizarP += data[k].pregunta + '<td></tr>';

        if (data[k].Respuesta != "") {
            visualizarP += '<tr>';
            visualizarP += '<td> Respuesta: ';
            visualizarP += data[k].Respuesta + '</td> </tr>';
        }
    }
    var table = document.getElementById("tabla").innerHTML = visualizarP;
});
function setClave(clave) {
    console.log(clave);
    document.getElementById("clave").value = clave;
}

function guardarRespuesta() {
    var clave = document.getElementById("clave").value;
    var respuesta = document.getElementById("respuesta").value;
    referencia.child(clave).update({
        Respuesta: respuesta
    });
    alert("Publicado correctamente");
    location.href = "/administrador/foroPreg.html";
}