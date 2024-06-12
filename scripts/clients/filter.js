document.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById("table");
    const filterForm = document.getElementById("filter-form");
    const filterBtn = document.getElementById("filter-btn");

    filterBtn.addEventListener("click", (e) => {
        e.preventDefault();
        filterForm.classList.toggle("hidden");
        table.classList.toggle("!basis-[100%]");
    })
})