function footer() {
  window.onload = function () {
    window.setInterval(function () {
      var date = new Date();

      var years = date.getFullYear();

      var clock = years;

      document.getElementById("year-clock").innerHTML = clock;
    });
  };
}

export default footer;
