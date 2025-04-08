document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("back-to-top");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 830) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    emailjs.init("gOvS9f_9-ozw8G8YV");
});

document.querySelector(".contact-form").addEventListener("submit", (event) => {
    event.preventDefault();

    let formMsg = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_87alf78", "template_07bkpae", formMsg).then((response) => {
        alert("Email sent successfully!");
        event.target.reset();
    }).catch((error) => alert("Failed to send email. Try again!"));
});