export function Gestion(){
  const $gestion = document.createElement('section');
  $gestion.classList.add('gestion', 'py-3');
  $gestion.innerHTML = `
  <div class="container">
    <div class="card bg-light">
        
          <div class="card-body">
            <a  class="nav-link disabled"><b>GESTIÓN</b></a>
          </div>
        
    </div>
    <div class="card mt-2 bg-light">
      <div class="card-body text-center">
        <p class="card-text"><b>ING. CESAR DAMAS LAURENTE</b></p>
        <div class="card-text">Alcalde</div>
      </div>
      <div class="card-body grid gap-2">
        <div class="row">
          <div class="img card-body col-xs-12 col-md-6">
            <img src="../app/assets/img/alcalde.png" class="img-thumbnail img-fluid" alt="" srcset="">
          </div>
          <div class="texto card-body col-xs-12 col-md-6">
            <p class="card-text">Nació en Lima un 11 de febrero de 1961, y creció en Pomalca, Chiclayo, Lambayeque.</p>
            <p class="card-text">Estudió Ingeniería Civil en la Universidad Nacional Pedro Ruiz Gallo, trasladándose posteriormente a la Universidad
              de Piura, donde estudió Ingeniería Industrial.</p>
            <p class="card-text">Cuenta con un MBA en Finanzas por la Universidad del Pacífico, y cursó el Programa de Desarrollo Directivo de la Universidad de Piura.</p>
            <p class="card-text">Trabajó como analista de sistemas en el Banco Wiese Sudameris, Vicepresidente de Créditos y Cobranzas de Alicorp, Gerente de Créditos Corporativos en Citibank,
              Fundador de Perú Rail, Promotor del Colegio Los Álamos, Director del Hotel Belmond, Artífice de ACRES Finance, Presidente del Campus en Lima de la Universidad de Piura, Presidente Ejecutivo de Compupalace, y catedrático en la Universidad Nacional de Ingeniería.</p>
            <p class="card-text">Llegó a ser regidor de la Municipalidad de Lima, por Solidaridad Nacional entre los años 2007 y 2010.</p>
            <p class="card-text">Actualmente, es el alcalde electo de la Municipalidad Metropolitana de Lima para período 2023 – 2026.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
  return $gestion;
}