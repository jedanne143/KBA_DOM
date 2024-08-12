
 //------------------Script for Notes Page---------------------
 const nameInput = document.getElementById("nameInput")
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



