// header dropdown manage style when open
let myDropdownsTogglerHeader = document.querySelectorAll(
  ".main-header [data-bs-toggle='dropdown']"
);
myDropdownsTogglerHeader = Array.from(myDropdownsTogglerHeader);

myDropdownsTogglerHeader.forEach((dropdownToggler) => {
  // init the dropdown
  var dropdownInstance = new bootstrap.Dropdown(dropdownToggler);
  const dropdown = dropdownInstance._menu;
  let cliced = false;

  // mouse enter to dropdoen handel
  dropdown.addEventListener("mouseenter", () => {
    if (!cliced) {
      dropdownToggler.classList.add(
        "main-header__nav__row__right__link--active"
      );
    }
  });

  // mouse leave to dropdoen handel
  dropdown.addEventListener("mouseleave", () => {
    if (!cliced) {
      dropdownToggler.classList.remove(
        "main-header__nav__row__right__link--active"
      );
    }
  });
  // show dropdown handel
  dropdownToggler.addEventListener("show.bs.dropdown", function () {
    dropdownToggler.classList.add("main-header__nav__row__right__link--active");
    cliced = true;
  });

  // hide dropdown handel

  dropdownToggler.addEventListener("hide.bs.dropdown", function () {
    dropdownToggler.classList.remove(
      "main-header__nav__row__right__link--active"
    );
    cliced = false;
  });
});

// saerch handel toggle
function handelSearchForm(e, openMode = true) {
  e?.preventDefault();
  e?.stopPropagation();
  const tooglePlace = document.getElementById("toggleSeatchPlace");
  tooglePlace.classList[openMode ? "add" : "remove"]("open-search");
}
clickOutsideHandel(document.getElementById("formSearch"), () => {
  handelSearchForm(null, false);
});
// function openSearchForm(e) {
//   e.preventDefault();
//   const tooglePlace = document.getElementById("toggleSeatchPlace");
//   tooglePlace.classList.add("open-search");
// }

function clickOutsideHandel(element, doingFunction) {
  document.addEventListener("click", function (event) {
    var isClickInsideElement = element.contains(event.target);
    if (!isClickInsideElement) {
      doingFunction();
    }
  });
}
