const fetchJobsFromCompanies = async (company) => {
    const API_URL = `https://remotive.io/api/remote-jobs?company_name=${company}`;

    let response = await fetch(API_URL);

    let data = await response.json();

    let jobsArrayFromCompany = [];

    data.jobs.forEach((job) => {
        let jobFromCompany = {
            id: job.id,
            name: job.company_name,
            logo: job.company_logo,
            jobTitle: job.title,
            category: job.category,
            location: job.candidate_required_location,
            description: job.description,
            url: job.url,
        };
        jobsArrayFromCompany.push(jobFromCompany);
    });

    return jobsArrayFromCompany;
};

export { fetchJobsFromCompanies };
