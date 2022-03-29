import { jobContainerHtml } from "../view-home/job-container";

// Filter the data list following the checkbox filters
const checkboxFilters = (data) => {
    const checkboxFilters$$ = document.querySelectorAll(".checkbox-filter");

    checkboxFilters$$.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
            jobContainerHtml(filterCheckbox(data));
        });
    });
};

// Filter function to listen the checkbox changes and push into the array the data that the user choose
const filterCheckbox = (data) => {
    let jobsFiltered = [];

    const locationUsa = document.getElementById("location-usa");
    const locationEu = document.getElementById("location-EU");
    const locationWorld = document.getElementById("location-world");

    locationFilter(data, locationUsa, jobsFiltered);
    locationFilter(data, locationEu, jobsFiltered);
    locationFilter(data, locationWorld, jobsFiltered);

    if (jobsFiltered.length === 0) {
        jobsFiltered = data;
    }

    return jobsFiltered.sort().flat();
};

// Filter he data with the location variable
const locationFilter = (data, location, jobsFiltered) => {
    if (location.checked) {
        let jobFiltered = data.filter((job) =>
            job.candidate_required_location
                .toLowerCase()
                .includes(location.value)
        );
        jobsFiltered.push(jobFiltered);
    }
};

export { checkboxFilters };
