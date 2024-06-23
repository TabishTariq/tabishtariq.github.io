function main() {
  registerHeaderNavItemEvents();
  handleOnScrollActions();
  updateSkillValues();
}

function openURL(url) {
  window.open(url, "top");
}

$(document).ready(main);
