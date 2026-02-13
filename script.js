let root = document.getElementById("root");

function loginPage() {
const loginText = document.createElement("h1");
loginText.innerText = "Logga in";
loginText.classList.add("loginText");
root.appendChild(loginText);

const nameLabel = document.createElement("label");
nameLabel.classList.add("textInputLabels");
nameLabel.innerText = "Användarnamn: "
nameLabel.setAttribute("for", "username");
root.appendChild(nameLabel);

let nameInput = document.createElement("input");
nameInput.id = "username";
nameInput.type = "text";
nameInput.placeholder = "Ditt användarnamn";
root.appendChild(nameInput);

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
        let newInputName = nameInput.value;
        let newInputPassword = passwordInput.value;

        let users = JSON.parse(localStorage.getItem("user")) || [];

        for (i = 0; i < users.length; i++) {
             if (users[i].username === newInputName && users[i].password === newInputPassword) {
            welcomePage(newInputName);
                return;
            }
        }

        wrongInputPage();
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

function welcomePage(username) {
    root.innerHTML = "";
    const welcomeMessage = document.createElement("h1");
    welcomeMessage.innerText = "Välkommen, " + username + "!";  
    welcomeMessage.classList.add("welcomeMessage");  
    root.appendChild(welcomeMessage);


    const logOutBtn = document.createElement("button");
    logOutBtn.type = "button";
    logOutBtn.innerText = "Logga ut";
    logOutBtn.classList.add("logOutBtn");
    root.appendChild(logOutBtn);

    const logOutText = document.createElement("p");
    logOutText.innerText = "OBS! Raderar ditt konto.";
    logOutText.classList.add("logOutText");
    root.appendChild(logOutText);

    logOutBtn.addEventListener("click", function(){

        // Går igenom listan och behåll alla i den nya listan utom den person som har samma namn som den inloggade.
        let users = JSON.parse(localStorage.getItem("user")) || [];
        let updatedListofUsers = users.filter(user => user.username !== username );
        // Tar bort den gamla listan och ersätter med den nya
        localStorage.setItem("user", JSON.stringify(updatedListofUsers));
        alert("Ditt konto är nu raderat!");
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
    createUsernameLabel.innerText = "Välj användarnamn:";
    createUsernameLabel.setAttribute("for", "createUsername");
    root.appendChild(createUsernameLabel);

    let createUsername = document.createElement("input");
    createUsername.type ="text";
    createUsername.id ="createUsername";
    root.appendChild(createUsername);

    const createPasswordLabel = document.createElement("label");
    createPasswordLabel.classList.add("createLabels");
    createPasswordLabel.innerText = "Välj ett lösenord:";
    createPasswordLabel.setAttribute("for", "createPassword");
    root.appendChild(createPasswordLabel);

    let createPassword = document.createElement("input");
    createPassword.type = "password";
    createPassword.id = "createPassword";
    root.appendChild(createPassword);

    const cAreturnLink = document.createElement("a");
    cAreturnLink.href = "#";
    cAreturnLink.classList.add("cAreturnLink");
    cAreturnLink.innerText ="Tillbaka";
    root.appendChild(cAreturnLink);
    cAreturnLink.addEventListener("click", function() {
        root.innerHTML = "";
        loginPage();
    })

    const createAccountBtn = document.createElement("button");
    createAccountBtn.type = "button";
    createAccountBtn.classList.add("createAccountBtn");
    createAccountBtn.innerText = "Skapa konto";
    root.appendChild(createAccountBtn);
    createAccountBtn.addEventListener("click", function() {
        const newUsername = createUsername.value;
        const newPassword = createPassword.value;

        // Förhindrar att användare lämnar fälten tomma
        if (newUsername === "" || newPassword === "") {
             alert("Du måste fylla i både användarnamn och lösenord!");
        return;
        }

        let users = JSON.parse(localStorage.getItem("user")) || [];
        let newUser = {
            username: newUsername,
            password: newPassword
        };
        users.push(newUser);
        localStorage.setItem("user", JSON.stringify(users));

        alert("Konto skapat! Testa att logga in!");
        root.innerHTML = "";
        loginPage();
    });
}