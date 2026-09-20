/*
 * Portfolio Website JavaScript
 */

"use strict";


document.addEventListener("DOMContentLoaded", () => {

    console.log("Portfolio website loaded successfully.");


    /* =================================
       Navigation Elements
    ================================= */

    const menuToggle = document.getElementById("menu-toggle");
    const primaryNavigation = document.getElementById("primary-navigation");

    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = themeToggle
        ? themeToggle.querySelector("i")
        : null;

    const scrollTopButton = document.getElementById("scroll-top");


    /* =================================
       Mobile Menu Toggle
    ================================= */

    if (menuToggle && primaryNavigation) {

        menuToggle.addEventListener("click", () => {

            const isOpen =
                primaryNavigation.classList.toggle("is-open");


            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );


            menuToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );


            const menuIcon =
                menuToggle.querySelector("i");


            if (menuIcon) {

                menuIcon.classList.toggle(
                    "fa-bars",
                    !isOpen
                );

                menuIcon.classList.toggle(
                    "fa-xmark",
                    isOpen
                );
            }

        });


        /*
         * Close the mobile menu when
         * a navigation link is selected.
         */

        const navigationLinks =
            primaryNavigation.querySelectorAll("a");


        navigationLinks.forEach((link) => {

            link.addEventListener("click", () => {

                primaryNavigation.classList.remove(
                    "is-open"
                );


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );


                const menuIcon =
                    menuToggle.querySelector("i");


                if (menuIcon) {

                    menuIcon.classList.remove(
                        "fa-xmark"
                    );

                    menuIcon.classList.add(
                        "fa-bars"
                    );
                }

            });

        });


        /*
         * Close the mobile menu
         * when Escape is pressed.
         */

        document.addEventListener("keydown", (event) => {

            if (
                event.key === "Escape" &&
                primaryNavigation.classList.contains("is-open")
            ) {

                primaryNavigation.classList.remove(
                    "is-open"
                );


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );


                const menuIcon =
                    menuToggle.querySelector("i");


                if (menuIcon) {

                    menuIcon.classList.remove(
                        "fa-xmark"
                    );

                    menuIcon.classList.add(
                        "fa-bars"
                    );
                }

            }

        });

    }


    /* =================================
       Dark / Light Mode
    ================================= */

    const savedTheme =
        localStorage.getItem("portfolio-theme");


    const initialTheme =
        savedTheme === "light"
            ? "light"
            : "dark";


    document.documentElement.dataset.theme =
        initialTheme;


    const updateThemeButton = (theme) => {

        if (!themeToggle || !themeIcon) {
            return;
        }


        const isLight =
            theme === "light";


        themeIcon.classList.toggle(
            "fa-sun",
            isLight
        );


        themeIcon.classList.toggle(
            "fa-moon",
            !isLight
        );


        themeToggle.setAttribute(
            "aria-pressed",
            String(isLight)
        );


        themeToggle.setAttribute(
            "aria-label",
            isLight
                ? "Switch to dark mode"
                : "Switch to light mode"
        );


        themeToggle.setAttribute(
            "title",
            isLight
                ? "Switch to dark mode"
                : "Switch to light mode"
        );

    };


    updateThemeButton(initialTheme);


    if (themeToggle) {

        themeToggle.addEventListener(
            "click",
            () => {

                const currentTheme =
                    document.documentElement.dataset.theme;


                const newTheme =
                    currentTheme === "light"
                        ? "dark"
                        : "light";


                document.documentElement.dataset.theme =
                    newTheme;


                localStorage.setItem(
                    "portfolio-theme",
                    newTheme
                );


                updateThemeButton(newTheme);

            }
        );

    }


    /* =================================
       Scroll To Top
    ================================= */

    const updateScrollButton = () => {

        if (!scrollTopButton) {
            return;
        }


        if (window.scrollY > 400) {

            scrollTopButton.classList.add(
                "is-visible"
            );

        } else {

            scrollTopButton.classList.remove(
                "is-visible"
            );

        }

    };


    window.addEventListener(
        "scroll",
        updateScrollButton,
        { passive: true }
    );


    updateScrollButton();


    if (scrollTopButton) {

        scrollTopButton.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    /* =================================
       Contact Form Validation
    ================================= */

    const contactForm =
        document.getElementById("contact-form");

    const nameInput =
        document.getElementById("name");

    const emailInput =
        document.getElementById("email");

    const messageInput =
        document.getElementById("message");

    const nameError =
        document.getElementById("name-error");

    const emailError =
        document.getElementById("email-error");

    const messageError =
        document.getElementById("message-error");

    const formSuccess =
        document.getElementById("form-success");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                /* Clear previous messages */

                nameError.textContent = "";
                emailError.textContent = "";
                messageError.textContent = "";
                formSuccess.textContent = "";


                nameInput.classList.remove(
                    "input-error",
                    "input-success"
                );


                emailInput.classList.remove(
                    "input-error",
                    "input-success"
                );


                messageInput.classList.remove(
                    "input-error",
                    "input-success"
                );


                let isValid = true;


                /* =============================
                   Name Validation
                ============================= */

                const name =
                    nameInput.value.trim();


                if (name === "") {

                    nameError.textContent =
                        "Please enter your name.";

                    nameInput.classList.add(
                        "input-error"
                    );

                    isValid = false;

                } else if (name.length < 2) {

                    nameError.textContent =
                        "Name must contain at least 2 characters.";

                    nameInput.classList.add(
                        "input-error"
                    );

                    isValid = false;

                } else {

                    nameInput.classList.add(
                        "input-success"
                    );

                }


                /* =============================
                   Email Validation
                ============================= */

                const email =
                    emailInput.value.trim();


                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


                if (email === "") {

                    emailError.textContent =
                        "Please enter your email address.";

                    emailInput.classList.add(
                        "input-error"
                    );

                    isValid = false;

                } else if (
                    !emailPattern.test(email)
                ) {

                    emailError.textContent =
                        "Please enter a valid email address.";

                    emailInput.classList.add(
                        "input-error"
                    );

                    isValid = false;

                } else {

                    emailInput.classList.add(
                        "input-success"
                    );

                }


                /* =============================
                   Message Validation
                ============================= */

                const message =
                    messageInput.value.trim();


                if (message === "") {

                    messageError.textContent =
                        "Please enter your message.";

                    messageInput.classList.add(
                        "input-error"
                    );

                    isValid = false;

                } else if (message.length < 10) {

                    messageError.textContent =
                        "Message must contain at least 10 characters.";

                    messageInput.classList.add(
                        "input-error"
                    );

                    isValid = false;

                } else {

                    messageInput.classList.add(
                        "input-success"
                    );

                }


                /* =============================
                   Final Validation Result
                ============================= */

                if (isValid) {

                    formSuccess.textContent =
                        "Thank you! Your message has passed validation.";


                    contactForm.reset();


                    nameInput.classList.remove(
                        "input-success"
                    );


                    emailInput.classList.remove(
                        "input-success"
                    );


                    messageInput.classList.remove(
                        "input-success"
                    );

                }

            }
        );

    }

});