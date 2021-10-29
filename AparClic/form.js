const expresionValidate = {
    Email: /^[\w-]+\@\w+\.\w+\.?\w+?$/,
    password: /^(?=.[a-z])(?=.[A-Z])(?=.\d)[A-Za-z\d$@$!%?&]{8,}/,
    Numerodedocumento: /^[\d]{8,10}/,
}

function validarForm() {
    var tipodis = document.getElementById("tipodis").value;
    var Numerodedocumento = document.getElementById("Numerodedocumento").value;
    var password = document.getElementById("password").value;
    var Email = document.getElementById("Email").value;

    if (!checkNumDocumento(Numerodedocumento, tipodis)) {
        alert("El numero de documento debe tener solo numeros, entre 8 y 10 digitos");
        return false;
    }
    
    if (!checkContrasena(password)) {
        alert("La contraseña debe tener 1 letra mayúscula, minúscula, 1 número y > 8 dígitos");
        return false;
    }
    
    if (!checkCorreo(Email)) {
        alert("El correo con la estructura correcta");
        return false;
    }

    alert("Enviado...");
    return false;
}

function checkNumDocumento(valor, tipo){
    return expresionValidate.Numerodedocumento.test(valor) && tipo === "CC";
}

function checkCorreo(valor) {
    return expresionValidate.Email.test(valor);
}

function checkContrasena(valor){
    return expresionValidate.password.test(valor);
}

module.exports.checkNumDocumento = checkNumDocumento;
module.exports.checkCorreo = checkCorreo;
module.exports.checkContrasena = checkContrasena;