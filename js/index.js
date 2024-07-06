var inputName = document.getElementById("enterName");
var inputEmail = document.getElementById("enterEmail");
var inputPassword = document.getElementById("enterPassword");
var signUBtn = document.getElementById("signUBtn");
var msg = document.getElementById("msg");

let users = [];

if (JSON.parse(localStorage.getItem("userInfo") != null)) {
  users = JSON.parse(localStorage.getItem("userInfo"));
}

function signUp() {
  if (
    inputName.value == "" ||
    inputEmail.value == "" ||
    inputPassword.value == ""
  ) {
    msg.innerHTML = `<p class ="text-danger my-3">All input are required</p>`;
   
  } else {
    for (let i = 0; i < users.length; i++) {
      // localStorage.setItem("userName", JSON.stringify(users[i].name));
      if (users[i].email == inputEmail.value) {
        msg.innerHTML = `<p class ="text-danger my-3">email already exist</p>`;
        return false;
      }
    }
    getUser();
    msg.innerHTML = `<p class ="text-success my-3">success</p>`;
  }
}
function getUser() {
  let user = {
    name: inputName.value,
    email: inputEmail.value,
    pass: inputPassword.value,
  };
  users.push(user);
  localStorage.setItem("userInfo", JSON.stringify(users));
  location.href = `./login.html`;
}

//
signUBtn?.addEventListener("click", function () {
  signUp();
});
// ---------------------login-------------------------/

var emailElement = document.getElementById("inputEmail");
var passwordElement = document.getElementById("inputPassword");
var checkInput = document.getElementById("check-input");
var logBtn = document.getElementById("log-Btn");

function login() {
  for (let i = 0; i < users.length; i++) {
   if(emailElement.value == users[i].email && passwordElement.value == users[i].pass){
    checkInput.innerHTML = `<p class ="text-success my-3">success</p>`;
    localStorage.setItem(`userName`, JSON.stringify(users[i].name));
    location.href = "./wel.html";
   }
    
  }
  if (emailElement.value == "" || passwordElement.value == "") {
    checkInput.innerHTML = `<p class ="text-danger my-3">All inputs are required</p>`;
  } else {
    checkInput.innerHTML = `<p class ="text-danger my-3">you should sign Up</p>`;
  }
}

logBtn?.addEventListener("click", function () {
  login();
});

let welcomeMessage = document.getElementById("welcome_message");

let loggedUser = localStorage.getItem(`userName`);
welcomeMessage.innerHTML = `welcome ${loggedUser}`;
// ------------------------logOut-----------------------------?
let logOut = document.getElementById("log-out");

logOut.addEventListener("click", function () {
  location.href = "./login.html";
});
