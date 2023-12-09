import { generateId } from "../utils/GenerateId.js"

export class formTemp{
  constructor(){
    this.form
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
      <select type="" required name="color">
      <option value="blue">Blue</option>
      <option value="black">Black</option>
      <option value="darkgreen">Green</option>
      <option value="purple">Purple</option>
      </select>
    </div>
    <div class="mt-2 form-control bg-white align-items-baseline">
      <label class="fw-bold" for="">Your Note:</label>
      <textarea required name="body" cols="60" rows="2" placeholder="Put your note here..."></textarea>
    </div>
    <button class="bg-success mt-2">CREATE</button>
  </form>
    `
}
}

export class Notes{

    constructor(data){
        this.Id = generateId()
        this.name = data.name
        this.date = new Date()
        this.color = data.color
        this.body = data.body
        this.updateTime = new Date()
        this.number = data.number
    }

    get ShortDate(){
        return this.date.toLocaleDateString()
    }

    get ShortUpdate(){
    return this.updateTime.toLocaleDateString('en-US', {month: 'short', weekday: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'})
      
    
    }

    get NoteTemplate(){
        return`
        <div style="background-color: ${this.color};" class="text-light d-flex p-2 mt-2 noteCard justify-content-evenly align-items-center">
        <span>${this.number}</span>
        <span>
        <h6>Name:</h6>
        <h6 class="me-2">${this.name}</h6>
        </span>
        <span>
        <h5>Created:</h5>
        <h5 class="me-2">${this.ShortDate}</h5>
        </span>
        <span class="">
        <h5>Updated:</h5>
        <h5>${this.ShortUpdate}</h5>
        </span>
        <span>
        <button onclick="app.noteController.lookNote('${this.Id}')">Open</button>
        <button class="ms-2" onclick="app.noteController.deleteNote('${this.Id}')">Delete</button>
        </span>
        </div> `
    }



    get newNoteTemplate(){
        return`
        <div>
        <h4>${this.name}</h4>
        <textarea name="Note" id="note-type" cols="50" rows="20">${this.body}</textarea>
        </div>
        <button onclick="app.noteController.saveNote()">Save</button>
        <button>Clear</button>
        <button onclick="app.noteController.closeNote()">Close</button>
        `
    }

    get noteClosed(){
        return`
        <h3>No note selected</h3>
        `
    }
}