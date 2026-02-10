let root = document.getElementById("root");
const correctUsername = "test";
const correctPassword = "1234";

// Loginsidan som en funktion så jag kan kalla på den igen
function loginPage() {
const loginText = document.createElement("h1");
loginText.innerText = "Logga in";
loginText.classList.add("loginText");
root.appendChild(loginText);

//  Användarnamn textinput
const nameLabel = document.createElement("label");
nameLabel.classList.add("textInputLabels");
nameLabel.innerText = "Användarnamn: "
nameLabel.setAttribute("for", "username");

let inputName = document.createElement("input");
inputName.id = "username";
inputName.type = "text";
inputName.placeholder = "Ditt användarnamn";

root.appendChild(nameLabel);
root.appendChild(inputName);

//  Lösenord input
const passwordLabel = document.createElement("label");
passwordLabel.classList.add("textInputLabels");
passwordLabel.innerText = "Lösenord: ";
passwordLabel.setAttribute("for", "passwordInput");

let passwordInput = document.createElement("input");
passwordInput.id = "passwordInput";
passwordInput.type = "password";
passwordInput.placeholder = "Ditt lösenord"

root.appendChild(passwordLabel);
root.appendChild(passwordInput);

const loginBtn = document.createElement("button");
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

// "Sida" om användaren skrivit fel inloggningsuppgifter
function wrongInputPage() {
    root.innerHTML = "";
    const message = document.createElement("h1");
    message.classList.add("message");
    message.innerText = "Något gick fel! Inkorrekt användarnamn eller lösenord.";
    root.appendChild(message);

   const returnBtn = document.createElement("button");
   returnBtn.type = "button";
   returnBtn.innerText = "Tillbaka";
   returnBtn.classList.add("returnBtn")
   root.appendChild(returnBtn);
   returnBtn.addEventListener("click", function(){
    root.innerHTML = "";
    loginPage();
   })
}

loginPage();

// "sida" om användaren loggat in med test 1234
function welcomePage() {
    root.innerHTML = "";
    const welcomeMessage = document.createElement("h1");
    welcomeMessage.innerText = "Välkommen, " + correctUsername + "!";
    root.appendChild(welcomeMessage);

    const logOutBtn = document.createElement("button");
    logOutBtn.type = "button";
    logOutBtn.innerText = "Logga ut";
    root.appendChild(logOutBtn);
    logOutBtn.addEventListener("click", function(){
    root.innerHTML = "";
    loginPage();
   })
}


//  lägg till styling
// ändra så att användaren kan skapa ett eget inlogg
// flera ska kunna skapa
// spara i localstore och töm när användaren loggar ut
// const och let?
// responsiv