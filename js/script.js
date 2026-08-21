"use strict"

// const startScreen = document.getElementById('start-screen');
// const quizScreen = document.getElementById('quiz-screen');
// const resultScreen = document.getElementById('result-screen');
// const startButton = document.getElementById('start-btn');
// const questionText = document. getElementById('question-text');
// const answersContainer = document.getElementById('answers-container');
// const currentQuestionSpan = document.getElementById('current-question');
// const totalQuestionSpan = document.getElementById('total-questions');
// const scoreSpan = document.getElementById('score');
// const finalScoreSpan = document.getElementById('final-score');
// const maxScoreSpan = document.getElementById('max-score');
// const resultMessage = document.getElementById('result-message');
// const restartButton = document.getElementById('restart-btn');
// const progressBar = document.getElementById('progress');


// const quizQuestions = [
//     {
//         question : "What is the capital of France",
//         answers : [
//             {text: "London", correct : false},
//             {text: "Berlin", correct : false},
//             {text: "Paris", correct : true},
//             {text: "Madrid", correct : false},
//         ]
//     },

//     {
//         question : "Which planet Known as Red Planet?",
//         answers : [
//             {text: "Venus", correct : false},
//             {text: "Mars", correct : true},
//             {text: "Jupiter", correct : false},
//             {text: "Saturn", correct : false},
//         ]
//     },

//     {
//         question : "What is the Largest Ocean int the World",
//         answers : [
//             {text: "Atlantic Ocean", correct : false},
//             {text: "Indian Ocean", correct : false},
//             {text: "Arctic Ocean", correct : false},
//             {text: "Pacific Ocean", correct : true},
//         ]
//     },

//     {
//         question : "What is the Chemical symbol for gold",
//         answers : [
//             {text: "Atlantic Ocean", correct : false},
//             {text: "Indian Ocean", correct : false},
//             {text: "Arctic Ocean", correct : false},
//             {text: "Pacific Ocean", correct : true},
//         ]
//     },


// ]

// let currentQuestionIndex = 0;
// let score = 0;
// let answersDisabled = false;

// totalQuestionSpan.textContent = quizQuestions.length;
// console.log(totalQuestionSpan.textContent = quizQuestions.length);



// const form = document.getElementById('form');
// const firstname_input = document.getElementById('firstname-input');
// const email_input = document.getElementById('email-input');
// const password_input = document.getElementById('password-input');
// const repeat_password_input = document.getElementById('repeat-password-input');
// const errors_message = document.getElementById('error-message');
// const err_fname_error = document.getElementById('fname-error');
// const err_email = document.getElementById('error-message-email');
// const err_password = document.getElementById('error-message-password');
// const err_repeat_password = document.getElementById('error-message-repeat-password');


// form.addEventListener('submit', (e)=> {

//     let errors = [];

//     if(firstname_input){
//         errors = getSignUpFormErrors(firstname_input.value, email_input.value, password_input.value, repeat_password_input.value);
//     }else{
//         errors = getLoginFormErrors(email_input.value, password_input.value);
//     }

//     if(errors.length > 0){
//         e.preventDefault();
//         errors_message.innerText = errors.join(',  ');
//     }
    
// });

// function getSignUpFormErrors(firstname, email, password, repeat_password){
//     let errors =[];


//     if(firstname === '' || firstname == null){
//         // errors.push('First Name is Require');
//         err_fname_error.innerText = 'First Name is Require';
//         firstname_input.parentElement.classList.add('incorrect');
//     }

//     if(email === '' || email == null){
//         // errors.push('Email is Require');
//         err_email.innerText = 'Email is Require';
//         email_input.parentElement.classList.add('incorrect');
//     }

//     if(password === '' || password == null){
//         // errors.push('Password is Require');
//         err_password.innerText = 'Password is Require';
//         password_input.parentElement.classList.add('incorrect');
//     }

//     if(password.length < 8  ){
//         err_password.innerText ='Password at least have 8 Charechters';
//     }

//     if(password !== repeat_password ){
//         // errors.push('Password does not match with repeated Password');
//         err_repeat_password.innerText = 'Password does not match with repeated Password';
//         repeat_password_input.parentElement.classList.add('incorrect');
//         password_input.parentElement.classList.add('incorrect');
//     }

//     return errors;
// }

// function getLoginFormErrors(email, password){
//     let errors = [];

//    if(email === '' || email == null){
//         // errors.push('Email is Require');
//         err_email.innerText = 'Email is Require';
//         email_input.parentElement.classList.add('incorrect');
//     }

//     if(password.length < 8){
//         errors.push('Password at least have 8 Charechters / Enter the correct password ');
//     }

//     if(password === '' || password == null){
//         errors.push('Password is Require');
//         password_input.parentElement.classList.add('incorrect');
//     }
    
