import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyB-yzXdWXmxLGkdb_IZ7F-Zj3ztSwNnzRY",
    authDomain: "hr-guide-57d65.firebaseapp.com",
    projectId: "hr-guide-57d65",
    storageBucket: "hr-guide-57d65.appspot.com",
    messagingSenderId: "888309182674",
    appId: "1:888309182674:web:333298d6e28d7c383e3d0b",
    measurementId: "G-3G1231E8VB"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

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
    });

    function validateName() {
        if (name.value.trim() === '') {
            displayError(NameInput, 'Please enter your first name.');
            return false;
        }

        clearError(firstNameInput);
        return true;
    }

    function validateEmail() {
        const email1 = email.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email1 === '') {
            displayError(email, 'Please enter your email.');
            return false;
        }

        if (!emailRegex.test(email1)) {
            displayError(email, 'Please enter a valid email address.');
            return false;
        }

        clearError(email);
        return true;
    }

    function validatePassword() {

        if (password.length < 8) {
            alert("Password should be at least 8 characters long.");
            return false;
        }

        if (!/[A-Z]/.test(password)) {
            alert("Password should contain at least one uppercase letter.");
            return false;
        }

        if (!/[!@#$%^&*]/.test(password)) {
            alert("Password should contain at least one symbol (!, @, #, $, %, ^, &, *).");
            return false;
        }

        if (password !== cpassword) {
            alert("Password and Confirm Password do not match.");
            return false;
        }

        return true;
    }

    signupForm.onsubmit = (event) => {
        event.preventDefault(); // Prevent form submission for demonstration purposes

        if (!validateName()) {
            return false;
        }

        if (!validateEmail()) {
            return false;
        }

        if (!validatePassword()) {
            return false;
        }

        // Form is valid, perform further actions or submit the form
        console.log('Form submitted successfully!');
    }
});



//Login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    signInWithEmailAndPassword(auth, email, password).then(cred => {
        console.log(cred.user);
        alert("Login successful! Welcome back.");
        window.location.href = "index.html";
    });

    function validateEmail() {
        const email1 = email.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email1 === '') {
            displayError(email, 'Please enter your email.');
            return false;
        }

        if (!emailRegex.test(email1)) {
            displayError(email, 'Please enter a valid email address.');
            return false;
        }

        clearError(email);
        return true;
    }

    function validatePassword() {

        if (password.length < 8) {
            alert("Password should be at least 8 characters long.");
            return false;
        }

        if (!/[A-Z]/.test(password)) {
            alert("Password should contain at least one uppercase letter.");
            return false;
        }

        if (!/[!@#$%^&*]/.test(password)) {
            alert("Password should contain at least one symbol (!, @, #, $, %, ^, &, *).");
            return false;
        }

        return true;
    }

    loginForm.onsubmit = (event) => {
        event.preventDefault(); // Prevent form submission for demonstration purposes

        if (!validateEmail()) {
            return false;
        }

        if (!validatePassword()) {
            return false;
        }

        // Form is valid, perform further actions or submit the form
        console.log('Form submitted successfully!');
    }

});

//Detect if user is logged in or not
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('Logged in as: ' + user.email);
    } else {
        console.log('Logged out');
    }
});

var applicationForm = document.getElementById('application-form');
applicationForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fname = applicationForm['fname'].value;
    const lname = applicationForm['lname'].value;
    const email = applicationForm['email'].value;
    const phone = applicationForm['num'].value;
    const experience = applicationForm['experience'].value;
    const birthdate = applicationForm['birthdate'].value;
    const gender = applicationForm['gender'].value;

    try {
        const docRef = await addDoc(collection(db, "application"), {
            firstname: fname,
            lastname: lname,
            email: email,
            phone: phone,
            experience: experience,
            birthdate: birthdate,
            gender: gender
        });
        console.log("Document written with ID: ", docRef.id);
        
        // Redirect to index.html after successful form submission
        window.location.href = "index.html";
        
    } catch (e) {
        console.error("Error adding document: ", e);
        // Optionally, you can display an error message to the user here
    }
});

