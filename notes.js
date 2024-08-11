
 //------------------Script for Notes Page---------------------
 const nameInput = document.getElementById("nameInput")
 nameInput.addEventListener('keydown', function (e) {
    //check if "enter" key was pressed after typing name
  
    if (e.key === "Enter") {
        const name =nameInput.value;
       alert("Welcome!")
       document.getElementById("greetLine").innerHTML ="Hello " + name +"!";
    }
});