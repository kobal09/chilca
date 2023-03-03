export function SwiperCont(id_sw) {
  const $sC = document.createElement("div");
  //const id_sw = apiPrueba.CNAME;
  $sC.id=id_sw;
  $sC.classList.add("swiper");
  $sC.innerHTML = `
  <div id="s1" class="swiper-wrapper swiper001" data-sd="sd">
    
  </div>
  `;
  return $sC;
}