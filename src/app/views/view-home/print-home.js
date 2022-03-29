import { getData } from "../../api/call-to-api-list";
import { jobContainerHtml } from "./job-container";
import { selectOptions } from "../view-filters/input-categories";
import { searchJobInput } from "../view-filters/input-search";
import { printCategories } from "../view-filters/print-categories";
import { jobsArray } from "../view-favourite/print-fav";

// Function to print the data from API into a container ////////
const printHome = async () => {
    window.location.hash = "#home";
    const data = await getData();
    console.log(data);

    // Use map method to iterate and print the data its needed
    jobContainerHtml(data);

    // Listen the select options
    selectOptions(data);

    // Listen the input value in the search bar
    searchJobInput(data);

    printCategories(data);

    checkFavJobs(jobsArray);
};

const checkFavJobs = (jobsArray) => {
    const favBtn = document.querySelectorAll(".favourites-btn");
    favBtn.forEach((btn) => {
        jobsArray.forEach((job) => {
            if (job.id === parseInt(btn.getAttribute("id"))) {
                btn.classList.add("fav-active");
            }
        });
    });
};

export { printHome, checkFavJobs };
