const firstPassword = document.querySelector("#password");
const secondPassword = document.querySelector("#password2");
const passwords = document.querySelectorAll(".passwords");
const log = document.querySelector("#passwordVerificationMsj");

passwords[0].addEventListener("input", showMSJ);
passwords[1].addEventListener("input", showMSJ);

function showMSJ(e) {
    if((firstPassword.value === secondPassword.value)&firstPassword.value.length!==0){
        log.textContent="passwords match";
        log.style.color= 'green';
    }
    else {
        log.textContent="passwords don't match";
        log.style.color= 'red';
    }
}
