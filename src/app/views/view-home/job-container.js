import { clickListeners } from "../../listeners/click-listeners";
import { paginationListJobs } from "./pagination-list";

let firstIndex = 0;
let finalIndex = 10;
// Get the data and print the list on the home page
const jobContainerHtml = (data) => {
    // Create container to insert the data
    const dataContainer = document.createElement("div");
    dataContainer.setAttribute("id", "jobs-container");

    const jobsContainer = document.getElementById("jobsList-container");
    jobsContainer.innerHTML = "";

    firstIndex = 0;
    finalIndex = 10;
    let currentJobs = data.slice(firstIndex, finalIndex);
    console.log(currentJobs);

    dataContainer.innerHTML = printHTMLfromData(currentJobs);
    jobsContainer.appendChild(dataContainer);

    // Listen all the click event on the main page
    paginationListJobs(
        dataContainer,
        jobsContainer,
        data,
        firstIndex,
        finalIndex
    );

    clickListeners(data);
};

const printHTMLfromData = (currentJobs) => {
    const dataContent = currentJobs
        .map(
            (job) => `
                        <div class="job-container">
                          <div class="job-info" id="${job.id}">
                            <img src="${
                                job.company_logo
                            }" alt="" class="job-img"/>
                            <div class="job-description">
                                <h3 class="job-title">${job.title}</h3>
                                <h3 class="company-title">${
                                    job.company_name
                                }</h3>
                                <div class="job-tags">
                                  ${
                                      job.category
                                          ? `<h4 class="job-category tag">${job.category}</h4>`
                                          : `<h4></h4>`
                                  }
                                  ${
                                      job.candidate_required_location
                                          ? `<h4 class="job-location tag">${job.candidate_required_location}</h4>`
                                          : `<h4></h4>`
                                  }
                                  ${
                                      job.salary
                                          ? `<h4 class="job-salary tag">${job.salary}</h4>`
                                          : `<h4></h4>`
                                  }
                                </div>
                            </div>
                          </div>
                          <div class="job-btn-container">
                          <i class="fa-solid fa-bookmark favourites-btn" id="${
                              job.id
                          }"></i>
                          </div>
                        </div>
                        `
        )
        .join("");

    return dataContent;
};

export { jobContainerHtml, printHTMLfromData };
