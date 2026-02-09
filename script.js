let root = document.getElementById("root");
const correctUsername = "test";
const correctPassword = "1234";

function loginPage() {
let welcome = document.createElement("h1");
welcome.innerText = "Välkommen. Logga in för att fortsätta";
welcome.classList.add("welcome");
root.appendChild(welcome);

//  Användarnamn textinput
let nameLabel = document.createElement("label");
nameLabel.classList.add("textInputLabels");
nameLabel.innerText = "Användarnamn: "
nameLabel.setAttribute("for", "username");

let inputName = document.createElement("input");
inputName.id = "username";
inputName.type = "text";
inputName.placeholder = "Ditt användarnamn här";

root.appendChild(nameLabel);
root.appendChild(inputName);

//  Lösenord input
let passwordLabel = document.createElement("label");
passwordLabel.classList.add("textInputLabels");
passwordLabel.innerText = "Lösenord: ";
passwordLabel.setAttribute("for", "passwordInput");

let passwordInput = document.createElement("input");
passwordInput.id = "passwordInput";
passwordInput.type = "password";
passwordInput.placeholder = "Ditt lösenord här"

root.appendChild(passwordLabel);
root.appendChild(passwordInput);

// Loginknapp
let loginBtn = document.createElement("button");
loginBtn.type = "button";
loginBtn.classList.add("loginBtn");
loginBtn.innerText = "Logga in";
root.appendChild(loginBtn);

let typedUsername = inputName.value;
let typedPassword = passwordInput.value;

loginBtn.addEventListener("click", function() {
    let typedUsername = inputName.value;
    let typedPassword = passwordInput.value;

if (typedUsername === correctUsername && typedPassword === correctPassword) {
    welcomePage(typedUsername);
} else {
        wrongInputPage()
}
});
}

function wrongInputPage() {
    root.innerHTML = "";
    let message = document.createElement("h1");
    message.innerText = "Något gick fel! Fel användarnamn eller lösenord.";
    root.appendChild(message);

   let returnBtn = document.createElement("button");
   returnBtn.type = "button";
   returnBtn.innerText = "Tillbaka";
   root.appendChild(returnBtn);
   returnBtn.addEventListener("click", function(){
    root.innerHTML = "";
    loginPage();
   })
}

loginPage();

function welcomePage() {
    root.innerHTML = "";
}