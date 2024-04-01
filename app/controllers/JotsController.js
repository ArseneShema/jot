import { AppState } from "../AppState.js";
import { Jot } from "../models/Jots.js";
import { jotsService } from "../services/JotsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";



export class JotsController {
    constructor() {

        console.log('Jots controller loaded')

        AppState.on('jot', this.createJot)
        AppState.on('activeJot', this.createJot)

    }

    createJot() {
        const jotFormData = getFormData(Jot)
    }

    // updateJot(id, title, content) {
    //     const 
    // }

    // deleteJot(id) {
    //     this.appState.deleteJot(id);
    //     this.noteView.displayJotsList(this.appState.getAllJots());
    // }

    // getAllJots() {
    //     const jots = this.appState.getAllJots();
    //     this.noteView.displayJotsList(jots);
    //     return jots;
    // }


}


