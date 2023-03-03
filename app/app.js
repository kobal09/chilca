import { Menu } from './components/Menu.js';
import { Loader } from './components/Loader.js';
import { Main } from './components/Main.js';
import { Footer } from './components/Footer.js';
import { Router } from './components/Router.js';


export function App(){
  /* creamos la variable root, donde vamos a almacenar todo las partes que creemos del
   sitio web*/
  const $root = document.getElementById('root');
  /* const $main = document.getElementById('main');
  console.log($main) */
  
  /* con esta linea nos evitamos que cuando cambiemos de seccion, el contenidos de la pagina carge nuevmente
  solamente carga la seccion seleccionada */
  $root.innerHTML = null;
  $root.appendChild(Menu());
  $root.appendChild(Main());
  $root.appendChild(Loader());
  $root.appendChild(Footer());
  Router();

  //console.log(api); 

  
}