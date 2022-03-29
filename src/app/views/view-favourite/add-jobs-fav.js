import { detailListener } from "../../listeners/detail-listener";
import { removeJob } from "../../listeners/fav-listener";
import { printFavouritesJobsPage } from "./print-fav";

const addJobsToFavPage = (data, jobsArray) => {
    const favouriteContainer = document.getElementById("favourite-container");

    favouriteContainer.classList.add("favourite__container");

    favouriteContainer.innerHTML = `
                <a href="#home" class="home-title">Home<i class="fa-solid fa-angles-right home-icon"></i></a>
                ${
                    jobsArray.length === 0
                        ? `<h2 id="text-select">Not selected jobs yet</h2>`
                        : ""
                }
            `;
    if (document.querySelectorAll(".fav-job-container")) {
        const jobsContainerAll =
            document.querySelectorAll(".fav-job-container");
        jobsContainerAll.forEach((el) => el.remove());
    }

    printFavouritesJobsPage(jobsArray);

    // Listen the click on details job
    detailListener(data);

    // // Listen the click on remove job
    removeJob(data, jobsArray);
};

export { addJobsToFavPage };
