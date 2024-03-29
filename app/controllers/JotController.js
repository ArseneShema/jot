import { Pop } from "../utils/Pop.js"

// Public
export class JotController {
  constructor() {
    console.log('This is the Jot Controller')
  }

  testButton() {
    Pop.success('The button Works 😎')
  }
}