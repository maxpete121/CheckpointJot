import { NoteController } from "./controllers/NoteController.js"

class App {

noteController = new NoteController()

}


const app = new App()
// @ts-ignore
window.app = app
