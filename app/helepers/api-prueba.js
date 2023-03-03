const 
  NOMBRE = 'localhost:5500',
  DOMINIO = `http://${NOMBRE}`,
  DATA = `${DOMINIO}/app/data/`,
  CNAME = 'carouselMain',
  JSON = '.json',
  COMUNICADOS = `${DATA}comunicados.json`,
  RESOLUCIONES = `${DATA}resoluciones.json`,
  CAROUSELMAIN = `${DATA}${CNAME}${JSON}`;
  //web = 'app/data/comunicados.json';

export default {
  NOMBRE,
  DOMINIO,
  DATA,
  CNAME,
  JSON,
  COMUNICADOS,
  RESOLUCIONES,
  CAROUSELMAIN
};