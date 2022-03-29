const printCategories = (data) => {
    let allCategoriesArray = [];

    data.forEach((element) => {
        allCategoriesArray.push(element.category);
    });

    let uniqueCategoriesArray = [...new Set(allCategoriesArray)];

    let selectContent = uniqueCategoriesArray
        .map(
            (job) => `
        <option value="${job.toLowerCase()}">
                ${job}
            </option>`
        )
        .join("");

    const categoriesContainer = document.getElementById("select-options");
    categoriesContainer.innerHTML = `<option value="categories" disabled selected>Categories</option>${selectContent}`;
};

export { printCategories };
