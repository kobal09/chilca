export function SwiperFooter() {
  const $s3 = document.createElement("div");
  $s3.innerHTML = `
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

  `;
  return $s3;
}