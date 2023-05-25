import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js'
// Add Firebase products that you want to use
import { getDatabase, set, ref } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js'

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);



const appform = document.querySelector('#application-form')
appform.addEventListener('submit', (e) => {
    e.preventDefault();
    var id = Date.now();
    const fname = appform['fname'].value;
    const lname = appform['lname'].value;
    const email = appform['email'].value;
    const phone = appform['num'].value;
    const experience = appform['experience'].value;
    const birthdate = appform['birthdate'].value;
    const gender = appform['gender'].value;
    set(ref(db, 'Application/'+ id ), {
        FirstName: fname,
        LastName: lname,
        Email: email,
        Phone: phone,
        Experience: experience,
        Birthdate: birthdate,
        Gender: gender
    });
    console.log("Application submitted!");

    appform['fname'].value="";
    appform['lname'].value="";
    appform['email'].value="";
    appform['num'].value="";
    appform['experience'].value="";
    appform['birthdate'].value="";
    appform['gender'].value="";
});
