import apiPrueba from "../helepers/api-prueba.js";
import { obtenerDatosJson } from "../helepers/obtenerDatosJson.js";
import { SwiperContenido } from "./SwiperContenido.js";

export function SwiperHeader() {
  const nombreJson = apiPrueba.CAROUSELMAIN,
    $contCaruMain = document.getElementById('s1');
    $contCaruMain.innerHTML = null;

    obtenerDatosJson(nombreJson)
    .then(sliders => {
      let cCarouselMain = '';
      sliders.forEach((slider) => {
        cCarouselMain += SwiperContenido(slider);
        $contCaruMain.innerHTML = cCarouselMain;
      });
    })
    .catch((error) => console.error(error));
  
  return $contCaruMain;
}