import { generateId } from "../utils/GenerateId.js"



export class Notes{

    constructor(data){
        this.Id = generateId()
        this.name = data.name
        this.date = new Date()
        this.color = data.color
        this.body = data.body
        this.updateTime = new Date()
    }

    get ShortDate(){
        return this.date.toLocaleDateString()
    }

    get ShortUpdate(){
        return this.updateTime.toLocaleDateString('en-US', {month: 'short', weekday: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'})
    }

    get NoteTemplate(){
        return`
        <div style="background-color: ${this.color};" class="text-light d-flex p-2 mt-2 noteCard">
        <h5 class="me-2">${this.name}</h5>
        <h5>Created:</h5>
        <h5 class="me-2">${this.ShortDate}</h5>
        <button onclick="app.noteController.lookNote('${this.Id}')">Open</button>
        <button class="ms-2" onclick="app.noteController.deleteNote('${this.Id}')">Delete</button>
        <h5>Updated:</h5>
        <h5>${this.ShortUpdate}</h5>
        </div> `
    }

    get newNoteFormTemplate(){
        return`
        <form onsubmit="app.noteController.newNote()" class="formBackground">
        <div class="mt-2 form-control bg-white">
          <label class="fw-bold" for="">Name:</label>
          <input type="text" min="3" maxlength="15" name="name" required placeholder="Name of Note...">
        </div>

        <div class="mt-2 form-control bg-white">
          <label class="fw-bold" for="">Note Color:</label>
          <input type="color" required name="color" placeholder="Pick a color...">
        </div>
        <div class="mt-2 form-control bg-white align-items-baseline">
          <label class="fw-bold" for="">Your Note:</label>
          <textarea required name="body" cols="60" rows="2" placeholder="Put your note here..."></textarea>
        </div>
        <button class="bg-success mt-2">CREATE</button>
      </form>
        `
    }

    get newNoteTemplate(){
        return`
        <div>
        <h4>${this.name}</h4>
        <textarea name="Note" id="note-type" cols="50" rows="20">${this.body}</textarea>
        </div>
        <button onclick="app.noteController.saveNote()">Save</button>
        <button onclick="app.noteController.closeNote()">Close</button>
        `
    }

    get noteClosed(){
        return`
        <h3>No note selected</h3>
        `
    }
}