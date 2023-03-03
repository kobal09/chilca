export function SwiperContenido(props) {
  let {id, titulo, img_portada, url} = props;

  return `
  <div class="swiper-slide">
    <img src="${img_portada}" alt="" />
  </div>
  `;
}