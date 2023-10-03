import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth } from "./firebase.js";

const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value

    console.log(email, password);

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)

        //close modal signup
        const signupModal = document.getElementById('signupModal')
        const modal = bootstrap.Modal.getInstance(signupModal)
        modal.hide()

    } catch (error) {
        console.log(error)
    }
});