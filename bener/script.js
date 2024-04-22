const tileContainer = document.querySelector(".tiles-container");
const tiles = document.querySelectorAll(".tile");
const detail = document.querySelector(".detail");
const productInfo = document.querySelector(".product-info");
const markers = document.querySelectorAll(".marker");
const popovers = document.querySelectorAll(".popover");

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

const changeDetailText = () => {
  let detailText = detail.innerHTML;
  detail.innerHTML =
    detailText === "View in detail" ? "Close detail view" : "View in detail";
};

tileContainer.addEventListener("click", (event) => {
  tiles.forEach((tile) => {
    tile.classList.toggle("active");
  });
  productInfo.classList.toggle("active");
  markers.forEach((marker) => {
    marker.classList.toggle("active");
  });
  changeDetailText();
  console.log(markers);
});

detail.addEventListener("click", (event) => {
  tiles.forEach((tile) => {
    tile.classList.toggle("active");
  });
  productInfo.classList.toggle("active");
  markers.forEach((marker) => {
    marker.classList.toggle("active");
  });
  changeDetailText();
});

const productInfoMob = document.querySelector(".product-info-mob");
let productInfoHtml = productInfo.innerHTML;
productInfoMob.innerHTML = productInfoHtml;

// Get all tabs
const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    // Get the clicked tab's name
    const tabName = tab.textContent.trim();

    // Remove 'active' class from all tabs
    tabs.forEach((tab) => tab.classList.remove("active"));

    // Add 'active' class to the clicked tab
    tab.classList.add("active");

    tiles.forEach((tile) => {
      // If the tile's `data-tab` attribute is defined and contains the clicked tab's name, remove the 'out' class
      // Otherwise, add the 'out' class
      if (tile.dataset.tab && tile.dataset.tab.split(" ").includes(tabName)) {
        tile.classList.remove("out");
      } else {
        tile.classList.add("out");
      }
    });

    markers.forEach((marker) => {
      // If the marker's `data-tab` attribute is defined and contains the clicked tab's name, remove the 'out' class
      // Otherwise, add the 'out' class
      if (
        marker.dataset.tab &&
        marker.dataset.tab.split(" ").includes(tabName)
      ) {
        marker.classList.remove("out");
      } else {
        marker.classList.add("out");
      }
    });
  });
});
