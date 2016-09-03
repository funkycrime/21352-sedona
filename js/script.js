var search = document.querySelector("#search_trigger");
var popup = document.querySelector(".form_none");
var form = popup.querySelector("form");
var checkin = popup.querySelector(".date_in");
var chekout = popup.querySelector(".date_out");

search.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("form_show");
  checkin.focus();
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("form_show")) {
      popup.classList.remove("form_show");
    }
  }
});

form.addEventListener("submit", function(event) {
  if (!checkin.value || !checkout.value) {
    event.preventDefault();
  }
});
