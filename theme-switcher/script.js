// 1. Find dropdown og body
const select = document.getElementById("theme-select");
const body = document.body;

// 2. Lyt efter ændringer på dropdown
select.addEventListener("change", function() {
  // 3. Hent det valgte tema fra dropdown
  const chosenTheme = select.value;

  // 4. Skift data-theme på body
  body.setAttribute("data-theme", chosenTheme);
});
