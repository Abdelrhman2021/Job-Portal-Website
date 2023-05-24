import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js'
// Add Firebase products that you want to use
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js'

const firebaseConfig = {
    apiKey: "AIzaSyB-yzXdWXmxLGkdb_IZ7F-Zj3ztSwNnzRY",
    authDomain: "hr-guide-57d65.firebaseapp.com",
    projectId: "hr-guide-57d65",
    storageBucket: "hr-guide-57d65.appspot.com",
    messagingSenderId: "888309182674",
    appId: "1:888309182674:web:333298d6e28d7c383e3d0b",
    measurementId: "G-3G1231E8VB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    signInWithEmailAndPassword(auth, email, password).then(cred => {
        console.log(cred.user);
        alert("Login successful! Welcome back.");
        window.location.href = "index.html";
    })
        .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
            const errorMessage = error.message;
            alert("Error: " + errorMessage);
        });
});

//Detect if user is logged in or not
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('Logged in as: ' + user.email);
    } else {
        console.log('Logged out');
    }
});