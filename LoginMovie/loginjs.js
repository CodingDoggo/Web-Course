const users = [
    {
        username: 'Jeff',
        password: 'adminUserPassword',
        name: "Jeff the Creator"
    },
    {
        username: 'John',
        password: 'randomUserPassword',
        name: "John Smith"
    }
];

function login(username = '', password = ''){

    let result = false;

    users.forEach(function(user){
        if(user.username == username && user.password == password){
            console.log('welcome');
            result = true;
        }
    });
    
    return result;
}

// DOM
function getUserInputs(){

    let usernameInput = document.getElementById("username_input");
    let username = usernameInput.value;

    let passwordInput = document.getElementById("password_input");
    let password = passwordInput.value;

    if(!validate(username, password)) return false;

    return {
        username: username,
        password: password
    }
}

function checkLogin(){
    let userInputs = getUserInputs();
    
    if(!userInputs) return false;

    let loginResult = login(userInputs.username, userInputs.password);
    

    let resultText = '';
    let resultClass = '';
    let loginResultDiv = document.getElementById("loginResultDiv");
    if(loginResult){
        window.location.href = "../index.html";
    }else{
        resultText = "<b>Access denied!</b> Please enter your credentials correctly!";
        resultClass = "alert-dark";
    }

    loginResultDiv.innerHTML = resultText;
    loginResultDiv.classList.add(resultClass);
}

function validate(username, password){
    
    let inputs = document.getElementsByClassName("login-input");
    for(let input of inputs){
        input.classList.remove('is-invalid');
    }
    let res = true;

    if(username == ''){
        document.getElementById("username_input").classList.add('is-invalid');
        res = false;
    }
    if(password == ""){
        document.getElementById("password_input").classList.add('is-invalid');
        res = false;
    }

    return res;
}

var loginButton = document.getElementById("login_button");
loginButton.addEventListener('click', () => checkLogin() ); 