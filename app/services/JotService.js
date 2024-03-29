import { AppState } from "../AppState.js";



class JotService {
    setActiveJot(jotId) {
        console.log('set Active Service', jotId); // 🧪
        const selectedJot = AppState.jot.find(jot => jot.id == jotId)
        console.log(selectedJot); // 🧪 did it select the correct one?
        selectedJot.startTime = new Date() // gets the time of RIGHT NOW!
        AppState.activeJot = selectedJot
        console.log('appstate active', AppState.activeJot);
    }
}