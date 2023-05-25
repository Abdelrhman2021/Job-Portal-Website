import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword,} from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyB-yzXdWXmxLGkdb_IZ7F-Zj3ztSwNnzRY",
    authDomain: "hr-guide-57d65.firebaseapp.com",
    projectId: "hr-guide-57d65",
    storageBucket: "hr-guide-57d65.appspot.com",
    messagingSenderId: "888309182674",
    appId: "1:888309182674:web:333298d6e28d7c383e3d0b",
    measurementId: "G-3G1231E8VB",
    databaseURL: "https://hr-guide-57d65-default-rtdb.firebaseio.com/"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//Create new user
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    const cpassword = signupForm['signup-c-password'].value;
    const name = signupForm['signup-name'].value;
    createUserWithEmailAndPassword(auth, email, password).then(cred => {
        console.log(cred.user);
        alert("Signup successful! Thank you for signing up.");
        window.location.href = "login.html";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Error: " + errorMessage);
    });
});
