// Print the job data to the detail page
const printDetailPage = (jobInfo) => {
    // Create job detail container
    const detailContainer = document.createElement("div");
    detailContainer.setAttribute("id", "detail-container");
    detailContainer.classList.add("detail__container");
    detailContainer.innerHTML = jobInfo
        .map(
            (job) => `
          <div>
            <a href="#home" class="home-title">Home<i class="fa-solid fa-angles-right home-icon"></i></a>
          </div>
          <div>
            <div class="job-detail">
              <img src="${job.company_logo}"class="job-detail__img"/>
              <h3 class="job-detail__title">${job.company_name}</h3>
            </div>
            <div class="job-tags">
              ${
                  job.category
                      ? `<h4 class="job-category job-tags__tag">${job.category}</h4>`
                      : ``
              }
              ${
                  job.candidate_required_location
                      ? `<h4 class="job-location job-tags__tag">${job.candidate_required_location}</h4>`
                      : ``
              }
              ${
                  job.salary
                      ? `<h4 class="job-salary job-tags__tag">${job.salary}</h4>`
                      : ``
              }
              ${
                  job.job_type
                      ? `<h4 class="job-job_type job-tags__tag">${job.job_type}</h4>`
                      : ``
              }
            </div>
            <h2 class="job__title">${job.title}</h2>
          </div class="job-description">
            <p class="job-description__title">${job.description}</p>
            <a href="${
                job.url
            }" target="_blank" class="job-description__link">Visit the offer</a>
        `
        )
        .join("");

    document.body.appendChild(detailContainer);
};

export { printDetailPage };
