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

// big carousel
const bigSlider = tns({
  container: "#big-slider",
  items: 1,
  slideBy: "page",
  mouseDrag: true,
  nav: false,
  controlsContainer: "#custom-control",
  loop: false,
});

// small carousel
const smallSlider = tns({
  container: "#small-slider",
  items: 3,
  slideBy: "page",
  mouseDrag: true,
  nav: false,
  controls: false,
  edgePadding: 10,
  loop: false,
});

// handel the chnage item event of big slider and change the active item of small slider

bigSlider.events.on("transitionStart", removeActiveItemaInSmallSlider);
bigSlider.events.on("transitionEnd", changeSmallSlider);

function changeSmallSlider(e) {
  // handel arrow prev button disabled
  if (e.index == 0) {
    e.prevButton.classList.add(
      "big-slider-container__controls__item--disabled"
    );
  } else {
    e.prevButton.classList.remove(
      "big-slider-container__controls__item--disabled"
    );
  }
  // handel arrow next button disabled
  if (e.index == e.slideCount - 1) {
    e.nextButton.classList.add(
      "big-slider-container__controls__item--disabled"
    );
  } else {
    e.nextButton.classList.remove(
      "big-slider-container__controls__item--disabled"
    );
  }
  // change active item of small slider
  smallSlider.goTo(e.index);
  smallSlider
    .getInfo()
    .slideItems[e.index].classList.add("small-slider__item-container--active");
}
function removeActiveItemaInSmallSlider() {
  Array.from(smallSlider.getInfo().slideItems).forEach((item) => {
    item.classList.remove("small-slider__item-container--active");
  });
}

// handel click the small slider and change the active item
document
  .querySelectorAll(".small-slider__item-container")
  .forEach((item, index) => {
    let checkX = null;
    item.addEventListener("mouseup", (e) => {
      if (e.clientX == checkX) {
        bigSlider.goTo(index);
      }
    });

    item.addEventListener("mousedown", (e) => {
      checkX = e.clientX;
    });
  });
