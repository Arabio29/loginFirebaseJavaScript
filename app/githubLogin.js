import { GithubAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showAlert } from "./showAlert.js";

const githubButton = document.querySelector('#githubLogin')

githubButton.addEventListener('click', async () => {

    const provider = new GithubAuthProvider()

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