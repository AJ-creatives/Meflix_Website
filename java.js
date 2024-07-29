// Add event listener to navbar scroll
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            document.querySelector(".navbar").classList.add("navbar-scroll");
        } else {
            document.querySelector(".navbar").classList.remove("navbar-scroll");
        }
    });
});

// Add