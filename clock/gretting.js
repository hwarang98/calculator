const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS="curretUser",
    showing = "showing";

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);

}

    function askForName(){
        form.classList.add(showing);
        form.addEventListener("submit",handleSubmit);
    }

function paintGreeting(text){
    form.classList.remove(showing);
    greeting.classList.add(showing);
    greeting.innerText = `Hello ${text}`

}

function loadName(){
    const curretUser = localStorage.getItem(USER_LS);
    if(curretUser === null){
        askForName();

    }else{
paintGreeting(curretUser);

    }
}

function init(){
    loadName();

}

init();