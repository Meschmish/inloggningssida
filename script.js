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
root.appendChild(nameLabel);

let inputName = document.createElement("input");
inputName.id = "username";
inputName.type = "text";
inputName.placeholder = "Ditt användarnamn";
root.appendChild(inputName);

//  Lösenord input
const passwordLabel = document.createElement("label");
passwordLabel.classList.add("textInputLabels");
passwordLabel.innerText = "Lösenord: ";
passwordLabel.setAttribute("for", "passwordInput");
root.appendChild(passwordLabel);

let passwordInput = document.createElement("input");
passwordInput.id = "passwordInput";
passwordInput.type = "password";
passwordInput.placeholder = "Ditt lösenord"
root.appendChild(passwordInput);

const createAccountLink = document.createElement("a");
createAccountLink.classList.add("createAccountLink");
createAccountLink.innerText = "Skapa ett konto";
createAccountLink.href = "#";
createAccountLink.addEventListener("click", function() {
    createAccountPage();
})
root.appendChild(createAccountLink);

const loginBtn = document.createElement("button");
loginBtn.type = "button";
loginBtn.classList.add("loginBtn");
loginBtn.innerText = "Logga in";
root.appendChild(loginBtn);

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

function createAccountPage() {
    root.innerHTML = "";
    const creatAccountText = document.createElement("h1");
    creatAccountText.innerText = "Skapa ett konto:";
    creatAccountText.classList.add("headerCreateAccount");
    root.appendChild(creatAccountText);

    const createUsernameLabel = document.createElement("label");
    createUsernameLabel.classList.add("createLabels");
    createUsernameLabel.innerText = "Välj användarnamn (max 10 karaktärer)";
    createUsernameLabel.setAttribute("for", "createUserNameInput");
    root.appendChild(createUsernameLabel);

    let createUsernameInput = document.createElement("input");
    createUsernameInput.type ="text";
    createUsernameInput.id ="createUsernameInput";
    root.appendChild(createUsernameInput);

    const createPasswordLabel = document.createElement("label");
    createPasswordLabel.classList.add("createLabels");
    createPasswordLabel.innerText = "Välj ett lösenord. (minst 6 karaktärer)";
    createPasswordLabel.setAttribute("for", "createUSernamePassword");
    root.appendChild(createPasswordLabel);

    let createUsernamePassword = document.createElement("input");
    createUsernamePassword.type = "password";
    createUsernamePassword.id = "createPasswordInput";
    root.appendChild(createUsernamePassword);

    const createAccountBtn = document.createElement("button");
    createAccountBtn.type = "button";
    createAccountBtn.classList.add("createAccountBtn");
    createAccountBtn.innerText = "Skapa konto";
    root.appendChild(createAccountBtn);
    createAccountBtn.addEventListener("click", function() {
        alert("Konto skapat! Testa att logga in!")
        root.innerHTML = ""
        loginPage();
    })
}


//  lägg till styling
// ändra så att användaren kan skapa    ett eget inlogg
// flera ska kunna skapa - array
// spara i localstore och töm när användaren loggar ut
// 
// responsiv