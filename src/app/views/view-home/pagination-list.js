import { printHTMLfromData } from "./job-container";
import { clickListeners } from "../../listeners/click-listeners";
import { jobsArray } from "../view-favourite/print-fav";
import { checkFavJobs } from "./print-home";

// Create the function to change the data when the user click the next or previous button
const paginationListJobs = (
    dataContainer,
    jobsContainer,
    data,
    firstIndex,
    finalIndex
) => {
    const previousBtn = document.getElementById("previous-btn");
    const nextBtn = document.getElementById("next-btn");
    const paginationNumber = document.getElementById("pagination-number");
    let numberPage = 1;

    checkPaginationButtons(firstIndex, previousBtn);

    nextBtn.onclick = () => {
        firstIndex = firstIndex + 10;
        finalIndex = finalIndex + 10;
        numberPage++;
        paginationNumber.innerHTML = numberPage;

        getJobsFromList(
            data,
            firstIndex,
            finalIndex,
            dataContainer,
            jobsContainer
        );

        checkPaginationButtons(firstIndex, previousBtn, nextBtn);

        clickListeners(data);
    };

    previousBtn.onclick = () => {
        firstIndex = firstIndex - 10;
        finalIndex = finalIndex - 10;
        numberPage--;
        paginationNumber.innerHTML = numberPage;

        getJobsFromList(
            data,
            firstIndex,
            finalIndex,
            dataContainer,
            jobsContainer
        );

        checkPaginationButtons(firstIndex, previousBtn, nextBtn);

        clickListeners(data);
    };
};

// Show or hide pagination buttons depending on which page of the list is the user
const checkPaginationButtons = (firstIndex, previousBtn, nextBtn) => {
    if (firstIndex === 0) {
        previousBtn.classList.add("no-active");
    } else {
        previousBtn.classList.remove("no-active");
    }

    if (firstIndex >= 50) {
        nextBtn.classList.add("no-active");
    } else if (firstIndex > 0 && firstIndex < 50) {
        nextBtn.classList.remove("no-active");
    }
};

// Depending on the position of the pagination gets info from the data and print
const getJobsFromList = (
    data,
    firstIndex,
    finalIndex,
    dataContainer,
    jobsContainer
) => {
    let currentJobs = data.slice(firstIndex, finalIndex);
    dataContainer.innerHTML = printHTMLfromData(currentJobs);

    checkFavJobs(jobsArray);

    jobsContainer.appendChild(dataContainer);
};

export { paginationListJobs, checkPaginationButtons };
