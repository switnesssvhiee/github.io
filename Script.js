document.addEventListener("DOMContentLoaded", function () {

    // 1. Mobile menu toggle & automatic close on link click
    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", function () {
            navMenu.classList.toggle("show");
        });

        // Close menu automatically when clicking any navigation link on mobile
        navMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("show");
            });
        });
    }

    // 2. Automatically update copyright year
    const year = document.getElementById("year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // 3. Contact form validation and submission feedback
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !subject || !message) {
                formMessage.textContent = "Please complete all fields.";
                formMessage.style.color = "red";
                return;
            }

            formMessage.textContent = "Thank you, " + name + "! Your message has been prepared successfully.";
            formMessage.style.color = "green";

            contactForm.reset();
        });
    }

});