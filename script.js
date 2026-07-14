var contactForm = document.querySelector(".contact form");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = contactForm.querySelector('input[type="text"]');
    var email = contactForm.querySelector('input[type="email"]');
    var message = contactForm.querySelector("textarea");

    if (name.value.trim() === "" || email.value.trim() === "" || message.value.trim() === "") {
        alert("Please fill in all fields.");
        return;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value.trim())) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Thank you! Your message has been received.");
    contactForm.reset();
});
