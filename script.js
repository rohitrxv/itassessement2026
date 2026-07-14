
document.addEventListener("DOMContentLoaded", function () {

    var currentPage = window.location.pathname.split("/").pop() || "index.html";
    var navLinks = document.querySelectorAll(".div-links a");

    navLinks.forEach(function (link) {
        var linkPage = link.getAttribute("href");
        if (linkPage === currentPage) {
            link.style.color = "yellow";
            link.style.fontWeight = "bold";
        }
    });

    var contactForm = document.querySelector(".contact form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            var name = contactForm.querySelector('input[type="text"]');
            var email = contactForm.querySelector('input[type="email"]');
            var message = contactForm.querySelector("textarea");

            if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
                alert("Please fill in your name, email, and message before sending.");
                return;
            }

            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value.trim())) {
                alert("Please enter a valid email address.");
                return;
            }

            alert("Thank you, " + name.value.trim() + "! Your message has been received.");
            contactForm.reset();
        });
    }

    var galleryImages = document.querySelectorAll(".gallery-grid img");

    if (galleryImages.length > 0) {
        var overlay = document.createElement("div");
        overlay.id = "lightbox-overlay";
        overlay.style.cssText =
            "display:none;position:fixed;top:0;left:0;width:100%;height:100%;" +
            "background:rgba(0,0,0,0.85);z-index:1000;text-align:center;cursor:pointer;";

        var overlayImg = document.createElement("img");
        overlayImg.style.cssText =
            "max-width:90%;max-height:85%;margin-top:5vh;border-radius:5px;" +
            "box-shadow:0 0 20px rgba(0,0,0,0.5);";

        overlay.appendChild(overlayImg);
        document.body.appendChild(overlay);

        galleryImages.forEach(function (img) {
            img.addEventListener("click", function () {
                overlayImg.src = img.src;
                overlayImg.alt = img.alt;
                overlay.style.display = "block";
            });
        });

        overlay.addEventListener("click", function () {
            overlay.style.display = "none";
        });
    }

});
