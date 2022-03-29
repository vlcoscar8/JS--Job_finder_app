import { detailListener } from "./detail-listener";
import { favouriteListener, showFavouritesJobs } from "./fav-listener";
import { jobsArray } from "../views/view-favourite/print-fav";
import { companyListener } from "./company-listener";

// Function to collect all the listeners on the main page
const clickListeners = (data) => {
    detailListener(data);
    favouriteListener(data);
    showFavouritesJobs(data, jobsArray);
    companyListener(data);
};

export { clickListeners };
