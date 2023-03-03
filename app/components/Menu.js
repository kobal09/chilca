export function Menu(){
  /* se crea la etiqueta que va a contener todo el componente */
  const $menu = document.createElement('nav'),
    $styles_nav = document.getElementById('estilos_dinamicos');
  //le agregamos las clases para que funcione con booststrap 5
  $menu.classList.add('navbar', 'z-3', 'navegador', 'navbar-expand-md', 'bg-body-secondary');
  $styles_nav.innerHTML = `
    .navegador{
      position: sticky;
      top:0;
    }
  `;
  //aqui agregamos elcontenido html dinamicamente
  $menu.innerHTML = `
    <div class="container-fluid container" >
      <a class="navbar-brand" href="#/">
        <img src="app/assets/img/logo_muni_chilca.png" alt="Logo" width="200" height="48" class="d-inline-block align-text-top">
        
      </a>
      <button class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#nav"
        area-controls="nav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="nav">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a href="#/" class="nav-link">Inicio</a>
          </li>
          <li class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle" 
              data-bs-toggle="dropdown"
              /* el atributo data-bs-auto-close="outside", hace que cuando hagas click en el dropdown
               no desaparezca */
              data-bs-auto-close="outside">Municipalidad</a>
            <ul class="dropdown-menu shadow">
              <li><a href="#/gestion" class="dropdown-item">Gestión</a></li>
              <li><a href="#/creacion_historica" class="dropdown-item">Creación Historica</a></li>
              <li><a href="#/funcionarios" class="dropdown-item">Funcionarios</a></li>
              <li><a href="#/organigrama" class="dropdown-item">Organigrama</a></li>
              <li><a href="#/vision_mision" class="dropdown-item">Visión y Misión</a></li>
            </ul>
            
          </li>
          <!-- megamenu -->
          <li class="nav-item dropdown dropdown-mega position-static">
            <a href="#" class="nav-link dropdown-toggle" 
              id="navbar_dropdown" 
              role="button"
              data-bs-toggle="dropdown" 
              data-bs-auto-close="outside">
              Trámites y Servicios
            </a>
            <div class="scroll-menu dropdown-menu shadow bg-body-secondary">
              <div class="mega-content px-md-4">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-lg-3 col-sm-6 py-4 px-xl-5 px-4">
                      <h5>Servicios</h5>
                      <div class="list-group">
                        <a href="https://www.gob.pe/21184-municipalidad-distrital-de-chilca-obtener-licencia-de-funcionamiento-para-negocios-de-riesgo-alto-o-muy-alto" class="list-group-item bg-body-secondary" target="_blank">Obtener licencia de funcionamiento para negocios de riesgo alto o muy alto</a>
                        <a href="https://www.gob.pe/21178-municipalidad-distrital-de-chilca-obtener-licencia-de-funcionamiento-para-negocios-de-riesgo-bajo-o-medio" class="list-group-item bg-body-secondary" target="_blank">Obtener licencia de funcionamiento para negocios de riesgo bajo o medio</a>
                        <a href="https://www.gob.pe/17340-municipalidad-distrital-de-chilca-solicitar-reconocimiento-voluntario-de-paternidad-en-chilca" class="list-group-item bg-body-secondary" target="_blank">Solicitar reconocimiento voluntario de paternidad </a>
                        <a href="https://www.gob.pe/17337-municipalidad-distrital-de-chilca-solicitar-la-inscripcion-extemporanea-de-nacimientos-en-el-distrito-de-chilca" class="list-group-item bg-body-secondary" target="_blank">Solicitar la inscripción extemporánea de nacimientos</a>
                        </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 py-4 px-xl-5 px-4">
                        <h5>Servicios</h5>
                        <div class="list-group">
                        <a href="https://www.gob.pe/14661-municipalidad-distrital-de-chilca-inscribir-a-un-recien-nacido-en-el-distrito-de-chilca" class="list-group-item bg-body-secondary" target="_blank">Inscribir a un recién nacido</a>
                        <a href="https://www.gob.pe/17268-municipalidad-distrital-de-chilca-acceder-a-la-mesa-de-partes-de-la-municipalidad-distrital-de-chilca" class="list-group-item bg-body-secondary" target="_blank">Acceder a la mesa de partes </a>
                        <a href="https://www.gob.pe/17335-municipalidad-distrital-de-chilca-acceder-al-libro-de-reclamaciones-de-la-municipalidad-distrital-de-chilca" class="list-group-item bg-body-secondary" target="_blank">Acceder al Libro de Reclamaciones</a>
                        <a href="https://www.gob.pe/14659-municipalidad-distrital-de-chilca-contraer-matrimonio-civil-en-el-distrito-de-chilca" class="list-group-item bg-body-secondary" target="_blank">Contraer matrimonio civil</a>
                        <a href="https://www.gob.pe/14675-municipalidad-distrital-de-chilca-obtener-acta-de-defuncion-en-el-distrito-de-chilca" class="list-group-item bg-body-secondary" target="_blank">Obtener acta de defunción</a>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 py-4 px-xl-5 px-4">
                      <h5>Servicios</h5>
                      <div class="list-group">
                        <a href="#" class="list-group-item bg-body-secondary">Servicio 1</a>
                        <a href="#" class="list-group-item bg-body-secondary">Servicio 2</a>
                        <a href="#" class="list-group-item bg-body-secondary">Servicio 3</a>
                        <a href="#" class="list-group-item bg-body-secondary">Servicio 4</a>
                        <a href="#" class="list-group-item bg-body-secondary">Servicio 5</a>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 py-4 px-xl-5 px-4">
                      <h5>Servicios</h5>
                      <div class="list-group">
                        <a href="#" class="list-group-item bg-body-secondary">Servicio 1</a>
                        <a href="#" class="list-group-item bg-body-secondary">Servicio 2</a>
                        <a href="#" class="list-group-item bg-body-secondary">Servicio 3</a>
                        <a href="#" class="list-group-item bg-body-secondary">Servicio 4</a>
                        <a href="#" class="list-group-item bg-body-secondary">Servicio 5</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="d-flex justify-content-end">
          <a class="navbar-brand" href="#">
            <img src="app/assets/img/logo_portal_transparencia.png" alt="Logo" width="100" height="48" class="d-inline-block align-text-top">
          </a>
        </div>
      </div>
    </div>
  `;
  //aqui retornamos lavariable donde creamos la etiqueca que contiene todo el nav
  return $menu;
}