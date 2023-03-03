export function Footer(){
  const $footer = document.createElement('footer');
  $footer.classList.add('bg-dark', 'p-4', 'text-white', 'text-center');
  $footer.innerHTML = `
  <footer class="bg-dark p-4 text-white text-center">
    <p class="m-0">Copyright &copy; <a href="#">IsaacMC</a> Todos los derechos reservados.</p>
  </footer>
  `;
  return $footer;
}