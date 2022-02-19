// header dropdown manage style when open
let myDropdownsHeader = document.querySelectorAll(
  ".main-header [data-bs-toggle='dropdown']"
);
myDropdownsHeader = Array.from(myDropdownsHeader);

myDropdownsHeader.forEach((dropdown) => {
  dropdown.addEventListener("show.bs.dropdown", function () {
    dropdown.classList.add("main-header__nav__row__right__link--active");
  });

  dropdown.addEventListener("hide.bs.dropdown", function () {
    dropdown.classList.remove("main-header__nav__row__right__link--active");
  });
});
