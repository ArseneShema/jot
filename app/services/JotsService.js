import { AppState } from "../AppState.js";
import { Jot } from "../models/Jots.js"
import { loadState, saveState } from "../utils/Store.js";



class JotsService {
    constructor() {

        this.jots = [];
    }

    // loadJots() {
    //     const fetchJotsFromLocalStorage = loadState('jots'),
    //         AppState,Jots = fetchJotsFromLocalStorage
    // }

    // createJot(jotData) {
    //     // Logic to create a new jot in the data source
    //     // For example, adding a jot to a database or creating a new jot via an API request
    //     const newJot = new Jot(jotData);
    //     this.jots.push(newJot);
    //     return newJot;
    // }

    // updateJot(updatedJotData) {
    //     const  = AppState.activeJot
    // }

    fetchJotsFromExternalDataSource() {
        // Simulated logic to fetch jots from an external source
        // This could be replaced with actual database or API calls
        // Return the fetched jots data
    }

    // Other service methods related to interacting with the external data source can be added here
}

export const jotsService = new JotsService()