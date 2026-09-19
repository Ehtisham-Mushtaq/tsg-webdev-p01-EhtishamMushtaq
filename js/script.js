/*
 * Portfolio Website JavaScript
 */

"use strict";


document.addEventListener("DOMContentLoaded", () => {

    console.log("Portfolio website loaded successfully.");


    /* =================================
       Contact Form Validation
    ================================= */

    const contactForm = document.getElementById("contact-form");

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");

    const formSuccess = document.getElementById("form-success");


    if (!contactForm) {
        return;
    }


    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();


        /* Clear previous messages */

        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        formSuccess.textContent = "";

        nameInput.classList.remove("input-error", "input-success");
        emailInput.classList.remove("input-error", "input-success");
        messageInput.classList.remove("input-error", "input-success");


        let isValid = true;


        /* =================================
           Name Validation
        ================================= */

        const name = nameInput.value.trim();

        if (name === "") {

            nameError.textContent = "Please enter your name.";

            nameInput.classList.add("input-error");

            isValid = false;

        } else if (name.length < 2) {

            nameError.textContent =
                "Name must contain at least 2 characters.";

            nameInput.classList.add("input-error");

            isValid = false;

        } else {

            nameInput.classList.add("input-success");
        }


        /* =================================
           Email Validation
        ================================= */

        const email = emailInput.value.trim();

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (email === "") {

            emailError.textContent =
                "Please enter your email address.";

            emailInput.classList.add("input-error");

            isValid = false;

        } else if (!emailPattern.test(email)) {

            emailError.textContent =
                "Please enter a valid email address.";

            emailInput.classList.add("input-error");

            isValid = false;

        } else {

            emailInput.classList.add("input-success");
        }


        /* =================================
           Message Validation
        ================================= */

        const message = messageInput.value.trim();


        if (message === "") {

            messageError.textContent =
                "Please enter your message.";

            messageInput.classList.add("input-error");

            isValid = false;

        } else if (message.length < 10) {

            messageError.textContent =
                "Message must contain at least 10 characters.";

            messageInput.classList.add("input-error");

            isValid = false;

        } else {

            messageInput.classList.add("input-success");
        }


        /* =================================
           Final Validation Result
        ================================= */

        if (isValid) {

            formSuccess.textContent =
                "Thank you! Your message has passed validation.";

            contactForm.reset();

            nameInput.classList.remove("input-success");
            emailInput.classList.remove("input-success");
            messageInput.classList.remove("input-success");

        }

    });

});