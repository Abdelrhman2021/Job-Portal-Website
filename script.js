const form = document.querySelector('.contact form');
const firstNameInput = document.querySelector('input[name="name"]:first-of-type');
const lastNameInput = document.querySelector('input[name="name"]:last-of-type');
const emailInput = document.querySelector('input[name="email"]');
const numberInput = document.querySelector('input[name="number"]');
const experienceSelect = document.querySelector('select[name="role"]');
const birthdateInput = document.querySelector('input[name="birthdate"]');
const genderInputs = document.querySelectorAll('input[name="gender"]');
const submitBtn = document.querySelector('.contact form input[type="submit"]');


// Toggle navbar on click
const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () => {
  navbar.classList.toggle('active');
}

// Remove active class from navbar on scroll
window.onscroll = () => {
  navbar.classList.remove('active');
}

// Input number validation
numberInput.oninput = () => {
  const inputValue = numberInput.value.trim();
  const numericValue = parseFloat(inputValue);

  if (inputValue === '') {
    //clearError(numberInput);
  } else if (isNaN(numericValue)) {
    displayError(numberInput, 'Please enter a valid number.');
    numberInput.value = '';
  } else {
    //clearError(numberInput);
  }
};

// Form validation on submit

form.onsubmit = (event) => {
  event.preventDefault(); // Prevent form submission for demonstration purposes

  if (!validateFirstName()) {
    return false;
  }
  
  if (!validateLastName()) {
    return false;
  }

  if (!validateEmail()) {
    return false;
  }

  if (!validateNumber()) {
    return false;
  }

  if (!validateExperience()) {
    return false;
  }

  if (!validateBirthdate()) {
    return false;
  }

  if (!validateGender()) {
    return false;
  }

  // Form is valid, perform further actions or submit the form
  console.log('Form submitted successfully!');
}

// Validation functions
function validateFirstName() {
  if (firstNameInput.value.trim() === '') {
    displayError(firstNameInput, 'Please enter your first name.');
    return false;
  }

  //clearError(firstNameInput);
  return true;
}

function validateLastName() {
  if (lastNameInput.value.trim() === '') {
    displayError(lastNameInput, 'Please enter your last name.');
    return false;
  }

  //clearError(lastNameInput);
  return true;
}

function validateEmail() {
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === '') {
    displayError(emailInput, 'Please enter your email.');
    return false;
  }

  if (!emailRegex.test(email)) {
    displayError(emailInput, 'Please enter a valid email address.');
    return false;
  }

  //clearError(emailInput);
  return true;
}

function validateNumber() {
  const number = numberInput.value.trim();

  if (number === '') {
    displayError(numberInput, 'Please enter your number.');
    return false;
  }

  //clearError(numberInput);
  return true;
}

function validateExperience() {
  if (experienceSelect.value === '') {
    displayError(experienceSelect, 'Please select your experience.');
    return false;
  }

  //clearError(experienceSelect);
  return true;
}

function validateBirthdate() {
  if (birthdateInput.value.trim() === '') {
    displayError(birthdateInput, 'Please select your birthdate.');
    return false;
  }

  //clearError(birthdateInput);
  return true;
}

function validateGender() {
  let isGenderSelected = false;

  genderInputs.forEach(input => {
    if (input.checked) {
      isGenderSelected = true;
    }
  });

  if (!isGenderSelected) {
    displayError(genderInputs[0], 'Please select your gender.');
    return false;
  }

  //clearError(genderInputs[0]);
  return true;
}

function displayError(inputElement, errorMessage) {
  const errorElement = inputElement.nextElementSibling;
  errorElement.textContent = errorMessage;
  inputElement.classList.add('error');
}

/*function clearError(inputElement) {
  const errorElement = inputElement.nextElementSibling;
  errorElement.textContent = '';
  inputElement.classList.remove('error');
}*/
