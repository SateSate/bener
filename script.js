const tileContainer = document.querySelector('.tiles-container');
const tiles = document.querySelectorAll('.tile');
const detail = document.querySelector('.detail');
const productInfo = document.querySelector('.product-info');
const markers = document.querySelectorAll('.marker');
const popovers = document.querySelectorAll('.popover');

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

const changeDetailText = () => {
  let detailText = detail.innerHTML;
  detail.innerHTML =
    detailText === 'View in detail' ? 'Close detail view' : 'View in detail';
};

tileContainer.addEventListener('click', (event) => {
  tiles.forEach((tile) => {
    tile.classList.toggle('active');
    productInfo.classList.toggle('active');
    markers.forEach((marker) => {
      marker.classList.toggle('active');
    });
  });
  changeDetailText();
});

detail.addEventListener('click', (event) => {
  tiles.forEach((tile) => {
    tile.classList.toggle('active');
    productInfo.classList.toggle('active');
    markers.forEach((marker) => {
      marker.classList.toggle('active');
    });
  });
  changeDetailText();
});

const productInfoMob = document.querySelector('.product-info-mob');
let productInfoHtml = productInfo.innerHTML;
console.log(productInfoHtml);
productInfoMob.innerHTML = productInfoHtml;
