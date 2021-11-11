$(document).ready(function () {
  $(".form-trigger").click(function () {
    $(".search-container").toggleClass("slide-form");
  });
  $(".search-container .fa-arrow-right").click(function () {
    $(".search-container").toggleClass("slide-form");
  });
  $(".search .city-triger").click(function () {
    $(".from-drop").toggleClass("show-city");
  });
  $(".search .triger-all-cats").click(function () {
    $(".from-input").toggleClass("show-cats");
  });

});


