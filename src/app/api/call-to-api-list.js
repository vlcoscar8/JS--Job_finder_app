// Get data from API
const getData = async () => {
    // toggleSpinner();
    let response = await fetch("https://remotive.io/api/remote-jobs?limit=60");
    let data = await response.json();

    // Return the jobs data to iterate later with map and extract the information its needed
    return data.jobs;
};

export { getData };
