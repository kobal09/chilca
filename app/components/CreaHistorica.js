export function CreaHistorica(){
  const $creaHistorica = document.createElement('section');
  $creaHistorica.classList.add('creaHistorica','py-3');
  $creaHistorica.innerHTML = `
  <div class="container">
    <div class="card bg-light">
        
          <div class="card-body">
            <a  class="nav-link disabled"><b>CREACIÓN HISTÓRICA</b></a>
          </div>
        
    </div>
    <div class="card mt-2 bg-light">
      
      <div class="card-body grid gap-2">

        <p class="card-text">El distrito de Chilca tiene la tercera mayor población de los 28 distritos pertenecientes a la provincia de Huancayo, está ubicado en el departamento de Junín Perú. Esta gobernado por la Municipalidad de Huancayo y el Gobierno Regional de Junín, también pertenece por parte de la religión católica al arquidiócesis de Huancayo.</p>
        <p class="card-text"><b>Historia</b></p>
        <p class="card-text">El día 2 de mayo de 1957 se creó este distrito por medio de la Ley 12829, cuando el presidente del Perú era Manuel Ignacio Prado Ugarteche. El nombre Chilca proviene del quechua “Chillca” que significa arbusto de hojas pegajosas la cual se cuenta era una planta medicinal muy abundante ubicada por estos lugares.</p>
        <p class="card-text">Formaba parte de Huancayo y desde el año 1944 se inició un proceso para independizarse, logrando después de 13 años ser considero un distrito más de la provincia.</p>
        <p class="card-text">Años atrás formo parte del territorio de la cultura Huanca que fue conquistado por los incas en el año 1460, por la época en que sucedió la conquista de los españoles este lugar no fue totalmente perteneciente a ellos pues los caciques locales conservaron sus políticas y economía ayudando al proceso de invasión de los Incas ya que querían ser independientes a ese imperio. Pero después de un largo tiempo estos lugareños decidieron ayudar a acabar con la conquista española en el mandato del último Virrey, recordándose bastante la batalla de Azapampa en un 29 de diciembre de 1820 en que Huancayo logró su título de Ciudad Incontrastable, otra batalla en donde también se tuvo participación fue en la guerra del pacífico contra Chile.</p>
        <p class="card-text"><b>Geografía y Extensión</b></p>
        <p class="card-text">Chilca limita por el porte con el distrito de Huancayo, por el sur con el Distrito de Huancán, en el este se ubica el distrito de Sapallanga y por el oeste la provincia de Chupaca que era antes otro distrito de la provincia.</p>
        <p class="card-text">
          <ul>
            <li>Su extensión es de 8.3 kilómetros cuadrados.</li>
            <li>La población fue de 85628 hasta el año 2015.</li>
            <li>Su altitud promedio es 3275 metros sobre el nivel del mar.</li>
            <li>Superficie de 28.04 kilómetros cuadrados.</li>
            <li>El punto más bajo es en el río Mantaro con 3172 msnm.</li>
            <li>El punto más alto es en el cerro Tanquiscancha con 4411 msnm.</li>
          </ul>
        </p>
        <div class="card-body d-flex justify-content-center">
          <p class="card-text">
            <img src="app/assets/img/chilca_plano_urbano.png" alt="Plano Urbano Distrital Chilca" class="img-thumbnail img-fluid">
          </p>
        </div>
        <p class="text-center">
          <a href="https://drive.google.com/file/d/1uyaAzszOEvoNRhPbEGuw2x4VQ5paw5Rr/view" target="_blank">Descargar la versión Digital</a>
        </p>
        <p class="card-text"><b>Bandera de Chilca</b></p>
        <p class="card-text">En la bandera del distrito de Chilca podemos ver un obelisco con un rifle y una espada los cuales representan el título de Ciudad Incontrastable de Huancayo en la batalla de Azapampa, la planta representativa que dio nombre al distrito, un círculo rojo que viene a ser la sangre derramada en las batallas para independencia, un lazo en la parte inferior como símbolo de unidad y fortaleza de todo el distrito, finalmente el fondo blanco que viene a ser el logro de paz.</p>
        <div class="row ">
          <div class="card-body d-flex  justify-content-center col-xs-12 col-md-6 col-lg-4">
            <img src="app/assets/img/chilca_obelisco.jpg" alt="Obelisco de Chilca" class="img-thumbnail img-fluid" />
          </div>
          <div class="card-body d-flex  justify-content-center col-xs-12 col-md-6 col-lg-4">
            <img src="app/assets/img/chilca_escudo.jpg" alt="Obelisco de Chilca" class="img-thumbnail img-fluid" />
          </div>
          <div class="card-body d-flex  justify-content-center col-xs-12 col-md-6 col-lg-4">
            <img src="app/assets/img/chilca_himno.jpg" alt="Obelisco de Chilca" class="img-thumbnail img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
  return $creaHistorica;
}