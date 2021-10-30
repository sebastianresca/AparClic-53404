let registros = [];

function login() {
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
    console.log(correo, contrasena);
    if(correo === 'carlos@gmail.com' && contrasena === 'SecurePassword123'){
        console.log('Correo y clave correctos');
        return false;
    } else {
        console.log('Esta malo el correo');
        return true;}}

function agregarRegistros() {
    let datalistValue = document.getElementById("tipo-documento").value;
    let numId = document.getElementById("numero-documento").value;
    let email = document.getElementById("correo").value;
    let contrasena = document.getElementById("contrasena").value;

    const information = {
        documentType: datalistValue,
        IDNumber: numId,
        correo: email,
        contrasena: contrasena 
    }
    registros.push(information);
    console.log(registros);}

function validarCAPTCHA(valor) {
    const respuesta = '15';
    if(valor == respuesta){
        console.log('Esta correcto');
        return true;
    } else {
        console.log('Esta incorrecto');
        return false;}}

module.exports.login = login;
module.exports.registros = registros;
module.exports.validarCAPTCHA = validarCAPTCHA;
module.exports.agregarRegistros = agregarRegistros;