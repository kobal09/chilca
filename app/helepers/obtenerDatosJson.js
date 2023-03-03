
export async function obtenerDatosJson(nombreJson) {
  const urlJson = nombreJson;
  console.log(urlJson);
  if (!urlJson) {
    throw new Error(`El archivo ${nombreJson} no está en la lista de URLs disponibles.`);
  }

  return await fetch(urlJson)
    .then(response => response.json())
    .then(data => {
      // Obtener los últimos elementos se agrega la propiedad reverse y con slice escojo los 3 ultimos elementos
      //si quiero solo ibtener los elementos en orden invertido quito slice
      return data.reverse().slice(0, 3);
    })
    .catch(error => {
      let message = err.statusText || "Ocurrió un error al acceder a la API";

      document.getElementById("main").innerHTML = `
        <div class="error">
          <p>Error ${err.status}: ${message}</p>
        </div>
      `;
      document.querySelector(".loader").style.display = "none"; 
      console.log(err)
    });
}