import { fetchJobsFromCompanies } from "../../api/call-to-api-company";
import { CompanyDetailClass } from "../../model/company";

const showCompanyDetail = async (tag) => {
    console.log(tag.parentNode);
    window.location.hash = "#companyDetail";
    const companyData = await fetchJobsFromCompanies(
        tag.parentNode.parentNode.getAttribute("id")
    );

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

    companyData.forEach((job) => {
        printCompanyJob(job);
    });
};

const printCompanyJob = (job) => {
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
        <button class="offers-btn">See description</button>
        </div>
       
      `;

    jobTag.innerHTML = jobDetailContent;

    document.getElementById("company-jobs").appendChild(jobTag);

    const btnDescription = document.querySelectorAll(".btn-description");

    btnDescription.forEach((btn) => {
        btn.addEventListener("click", () => {
            window.location.hash = "detail";
            window.scrollTo(0, 0);
            const detailContainer = document.createElement("div");
            detailContainer.setAttribute("id", "detail-container");
            detailContainer.classList.add("detail__container");
            detailContainer.innerHTML = `
          <div>
            <a href="#home" class="home-title">Home<i class="fa-solid fa-angles-right home-icon"></i></a>
          </div>
          <div>
            <div class="job-detail">
              <img src="${companyDetail.getCompanyImage()}"class="job-detail__img"/>
              <h3 class="job-detail__title">${companyDetail.getCompanyName()}</h3>
            </div>
            <div class="job-tags">
                <h4 class="job-category job-tags__tag">${companyDetail.getCategory()}</h4>
                <h4 class="job-category job-tags__tag">${companyDetail.getLocation()}</h4>
            </div>
            <h2 class="job__title">${companyDetail.getJobTitle()}</h2>
          </div class="job-description">
            <p class="job-description__title">${companyDetail.getDescription()}</p>
            <a href="${companyDetail.getUrl()}" target="_blank" class="job-description__link">Visit the offer</a>
        `;
            document.body.appendChild(detailContainer);
        });
    });
};

export { showCompanyDetail };
