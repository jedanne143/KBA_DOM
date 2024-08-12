//-------------Script for Form Page-------------------

const username = document.getElementById("name");
let pw = document.getElementById("pw");
let pw2 = document.getElementById("pw2")
let error = document.getElementById("errorResult")
let correct = [];


document.getElementById("submit").onclick = function (e) {
    e.preventDefault() ;
 // Clear any existing error messages
     error.innerHTML = "";
     username.style.backgroundColor = "";
     pw.style.backgroundColor = "";
     pw2.style.backgroundColor = "";
     correct = []
    
//check Name
    const nameRegex = /^[a-zA-Z]{4,12}$/;

    if(nameRegex.test(username.value)){
        correct.push("correct")
    } else if (username.value.trim() === "") {
            let eName = document.createElement("p");
            eName.innerText = "Please enter your name";
            error.appendChild(eName);
            username.style.backgroundColor = "#E5C4D3";
           
        } else {  
            let eName = document.createElement("p");
            eName.innerText = "Invalid name. Please ensure it contains only letters and is 4 to 12 characters long.";
            error.appendChild(eName);
            username.style.backgroundColor = "#E5C4D3";
        }
    
  
//check passcode
    const pwRegex = /\d{4}/;
    
    if(pwRegex.test(pw.value)){
       correct.push("correct")
    } else if (pw.value.trim() === "") {
            let ePw = document.createElement("p");
            ePw.innerText = "Please enter your passcode";
            error.appendChild(ePw);
            pw.style.backgroundColor = "#E5C4D3";
           
        } else {  
            let ePw = document.createElement("p");
            ePw.innerText = "Invalid passcode. Please ensure it's a combination of 4 digits.";
            error.appendChild(ePw);
            username.style.backgroundColor = "#E5C4D3";
        }

// check passcode 2
    
    if((pwRegex.test(pw2.value)) && pw2.value === pw.value){
        correct.push("correct")
        console.log(correct)
    } else if (pw2.value.trim() === "") {
            let ePw2 = document.createElement("p");
            ePw2.innerText = "Please re-enter your passcode";
            error.appendChild(ePw2);
            pw2.style.backgroundColor = "#E5C4D3";
        
        } else if (pw.value !== pw2.value){
            let ePw2 = document.createElement("p");
            ePw2.innerText = "Both passcodes should be the same";
            error.appendChild(ePw2);
            pw2.style.backgroundColor = "#E5C4D3";  
        } else {  
            let ePw2 = document.createElement("p");
            ePw2.innerText = "Invalid passcode2. Please ensure it's a combination of 4 digits.";
            error.appendChild(ePw2);
            ePw2.style.backgroundColor = "#E5C4D3";
        }

    //to change content
    if (correct.length === 3) {
        window.location.href ="notes.html"
    } 
    
 }

