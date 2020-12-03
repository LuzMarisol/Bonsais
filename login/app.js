function registrar() {
    var email = document.getElementById('email').value;
    var contrasena = document.getElementById('contrasena').value;

    firebase.auth().createUserWithEmailAndPassword(email, contrasena)
    .then(function(){
        verificar();
    })
    .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    });
}
function ingreso() {
    var email2 = document.getElementById('email2').value;
    var contrasena2 = document.getElementById('contrasena2').value;

    firebase.auth().signInWithEmailAndPassword(email2, contrasena2)
    .then(function(){
        verificar()
        console.log("Sesión iniciada");
        contenido.innerHTML = `
        <input type="button" onclick="location.href='/Sistema_Bonsai/index.html';" value="Ir a pagina principal" />
        
        <button onclick="cerrar()"> cerrar sesion</button>
        `;
        
    })
    .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    });
}
function observador() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log("Existe usuario activo")
            aparece(user);
            var displayName = user.displayName;
            var email = user.email;
            console.log("************");
            console.log(user.emailVerified)
            console.log("************");
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            // ...
        } else {
            contenido.innerHTML = `
            `;
        }
    }); 
}
observador();

function aparece(user) {
    var user = user;
    var contenido = document.getElementById('contenido');
    if(user.emailVerified){
        contenido.innerHTML = `
        <p>Bienvenido</p>
        <button onclick="cerrar()"> cerrar sesion</button>
        `;
    }
}
function cerrar() {
    firebase.auth().signOut()
        .then(function () {
            console.log("saliendo...")
        })
        .catch(function (error) {
            console.log(error)
        })

}
function verificar() {
    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function () {
      
    }).catch(function (error) {
        // An error happened.
    });
}