import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showAlert } from "./showAlert.js";

const signinForm = document.querySelector("#login-form");

signinForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = signinForm["login-email"].value;
  const password = signinForm["login-password"].value;

  const modal = bootstrap.Modal.getInstance(
    document.querySelector("#signinModal")
  )
  modal.hide()
  
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    console.log(credentials);

    showAlert("Welcome " + credentials.user.email);

  } catch (error) {
    if (error.code === "auth/invalid-email") {
      showAlert("Invalid email", "error");
    } else if (error.code === "auth/wrong-password") {
      showAlert("Wrong password", "error");
    } else if (error.code === "auth/user-not-found") {
      showAlert("User not found", "error");
    } else if (error.code === "auth/invalid-login-credentials") {
      showAlert("Invalid login credentials :(", "error");
    } else {
      showAlert(error.message, "error");
    }
  }
});
