function updateSkillValues() {
  $(".skill-value").each(function () {
    const element = $(this);
    element.width(element.attr("value"));
  });
}
