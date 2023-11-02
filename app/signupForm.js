import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showAlert } from "./showAlert.js";

const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;

  console.log(email, password);

  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials);

    //close modal signup
    const signupModal = document.getElementById("signupModal");
    const modal = bootstrap.Modal.getInstance(signupModal);
    modal.hide();

    showAlert("Welcome " + userCredentials.user.email);
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      showAlert("Email already in use", "error");
    } else if (error.code === "auth/invalid-email") {
      showAlert("Invalid email :(", "error");
    } else if (error.code === "auth/weak-password") {
      showAlert("Password is too weak :(", "error");
    } else {
      showAlert("Something went wrong", "error");
    }
  }
});
