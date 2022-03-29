import { showCompanyDetail } from "./print-companyDetail";

const printCompany = (data) => {
    let companies = [];

    data.forEach((job) => {
        let jobData = {
            name: job.company_name,
            image: job.company_logo,
            id: job.id,
        };

        companies.push(jobData);
    });

    let companyArr = [...new Set(companies.map((el) => el.name))];

    const companiesNice = companies.filter((company) => {
        for (let i = 0; i < companyArr.length; i++) {
            if (companyArr.includes(company.name)) {
                companyArr.splice(i, 1);
                return company;
            }
        }
    });

    let firstIndex = 0;
    let lastIndex = 15;
    let dataToPrint = companiesNice.slice(firstIndex, lastIndex);

    insertHTMLfromData(dataToPrint, firstIndex, lastIndex, companiesNice);
};

const insertHTMLfromData = (
    dataToPrint,
    firstIndex,
    lastIndex,
    companiesNice
) => {
    const companyContainer = document.getElementById("company-container");
    companyContainer.classList.add("company__page");

    let contentCompany = dataToPrint
        .map(
            (company) => `
            <div class="card" id="${company.name}">
                <div class="company-tag card__side card__side--front" ">
                    <img src="${company.image}" alt="" class="job-img"/>
                    <div>
                        <h3 class="company-name">${company.name}</h3>
                    </div>
                </div>
                <div class="card__side card__side--back">
                    <button class="offers-btn"><h3>See jobs offers</h3></button>
                </div>
            </div>
        `
        )
        .join("");

    companyContainer.innerHTML = `
    <a href="#home" class="home-title-fav">Home<i class="fa-solid fa-angles-right home-icon"></i></a>
    <div class="company__container">
    ${contentCompany}
    </div>
    <div class="pagination">
        <button id="previous-btn-companies"><i class="fa-solid fa-square-caret-left arrow"></i></button>
        <button id="next-btn-companies"><i class="fa-solid fa-square-caret-right arrow"></i></button>
    </div>
  `;

    if (lastIndex === 60) {
        document
            .getElementById("next-btn-companies")
            .classList.add("no-active");
    }

    if (firstIndex === 0) {
        document
            .getElementById("previous-btn-companies")
            .classList.add("no-active");
    }

    document.getElementById("next-btn-companies").onclick = () => {
        increasePaginationCompanies(companiesNice, firstIndex, lastIndex);
    };

    document.getElementById("previous-btn-companies").onclick = () => {
        reducePaginationCompanies(companiesNice, firstIndex, lastIndex);
    };

    const companyTag = document.querySelectorAll(".offers-btn");

    companyTag.forEach((tag) => {
        tag.addEventListener("click", () => showCompanyDetail(tag));
    });
};

const increasePaginationCompanies = (companiesNice, firstIndex, lastIndex) => {
    firstIndex = firstIndex + 15;
    lastIndex = lastIndex + 15;

    let dataToPrint = companiesNice.slice(firstIndex, lastIndex);

    insertHTMLfromData(dataToPrint, firstIndex, lastIndex, companiesNice);
};

const reducePaginationCompanies = (companiesNice, firstIndex, lastIndex) => {
    firstIndex = firstIndex - 15;
    lastIndex = lastIndex - 15;

    let dataToPrint = companiesNice.slice(firstIndex, lastIndex);

    insertHTMLfromData(dataToPrint, firstIndex, lastIndex, companiesNice);
};

export { printCompany };
