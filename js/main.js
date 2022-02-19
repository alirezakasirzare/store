// header dropdown manage style when open
let myDropdownsTogglerHeader = document.querySelectorAll(
  ".main-header [data-bs-toggle='dropdown']"
);
myDropdownsTogglerHeader = Array.from(myDropdownsTogglerHeader);

myDropdownsTogglerHeader.forEach((dropdownToggler) => {
  // init the dropdown
  var dropdownInstance = new bootstrap.Dropdown(dropdownToggler, {
    popperConfig: function (defaultBsPopperConfig) {
      // var newPopperConfig = {...}
      // use defaultBsPopperConfig if needed...
      // return newPopperConfig
    },
  });
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
