document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const emailStatus = document.getElementById("email-status");
  const passwordStatus = document.getElementById("password-status");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  function updateStatusIcon(element, isValid) {
    if (isValid) {
      element.classList.remove("invalid");
      element.classList.add("valid");
      element.innerHTML = '<i class="fas fa-check-circle"></i>'; // Check mark
    } else {
      element.classList.remove("valid");
      element.classList.add("invalid");
      element.innerHTML = '<i class="fas fa-times-circle"></i>'; // Cross mark
    }
  }

  emailInput.addEventListener("input", () => {
    const isValid = emailPattern.test(emailInput.value);
    updateStatusIcon(emailStatus, isValid);
    if (isValid) {
      emailInput.classList.remove("invalid");
      emailError.innerHTML = ""; // Clear error message
    } else {
      emailInput.classList.add("invalid");
      emailError.innerHTML = "Invalid email address";
    }
  });

  passwordInput.addEventListener("input", () => {
    const isValid = passwordPattern.test(passwordInput.value);
    updateStatusIcon(passwordStatus, isValid);
    if (isValid) {
      passwordInput.classList.remove("invalid");
      passwordError.innerHTML = ""; // Clear error message
    } else {
      passwordInput.classList.add("invalid");
      passwordError.innerHTML =
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one digit.";
    }
  });

  form.addEventListener("submit", (e) => {
    let valid = true;

    if (!emailPattern.test(emailInput.value)) {
      valid = false;
      emailError.innerHTML = "Invalid email address";
      emailInput.classList.add("invalid");
    }

    if (!passwordPattern.test(passwordInput.value)) {
      valid = false;
      passwordError.innerHTML =
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one digit.";
      passwordInput.classList.add("invalid");
    }

    if (!valid) {
      e.preventDefault();
    } else {
      e.preventDefault(); // Prevent form submission for demo
      Swal.fire({
        title: "Success!",
        text: "You have been successfully logged in.",
        icon: "success",
        confirmButtonText: "OK",
      });
    }
  });
});
