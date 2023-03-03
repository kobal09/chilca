export function Organigrama(){
  const $organigrana = document.createElement('section');
  $organigrana.classList.add('organigrama', 'py-3');
  $organigrana.innerHTML = `
  <div class="container">
    <div class="card bg-light">
        
          <div class="card-body">
            <a  class="nav-link disabled"><b>ORGANIGRAMA</b></a>
          </div>
        
    </div>
    <div class="card mt-2 bg-light">
      <div class="card-body d-flex justify-content-center">
        <p class="card-text">
          <img src="app/assets/img/chilca_organigrama_1.png" alt="organigrama" class="img-fluid">
          <img src="app/assets/img/chilca_organigrama_2.png" alt="organigrama" class="img-fluid">
        </p>
      </div>
      <p class="text-center">
          <a href="https://s3.amazonaws.com/documentos.api.gob.pe/eieqgpe3pitv7h6b4kohavrbjoa2?response-content-disposition=inline%3B%20filename%3D%22ORGANIGRAMA.pdf%22%3B%20filename%2A%3DUTF-8%27%27ORGANIGRAMA.pdf&response-content-type=application%2Fpdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJREKOSPKMJFYJDAQ%2F20230220%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230220T002955Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=866120887fe4be75e537094dcdff1b6dba2ba7ae92a9de68f991b1b1965690ec" target="_blank">Descargar la versión Digital</a>
      </p>
    </div>
  `;
  return $organigrana;
}