//     return errors;
// }

// const allInput = [firstname_input, email_input, password_input, repeat_password_input].filter(input => input != null);

// allInput.forEach(input =>{
//     input.addEventListener('input', ()=>{
//         if(input.parentElement.classList.contains('incorrect')){
//         input.parentElement.classList.remove('incorrect');
//         err_fname_error.innerText = '';
//         err_email.innerText = '';
//         err_password.innerText = '';
//         err_repeat_password.innerText = '';
//     }
//     })
// })




const err_name = document.getElementById("err-name");
const err_email = document.getElementById("err-email");
const err_phone = document.getElementById("err-phone");
const err_pass = document.getElementById("err-pass");

const form = document.getElementById("form");


/* =========================================
   NAME VALIDATION
========================================= */

function validateName() {

    const name = document.getElementById("name");

    const nameValue = name.value.trim();


    /* Required */

    if (nameValue.length === 0) {

        err_name.innerText = "Name is required";

        name.style.border = "1px solid red";

        return false;
    }


    /* Letters only */

    if (!nameValue.match(/^[a-zA-Z ]+$/)) {

        err_name.innerText = "Name should contain letters only";

        name.style.border = "1px solid red";

        name.style.outline = "none";

        return false;
    }


    /* Valid */

    err_name.innerText = "";

    name.style.border = "1px solid green";

    return true;
}


/* =========================================
   EMAIL VALIDATION
========================================= */

function validateEmail() {

    const email = document.getElementById("email");

    const emailValue = email.value.trim();


    /* Required */

    if (emailValue.length === 0) {

        err_email.innerText = "Email is required";

        email.style.border =  "1px solid red";

        return false;
    }


    /* Email format */

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(emailValue)) {

        err_email.innerText = "Please enter a valid email address";

        email.style.border = "1px solid red";

        email.style.outline = "none";

        return false;
    }


    /* Valid */

    err_email.innerText = "";

    email.style.border = "1px solid green";

    return true;
}


/* =========================================
   PHONE VALIDATION
========================================= */

function validatePhone() {

    const phone = document.getElementById("phone");

    const phoneValue = phone.value.trim();


    /* Required */

    if (phoneValue.length === 0) {

        err_phone.innerText = "Phone is required";

        phone.style.border = "1px solid red";

        return false;
    }


    /* Numbers only */

    if (!/^[0-9]+$/.test(phoneValue)) {

        err_phone.innerText = "Phone should contain numbers only";

        phone.style.border = "1px solid red";

        return false;
    }


    /* Exactly 10 digits */

    if (phoneValue.length !== 10) {

        err_phone.innerText = "Phone should contain 10 numbers";

        phone.style.border = "1px solid red";

        return false;
    }


    /* Valid */

    err_phone.innerText = "";

    phone.style.border = "1px solid green";

    return true;
}


/* =========================================
   PASSWORD VALIDATION
========================================= */

function validatePassword() {

    const password = document.getElementById("pass");

    const passwordValue = password.value;

    const passLength = 8;


    /* Required */

    if (passwordValue.length === 0) {

        err_pass.innerText = "Password is required";

        password.style.border = "1px solid red";

        return false;
    }


    /* Minimum 8 characters */

    if (passwordValue.length < passLength) {

        err_pass.innerText =
            "Password must have at least 8 characters";

        password.style.border = "1px solid red";

        return false;
    }


    /* Valid */

    err_pass.innerText = "";

    password.style.border = "1px solid green";

    return true;
}


/* =========================================
   FORM VALIDATION
========================================= */

form.addEventListener("submit", function (e) {

    e.preventDefault();


    const nameValid = validateName();

    const emailValid = validateEmail();

    const phoneValid = validatePhone();

    const passwordValid = validatePassword();


    if ( !nameValid || !emailValid || !phoneValid || !passwordValid ) {

        return;

    }


    /* Everything is valid */

    console.log(
        "Form validation successful!"
    );


    
    //    For now, this prevents the actual
    //    submission so you can test.

    //    Later you can redirect to login:
       
       window.location.href = "loging.html";
    

});



// Show and hide  Password
const showPass = document.querySelector('.open-eye-icon');
const hidePass = document.querySelector('.close-eye-icon');
const showHideBox = document.querySelector('.eye-icon-bx');
const passInput = document.querySelector('.pass-input');

if(showHideBox)(
    showHideBox.addEventListener('click', ()=>{
        if(passInput.type === "password"){
            passInput.type = "text";
            showPass.classList.add('active');
            hidePass.classList.add('active');
        }else{
            passInput.type = "password";
            showPass.classList.remove('active');
            hidePass.classList.remove('active');
        }
    })
)