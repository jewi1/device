var linkMap = document.querySelector(".map-link");
var popupMap = document.querySelector(".modal-map");
var closeMap = popupMap.querySelector(".button-close");

linkMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.add("modal-map-show");
});

closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.remove("modal-map-show");
});
