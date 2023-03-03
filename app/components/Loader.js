export function Loader(){
  const $loader = document.createElement('img'),
  $styles = document.getElementById('estilos_dinamicos');
  $loader.src='app/assets/img/loader.svg';
  $loader.alt='Cargando...';
  $loader.classList.add('loader');
  $styles.innerHTML = `
    .loader {
      margin: 1rem auto;
      display: block;
      width: 4rem;
      height: 4rem;
    }
  `;
  return $loader;
}