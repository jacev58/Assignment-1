let sidebar = document.querySelector(".sidebar");
let newNoteButton = document.querySelector(".newnote");
let addNewNote = document.querySelector(".textbox");
let notesList = document.querySelector("ul");




newNoteButton.addEventListener("click", newNote);
function newNote() {
    addNewNote.innerHTML=`<textarea class="textArea" rows="20" cols="140"></textarea>`;
    addNewNote.innerHTML+=`<button class="saveNote">Save</button>`;
    addNewNote.innerHTML+=`<button class="cancelNote">Cancel</button>`;
    let textArea = document.querySelector(".textArea");
    let saveNote = document.querySelector(".saveNote");
    let cancelNote = document.querySelector(".cancelNote");
    textArea.style.width="70%";
    textArea.style.marginTop="50px";
    textArea.style.marginBottom="20px";
    textArea.style.borderRadius="10px";
    saveNote.style.backgroundColor="green";
    saveNote.style.color="white";
    saveNote.style.borderRadius="10px";
    saveNote.style.marginLeft="220px";
    saveNote.style.padding="10px";
    saveNote.style.float="left";
    cancelNote.style.backgroundColor="red";
    cancelNote.style.marginLeft="30px";
    cancelNote.style.padding="10px";
    cancelNote.style.color="white";
    cancelNote.style.borderRadius="10px";
    saveNote.addEventListener("click", save);
    function save() {
        let noteTitle = textArea.value;
        noteTitle = noteTitle.split('\n');
        if (noteTitle.length >= 3) {
           notesList.innerHTML+=`<li>${noteTitle[0] + " " + noteTitle[1]}</li>` 
        }
        else {
            notesList.innerHTML+=`<li>${noteTitle[0]}</li>`;
        }   
    }
    cancelNote.addEventListener("click", cancel);
    function cancel() {
        addNewNote.innerHTML=``;
    }
}



