function registerHeaderNavItemEvents() {
  $("#nav-links a").click(function (event) {
    $("#nav-links a").removeClass("active");
    $(event.target).addClass("active");
  });
}

function handleOpacityOnScroll() {
  $(document).on("scroll", function () {
    const scrollValue = $(window).scrollTop();

    if (scrollValue > 30) {
      $("header").css(
        "box-shadow",
        "0 0 2px 0 rgba(0, 0, 0, 0.08), 0 2px 4px 0 rgba(0, 0, 0, 0.12)"
      );
    } else {
      $("header").css("box-shadow", "none");
    }
  });
}
