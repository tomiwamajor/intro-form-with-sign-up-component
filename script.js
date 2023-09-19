const button = document.querySelector(".btn");

button.addEventListener("click", function () {
  const firstName = document.querySelector(".first-name").value;
  const lastName = document.querySelector(".last-name").value;
  const emailAddress = document.querySelector(".email").value;
  const passCode = document.querySelector(".password").value;
  console.log(firstName, lastName, emailAddress, passCode);
  const firstNameError = document.querySelector(".first-name-hidden");
  const lastNameError = document.querySelector(".last-name-hidden");
  const emailError = document.querySelector(".email-hidden");
  const passwordError = document.querySelector(".password-hidden");

  if (!firstName && !lastName && !emailAddress && !passCode) {
    document.querySelector("form").style.gap = "0.1rem";

    document.querySelector(".first-name").style.border = "solid 0.1rem #ff0000";
    document.querySelector(".first-name").placeholder = "";
    document.querySelector(".first-name-error-icon").style.display = "block";

    document.querySelector(".last-name").style.border = "solid 0.1rem #ff0000";
    document.querySelector(".last-name").placeholder = "";
    document.querySelector(".last-name-error-icon").style.display = "block";

    document.querySelector(".email").style.border = "solid 0.1rem #ff0000";
    document.querySelector(".email").placeholder = "email@example/com";
    document.querySelector(".email-error-icon").style.display = "block";

    document.querySelector(".password").style.border = "solid 0.1rem #ff0000";
    document.querySelector(".password").placeholder = "";
    document.querySelector(".password-error-icon").style.display = "block";

    firstNameError.style.display = "block";
    lastNameError.style.display = "block";
    emailError.style.display = "block";
    passwordError.style.display = "block";
  } else if (firstName && !lastName && !emailAddress && !passCode) {
    document.querySelector("form").style.gap = "0.1rem";
    document.querySelector(".first-name").style.marginBottom = "1.5rem";

    document.querySelector(".last-name").style.border = "solid 0.1rem #ff0000";
    document.querySelector(".last-name").placeholder = "";
    document.querySelector(".last-name-error-icon").style.display = "block";

    document.querySelector(".email").style.border = "solid 0.1rem #ff0000";
    document.querySelector(".email").placeholder = "email@example/com";
    document.querySelector(".email-error-icon").style.display = "block";

    document.querySelector(".password").style.border = "solid 0.1rem #ff0000";
    document.querySelector(".password").placeholder = "";
    document.querySelector(".password-error-icon").style.display = "block";

    lastNameError.style.display = "block";
    emailError.style.display = "block";
    passwordError.style.display = "block";
  } else if (firstName && lastName && !emailAddress && !passCode) {
    document.querySelector("form").style.gap = "0.1rem";

    document.querySelector(".first-name").style.marginBottom = "1.5rem";
    document.querySelector(".last-name").style.marginBottom = "1.5rem";

    document.querySelector(".email").style.border = "solid 0.1rem #ff0000";
    document.querySelector(".email").placeholder = "email@example/com";
    document.querySelector(".email-error-icon").style.display = "block";

    document.querySelector(".password").style.border = "solid 0.1rem #ff0000";
    document.querySelector(".password").placeholder = "";
    document.querySelector(".password-error-icon").style.display = "block";

    emailError.style.display = "block";
    passwordError.style.display = "block";
  } else if (firstName && lastName && emailAddress && !passCode) {
    document.querySelector("form").style.gap = "0.1rem";

    document.querySelector(".first-name").style.marginBottom = "1.5rem";
    document.querySelector(".last-name").style.marginBottom = "1.5rem";
    document.querySelector(".email").style.marginBottom = "1.5rem";

    document.querySelector(".password").style.border = "solid 0.1rem #ff0000";
    document.querySelector(".password").placeholder = "";
    document.querySelector(".password-error-icon").style.display = "block";

    passwordError.style.display = "block";
  }
});
