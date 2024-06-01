function registerHeaderNavItemEvents() {
  $("#nav-links a").click(function (event) {
    $("#nav-links a").removeClass("active");
    $(event.target).addClass("active");
  });
}
