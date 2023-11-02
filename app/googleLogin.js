import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showAlert } from "./showAlert.js";

const googleButton = document.querySelector('#googleLogin')

googleButton.addEventListener('click', async () => {

    const provider = new GoogleAuthProvider()

    try {
        const credentials = await signInWithPopup(auth, provider)
        console.log(credentials)

        const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'))
        modal.hide()

        showAlert('Welcome ' + credentials.user.displayName, 'success')

    } catch (error) {
        console.log(error)
    }
})