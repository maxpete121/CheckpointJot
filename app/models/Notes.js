import { generateId } from "../utils/GenerateId.js"



export class Notes{

    constructor(data){
        this.Id = generateId()
        this.name = data.name
        this.date = new Date(data.date)
        this.body = data.body
    }

    get ShortDate(){
        return this.date.toLocaleDateString()
    }
    get NoteTemplate(){
        return`
        <div class="bg-dark text-light col-2 d-flex p-2 mt-2">
        <h5 class="me-2">${this.name}</h5>
        <h5 class="me-2">${this.ShortDate}</h5>
        <button onclick="app.noteController.lookNote('${this.Id}')">Open</button>
    </div>
        `
    }

    get newNoteTemplate(){
        return`
        <h4>${this.name}</h4>
        <textarea name="Note" id="note-type" cols="30" rows="20">${this.body}</textarea>
        `
    }
}