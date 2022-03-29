const createFavDefaultPage = () => {
    const favouriteContainer = document.getElementById("favourite-container");

    favouriteContainer.innerHTML = `
                <a href="#home" class="home-title-fav">
                    Home
                    <i class="fa-solid fa-angles-right home-icon"></i>
                </a>
                <h2 id="text-select">
                    Not selected jobs yet
                </h2>
            `;
};

export { createFavDefaultPage };
