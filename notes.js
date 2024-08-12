 //------------------Script for Notes Page---------------------
 const nameInput = document.getElementById("nameInput")

//  Event Listener for name
 nameInput.addEventListener('keydown', function (e) {
    //check if "enter" key was pressed after typing name
  
    if (e.key === "Enter") {
        const name =nameInput.value;
       document.getElementById('greetLine').innerHTML ="Hello " + name +"!";
       const dateToday = document.getElementById("currentDate")
       //function for formatted date
       function getDate() {
        const today = new Date();
    
        const options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        };

        return today.toLocaleDateString(undefined, options);
    }

       dateToday.textContent = getDate();
    }
});

// Event Listener for create note button
document.getElementById('createNote').addEventListener('click', function() {
    const noteTitle = document.getElementById('noteTitle').value.trim();
    const noteText = document.getElementById('noteText').value.trim();
  
    if (noteTitle && noteText) {
        const addedNoteContainer = document.getElementById('addedNoteContainer');

        // Create note element
        const note = document.createElement('div');
        note.classList.add('note-holder');
        

        // Create title
        const title = document.createElement('p');
        title.classList.add('note');
        title.textContent = noteTitle;
        title.style.fontWeight = 'bold'
        note.appendChild(title);

        //Create delete button
        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'x';
        title.appendChild(deleteButton)
        deleteButton.style.fontWeight = 'bold'
        deleteButton.className= 'deleteNote'

        // Create text
        const text = document.createElement('p');
        text.textContent = noteText;
        text.classList.add('note');
        note.appendChild(text);
        addedNoteContainer.appendChild(note);

        // Clear input fields
        document.getElementById('noteTitle').value = '';
        document.getElementById('noteText').value = '';

        deleteButton.addEventListener('click', function() {
            addedNoteContainer.removeChild(note)
        })
    } else {
        alert('Please enter both a title and a note.');
    }
});


