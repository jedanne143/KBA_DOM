
 //------------------Script for Notes Page---------------------
 const nameInput = document.getElementById("nameInput")

//  Event Listener for name
 nameInput.addEventListener('keydown', function (e) {
    //check if "enter" key was pressed after typing name
  
    if (e.key === "Enter") {
        const name =nameInput.value;
       document.getElementById("greetLine").innerHTML ="Hello " + name +"!";
       const dateToday = document.getElementById("currentDate")
       //function for formatted date
       function getDate() {
        const today = new Date();
    
        // Define options for formatting
        const options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        };

        // Format the date using toLocaleDateString with the specified options
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
        note.classList.add('note');
        

        // Create and append title element
        const title = document.createElement('p');
        title.classList.add('note-title');
        title.textContent = noteTitle;
        title.style.fontWeight = "bold"
        title.style.fontSize = "15px"
        note.appendChild(title);

        // Create and append note text element
        const text = document.createElement('p');
        text.textContent = noteText;
        text.style.fontSize = "14px"
        note.appendChild(text);
        addedNoteContainer.appendChild(note);

        // Clear input fields
        document.getElementById('noteTitle').value = '';
        document.getElementById('noteText').value = '';
    } else {
        alert('Please enter both a title and a note.');
    }
});