const toggleMenu = document.getElementById("toggle-menu");
const collapse = document.getElementById("collapse");

toggleMenu?.addEventListener("click", () => {
  const isShow = collapse?.hasAttribute("data-show");

  if (!isShow) collapse?.setAttribute("data-show", "on");
  else collapse?.removeAttribute("data-show");
});