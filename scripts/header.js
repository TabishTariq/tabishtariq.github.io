function registerHeaderNavItemEvents() {
  $("#nav-links a").click(function (event) {
    $("#nav-links a").removeClass("active");
    $(event.target).addClass("active");
  });
}

function handleOnScrollActions() {
  $(document).on("scroll", function () {
    const scrollValue = $(window).scrollTop();

    handleOpacityOnScroll(scrollValue);
    handleActiveNavLinksOnScroll(scrollValue);
  });
}

function handleOpacityOnScroll(scrollValue) {
  if (scrollValue > 30) {
    $("header").css(
      "box-shadow",
      "0 0 2px 0 rgba(0, 0, 0, 0.08), 0 2px 4px 0 rgba(0, 0, 0, 0.12)"
    );
  } else {
    $("header").css("box-shadow", "none");
  }
}

function handleActiveNavLinksOnScroll(scrollValue) {
  $("#nav-links a").removeClass("active");

  if (scrollValue < 400) {
    $("#home-nav").addClass("active");
  } else if (scrollValue < 1000) {
    $("#about-nav").addClass("active");
  } else {
    $("#skills-nav").addClass("active");
  }
}
