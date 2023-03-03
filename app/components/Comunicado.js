export function Comunicado(props){

  /* desestrucuramos las variables descripcion y url de la data comunicados.json
    los nombres de las variables tienen que ser iguales a la de dicho archivo json */
  let {com_id, com_descripcion, com_url} = props;

  return `
    <p>${com_id}</p>
    <p class="pt-2 mb-1"><a href="${com_url}" 
    target="_blank">${com_descripcion}.</a></p>
  `;
}