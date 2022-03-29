import { printCompany } from "../views/view-companies/print-company";

const companyListener = (data) => {
    document.getElementById("company-btn").onclick = () => {
        window.location.hash = "#company";
        // Logic POO
        printCompany(data);
    };
};

export { companyListener };
