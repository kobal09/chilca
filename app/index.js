import { App } from './App.js';

/* hacemos que una vez que carge toda lapagina ejecute el archivo app.js */
document.addEventListener("DOMContentLoaded", App);
/* sirve para cuando nosotros hagamos click en las partes del navegador guardemos dicho click */
window.addEventListener("hashchange", App);