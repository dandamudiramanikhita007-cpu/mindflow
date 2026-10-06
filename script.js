const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const appCards = [...document.querySelectorAll(".app-card")];
const noResults = document.getElementById("noResults");
const themeBtn = document.getElementById("themeBtn");

function filterApps() {
  const search = searchInput.value.toLowerCase().trim();
  const category = categoryFilter.value;
  let visible = 0;

  appCards.forEach(card => {
    const name = card.dataset.name.toLowerCase();
    const matchesSearch = name.includes(search);
    const matchesCategory = category === "all" || card.dataset.category === category;
    const show = matchesSearch && matchesCategory;
    card.style.display = show ? "flex" : "none";
    if (show) visible++;
  });

  noResults.hidden = visible !== 0;
}

searchInput.addEventListener("input", filterApps);
categoryFilter.addEventListener("change", filterApps);

document.querySelectorAll(".topic-card").forEach(button => {
  button.addEventListener("click", () => {
    categoryFilter.value = button.dataset.filter;
    document.getElementById("apps").scrollIntoView({ behavior: "smooth" });
    filterApps();
  });
});

const savedTheme = localStorage.getItem("ui-theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const dark = document.body.classList.contains("dark");
  localStorage.setItem("ui-theme", dark ? "dark" : "light");
  themeBtn.textContent = dark ? "☀️" : "🌙";
});
