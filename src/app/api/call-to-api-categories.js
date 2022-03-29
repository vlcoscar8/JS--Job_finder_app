// Use the api to get all the categories
const getCategories = async () => {
    let response = await fetch(
        "https://remotive.io/api/remote-jobs/categories"
    );
    let categoriesData = await response.json();

    return categoriesData.jobs;
};

// Use the api data getted before and filteres with  the input info
const getJobsByCategories = async (jobFilter) => {
    let response = await fetch(
        `https://remotive.io/api/remote-jobs?category=${jobFilter}`
    );
    let jobByCategory = await response.json();

    return jobByCategory.jobs;
};

export { getCategories, getJobsByCategories };
