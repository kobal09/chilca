export async function ajax(props){
  //desestructuramos la propiedad props
  let {url,cbSuccess} = props;

  await fetch(url)
    /* si el parametro ok de la respuesta que nos esta mandando fetch es correcto,
     entonces convierte 'res' en un json. De lo contrario rechazamos la promesa 'res'*/
    .then(res => res.ok ? res.json(): Promise.reject(res))
    .then(json => cbSuccess(json))
    .catch(err => {
      let message = err.statusText || "Ocurrió un error al acceder a la API";

      document.getElementById("main").innerHTML = `
        <div class="error">
          <p>Error ${err.status}: ${message}</p>
        </div>
      `;
      document.querySelector(".loader").style.display = "none"; 
      console.log(err)
    })

}