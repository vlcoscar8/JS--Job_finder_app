import { jobContainerHtml } from "../view-home/job-container";

const searchJobInput = (data) => {
    const searchBarInput = document.getElementById("search-job");

    searchBarInput.addEventListener("input", () => {
        let jobsFiltered = [];

        searchBarInput.value === ""
            ? (jobsFiltered = data)
            : (jobsFiltered = data.filter(
                  (job) =>
                      job.category
                          .toLowerCase()
                          .includes(searchBarInput.value) ||
                      job.tags.includes(searchBarInput.value)
              ));

        jobContainerHtml(jobsFiltered);
    });
};

export { searchJobInput };
