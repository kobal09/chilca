import apiPrueba from "../helepers/api-prueba.js";
import { CreaHistorica } from "./CreaHistorica.js";
import { Gestion } from "./Gestion.js";
import { MisionVision } from "./MisionVision.js";
import { Organigrama } from "./Organigrama.js";
import { SwiperCont } from "./SwiperCont.js";
import { SwiperHeader } from "./SwiperHeader.js";
import { SwiperFooter } from "./SwiperFooter.js";

export async function Router() {
  const d = document,
    w = window,
    nombreJson = apiPrueba.COMUNICADOS,
    carouselMain = apiPrueba.CNAME,
    $contenido_general = d.getElementById("main"); // aqui el contenedor con el id comunicados, es donde todo el contenido del sitio web va a cargar

  let { hash } = location;

  $contenido_general.innerHTML = null;

  console.log(hash);

  if (!hash || hash === "#/") {
    $contenido_general.appendChild(SwiperCont(carouselMain));
    const $conted = document.getElementById(carouselMain);
    $conted.appendChild(SwiperHeader());
    $conted.appendChild(SwiperFooter());
    
     /* await obtenerDatosJson(nombreJson)
      .then((comunicados) => {
        let html = "";
        comunicados.forEach((comunicado) => {
          html += Comunicado(comunicado);
          $contenido_general.innerHTML = html;
        });
      })
      .catch((error) => console.error(error));  */
  } else if (hash.includes("#/gestion")) {
    $contenido_general.appendChild(Gestion());
  } else if (hash === "#/creacion_historica") {
    $contenido_general.appendChild(CreaHistorica());
  } else if (hash === "#/funcionarios") {
    $contenido_general.innerHTML = "<h2>Sección de funcionarios</h2>";
  } else if (hash === "#/organigrama") {
    $contenido_general.appendChild(Organigrama());
  } else if (hash === "#/vision_mision") {
    $contenido_general.appendChild(MisionVision());
  } else {
    d.getElementById("main").innerHTML =
      "<h2>Aquí cargará el contenido de el Post previamente seleccionado</h2>";
  }

  //CON ESTA LINEA HACEMOS QUE CUANDO TENGA UN LOADER SE QUITE DESPUES DE CARGAR TDA LA APP
  d.querySelector(".loader").style.display = "none";
}
