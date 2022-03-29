import { addJobsToArray, jobsArray } from "../views/view-favourite/print-fav";
import { createFavDefaultPage } from "../views/view-favourite/create-default-fav";
import { addJobsToFavPage } from "../views/view-favourite/add-jobs-fav";
import { detailListener } from "./detail-listener";

// Event listener click on the "add to my job" button
const favouriteListener = (data) => {
    const favouritesBtn = document.querySelectorAll(".favourites-btn");
    favouritesBtn.forEach((button) => {
        button.onclick = () => {
            const jobInfo = data.find(
                (job) => job.id === parseInt(button.getAttribute("id"))
            );

            // Add to favourites jobs
            addJobsToArray(jobInfo);

            // Toggle a mark if the user click to "add favourite job" button
            toggleFavouriteMark(button, data);

            displayFavCounter(jobsArray);

            detailListener(data);

            console.log(jobsArray);
        };
    });
};

const displayFavCounter = (jobsArray) => {
    const favCounter = document.getElementById("fav-counter");

    if (jobsArray.length === 0) {
        favCounter.classList.add("no-active");
    } else {
        favCounter.classList.remove("no-active");
    }

    favCounter.innerHTML = jobsArray.length;
};

const toggleFavouriteMark = (button, data) => {
    const classArr = button.getAttribute("class").split(" ");
    if (classArr.includes("fav-active")) {
        button.classList.remove("fav-active");
        deleteFav(data, jobsArray, button);
    } else {
        button.classList.add("fav-active");
    }
};

// When the user click the "my jobs" button the container created before with the selected jobs is showed
const showFavouritesJobs = (data, jobsArray) => {
    const favouritesBtn = document.getElementById("favourites-jobs-btn");

    favouritesBtn.onclick = () => {
        window.location.hash = "#favouritesJobs";

        // If the user has selected jobs, then show in a favourite page, if not, a commentary as "Not selected jobs yet" is showed

        if (jobsArray.length === 0) {
            createFavDefaultPage();
        } else {
            addJobsToFavPage(data, jobsArray);
        }
    };
};

const removeJob = (data, jobsArray) => {
    const removeBtn = document.querySelectorAll(".remove-btn");
    removeBtn.forEach((button) => {
        button.addEventListener("click", () => {
            const jobInfo = data.find(
                (job) => job.id === parseInt(button.getAttribute("id"))
            );
            // Remove the container html
            button.parentNode.parentNode.remove();

            // Remove the element on the jobs array
            for (let i = 0; i < jobsArray.length; i++) {
                if (jobsArray[i].id === parseInt(jobInfo.id)) {
                    jobsArray.splice(i, 1);
                }
            }
            displayFavCounter(jobsArray);

            // Add a comentary when user removes all the items
            if (jobsArray.length === 0) {
                createFavDefaultPage();
            }
        });
    });
};

const deleteFav = (data, jobsArray, button) => {
    const jobInfo = data.find(
        (job) => job.id === parseInt(button.getAttribute("id"))
    );

    // Remove the element on the jobs array
    for (let i = 0; i < jobsArray.length; i++) {
        if (jobsArray[i].id === parseInt(jobInfo.id)) {
            jobsArray.splice(i, 2);
        }
    }
};

export { favouriteListener, showFavouritesJobs, removeJob };
