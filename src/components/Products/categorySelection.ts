const categorySelector = document.getElementById("category-selector");
const selectBtns = document.querySelectorAll<HTMLButtonElement>(
  "#category-selector>button"
);

for (const btn of selectBtns) {
  btn.addEventListener("click", () => {
    alert("click: " + btn.getAttribute("data-category"));
  });
}
