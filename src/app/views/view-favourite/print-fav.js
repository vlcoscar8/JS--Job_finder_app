let jobsArray = [];

const addJobsToArray = (jobInfo) => {
    let jobObject = {
        id: jobInfo.id,
        logo: jobInfo.company_logo,
        title: jobInfo.title,
        company: jobInfo.company_name,
        category: jobInfo.category,
        location: jobInfo.candidate_required_location,
        salary: jobInfo.salary,
    };

    jobsArray.push(jobObject);
};

// Set the favourite jobs page but not show till the "my jibs" button is clicked
const printFavouritesJobsPage = (jobsArray) => {
    const favouriteContainer = document.createElement("div");
    favouriteContainer.classList.add("fav-job-container");

    favouriteContainer.innerHTML = jobsArray
        .map(
            (job) => `
            <div  class="fav-job">
            <div class="job-info" id="${job.id}">
                <img src="${job.logo}" alt="" class="job-img"/>
                <div class="job-info__content">
                  <h2>${job.title}</h2>
                  <h3>${job.company}</h3>
                  <div class="job-tags">
                      ${
                          job.category
                              ? `<h4 class="job-category tag">${job.category}</h4>`
                              : `<h4></h4>`
                      }
                      ${
                          job.location
                              ? `<h4 class="job-location tag">${job.location}</h4>`
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
              
                <button class="remove-btn btn" id="${
                    job.id
                }"><i class="fa-solid fa-trash remove-icon"></i></button>
              </div>
            </div>
          `
        )
        .join("");

    document
        .getElementById("favourite-container")
        .appendChild(favouriteContainer);

    return favouriteContainer;
};

export { printFavouritesJobsPage, addJobsToArray, jobsArray };
