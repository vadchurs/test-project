const input = document.getElementsByClassName("input")[0];
const button = document.getElementsByClassName("button")[0];
const inputWrapper = document.getElementsByClassName("input-wrapper")[0];
const modalWindow = document.getElementsByClassName("modal-window")[0];
const message = modalWindow.getElementsByClassName("message")[0];
const close = modalWindow.getElementsByClassName("close")[0];
const errorMessage = document.getElementsByClassName("error-message")[0];

const ajaxInit = function () {
    console.log('init inner');
    const request = new XMLHttpRequest();
    const url = "https://reqres.in/api/users";
    request.responseType = "json";
    request.open('POST', url, true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify({"message": input.value}));
    request.addEventListener("readystatechange", function() {
        if (request.readyState === 4 && request.status === 201) { // code 201 hardcoded for the 3rd-party service
            message.innerHTML = request.response.message;
            input.value = "";
            modalWindow.classList.add("modal-active")
        }
    });
}

input.oninput = function () {
    inputWrapper.classList.remove("error")
    errorMessage.style.display="none";
}

button.onclick = function (e) {
    e.preventDefault();
    if(input.value) {
        console.log('init');
        ajaxInit()
    } else {
        inputWrapper.classList.add("error")
        errorMessage.style.display="block";
    }
}

close.onclick = function () {
    modalWindow.classList.remove("modal-active")
}
