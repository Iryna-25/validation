const emailField = document.getElementById("emailField");
const passwordField = document.getElementById("paswordField");
const button = document.getElementById("button");
const responseEmail = document.getElementById("responseEmail");
const responsePassword = document.getElementById("responsePassword");

button.addEventListener("click", function () {
  let valid = true;
  const email = emailField.value;
  const password = paswordField.value;
  if (!validateEmail(email)) {
    responseEmail.innerHTML = "Sorry, this email is not cool enough 😩";
    valid = false;
  }
  if (!validateTel(tel)) {
    responsePassword.innerHTML = "Sorry, this tel is not cool enough 😩";
    valid = false;
  }
  return valid;
});

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
  const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  return re.test(String(password));
}