import { AppState } from "../AppState.js";
import { noteService } from "../services/NoteService.js";
import { getFormData } from "../utils/FormHandler.js";



export class NoteController{
    constructor(){
        this.drawNotes()
        // this.closeNote()
    }

    drawNotes(){
        const allNotes = AppState.Notes
        let template = ''
        allNotes.forEach(note => template += note.NoteTemplate)
        document.getElementById('note-view').innerHTML = template
    }

    drawNoteType(){
        const wantNote = AppState.ActiveNote
        let content = wantNote.newNoteTemplate
        document.getElementById('open-note').innerHTML = content
    }

    lookNote(noteId){
        noteService.lookNote(noteId)
        this.drawNoteType()
        this.drawNotes()
    }

    openMake(){
        const noteCreate = AppState.Notes
        let content = ''
        noteCreate.find(note => content = note.newNoteFormTemplate)
        document.getElementById('new-note-form').innerHTML = content
    }

    closeForm(){
        const close = AppState.Notes
        let content = ''
        document.getElementById('new-note-form').innerHTML = content
    }

    saveNote(){
        let saveNote = document.getElementById('note-type').value
        const save = AppState.ActiveNote
        save.body = saveNote
    }

    deleteNote(noteId){
        if(window.confirm('Are you sure you want to delete this note?')){
            noteService.deleteNote(noteId)
        }
        this.drawNotes()
    }

    newNote(){
        event.preventDefault()
        const form = event.target
        const formData = getFormData(form)
        noteService.newNote(formData)
        this.drawNotes()
        this.closeForm()
    }


    closeNote(){
        if(window.confirm('Make sure your note is saved or all data will be lost...')){
            console.log('why no work')
            const content = AppState.Notes
            let noContent = ''
            content.find(none => noContent = none.noteClosed)
            document.getElementById('open-note').innerHTML = noContent
        }
    }
}