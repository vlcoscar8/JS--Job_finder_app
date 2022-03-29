import { fetchJobsFromCompanies } from "../../api/call-to-api-company";
import { CompanyDetailClass } from "../../model/company";

const showCompanyDetail = async (tag) => {
    window.location.hash = "#companyDetail";
    const companyData = await fetchJobsFromCompanies(
        tag.parentNode.parentNode.getAttribute("id")
    );
    console.log(companyData);

    const companyDetailContainer = document.getElementById(
        "companyDetail-container"
    );

    companyDetailContainer.innerHTML = `
        <div class="company-detail__header ">
          <img src="${companyData[0].logo}" class="company-logo"/>
          <h2>${companyData[0].name}</h2>
        </div>
        <div class="job-offers__title">Job offers:</div>
        <div id="company-jobs" class="company-jobs__container"></div>
    `;

    let arrayJobsDetail = [];

    companyData.forEach((job) => {
        printCompanyJob(job, arrayJobsDetail);
    });

    console.log(arrayJobsDetail);
    ///////////////// Evento click /////////////////////

    const btnDescription = document.querySelectorAll(".company-detail-btn");

    btnDescription.forEach((btn) => {
        btn.addEventListener("click", () => {
            window.location.hash = "detail";
            window.scrollTo(0, 0);

            const jobSelected = arrayJobsDetail.find((el) => {
                return el.id === parseInt(btn.getAttribute("id"));
            });

            if (document.getElementById("detail-container")) {
                document.getElementById("detail-container").remove();
            }

            const detailContainer = document.createElement("div");
            detailContainer.setAttribute("id", "detail-container");
            detailContainer.classList.add("detail__container");

            detailContainer.innerHTML = `
              <div>
                <a href="#home" class="home-title">Home<i class="fa-solid fa-angles-right home-icon"></i></a>
              </div>
              <div>
                <div class="job-detail">
                  <img src="${jobSelected.image}"class="job-detail__img"/>
                  <h3 class="job-detail__title">${jobSelected.name}</h3>
                </div>
                <div class="job-tags">
                    <h4 class="job-category job-tags__tag">${jobSelected.category}</h4>
                    <h4 class="job-category job-tags__tag">${jobSelected.location}</h4>
                </div>
                <h2 class="job__title">${jobSelected.jobTitle}</h2>
              </div class="job-description">
                <p class="job-description__title">${jobSelected.description}</p>
                <a href="${jobSelected.url}" target="_blank" class="job-description__link">Visit the offer</a>
            `;
            document.body.appendChild(detailContainer);
        });
    });
};

const printCompanyJob = (job, arrayJobsDetail) => {
    const companyDetail = new CompanyDetailClass(
        job.id,
        job.name,
        job.logo,
        job.jobTitle,
        job.category,
        job.location,
        job.description,
        job.url
    );

    arrayJobsDetail.push(companyDetail);

    const jobTag = document.createElement("div");
    jobTag.classList.add("job-tag");
    jobTag.classList.add("job-info");
    jobTag.setAttribute("id", `${companyDetail.getCompanyId()}`);

    const jobDetailContent = `
        <h3 class="job-tag__title">${companyDetail.getJobTitle()}</h3>
        <div class="company-tag__container">
          <h4 class="tag">${companyDetail.getCategory()}</h4>
          <h4 class="tag">${companyDetail.getLocation()}</h4>
        </div>
        <div class="btn-description">
        <button class="offers-btn company-detail-btn" id="${companyDetail.getCompanyId()}">See description</button>
        </div>
      `;

    jobTag.innerHTML = jobDetailContent;

    document.getElementById("company-jobs").appendChild(jobTag);
};

export { showCompanyDetail };
