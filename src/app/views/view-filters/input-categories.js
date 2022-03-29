import {
    getCategories,
    getJobsByCategories,
} from "../../api/call-to-api-categories";
import { jobContainerHtml } from "../view-home/job-container";
import { checkboxFilters } from "./input-checkbox";

// Filter the data list following the select option the user has choosen
const selectOptions = async (data) => {
    const selectOptions$$ = document.getElementById("select-options");

    const categoriesData = await getCategories();

    selectOptions$$.addEventListener("change", async () => {
        const jobFilterByCategorie = categoriesData.find(
            (job) => job.name.toLowerCase() === selectOptions$$.value
        ).slug;

        const result = await getJobsByCategories(jobFilterByCategorie);

        jobContainerHtml(result);

        checkboxFilters(result);
    });

    // Listen the filter checkbox options
    checkboxFilters(data);
};

export { selectOptions };
