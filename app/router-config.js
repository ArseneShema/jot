// import { JotController } from "./controllers/ExamplesController.js";
import { JotController } from "./controllers/JotController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [JotController],
    view: 'app/views/Jotview.html'


  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])