document.addEventListener("DOMContentLoaded", function () {

    // Mobile menu
    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (menuBtn && navMenu) {

        menuBtn.addEventListener("click", function () {

            navMenu.classList.toggle("show");

        });

    }


    // Automatically update copyright year
    const year = document.getElementById("year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }


    // Contact form
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const subject =
                document.getElementById("subject").value.trim();

            const message =
                document.getElementById("message").value.trim();


            if (!name || !email || !subject || !message) {

                formMessage.textContent =
                    "Please complete all fields.";

                formMessage.style.color = "red";

                return;
            }


            formMessage.textContent =
                "Thank you, " + name +
                "! Your message has been prepared successfully.";

            formMessage.style.color = "green";


            contactForm.reset();

        });

    }

});
