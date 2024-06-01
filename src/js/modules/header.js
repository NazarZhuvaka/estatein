function header() {
  //<-------------Tabs---------------->

  const tabsBtns = document.querySelectorAll("[data-tab]");
  const tabsProducts = document.querySelectorAll("[data-tab-value]");

  for (let btn of tabsBtns) {
    btn.addEventListener("click", function () {
      //убрати актів у всі
      for (let btn of tabsBtns) {
        btn.classList.remove("header__tab-control--active");
      }
      //добавити активний клас до данного кнопки
      this.classList.add("header__tab-control--active");

      // відобразити потрібні товари і hide непотрібні
      for (let product of tabsProducts) {
        //провірка на all
        if (this.dataset.tab === "all") {
          product.classList.remove("none");
        } else {
          if (product.dataset.tabValue === this.dataset.tab) {
            product.classList.remove("none");
          } else {
            product.classList.add("none");
          }
        }
      }

    });
  }
}

export default header;
