
const homePage = document.getElementById("home");
const aboutPage = document.getElementById("about");
const socialPage = document.getElementById("social");
const contactPage = document.getElementById("contact");

function showPage(pageToShow) {
    const pages = [
        homePage,
        aboutPage,
        socialPage,
        contactPage
    ];

    pages.forEach(function(page) {
        page.hidden = page !== pageToShow;
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document.getElementById("nextButton").addEventListener("click", function() {
    showPage(aboutPage);
});

document.getElementById("backButton").addEventListener("click", function() {
    showPage(homePage);
});

document.getElementById("socialButton").addEventListener("click", function() {
    showPage(socialPage);
});

document.getElementById("aboutButton").addEventListener("click", function() {
    showPage(aboutPage);
});

document.getElementById("contactButton").addEventListener("click", function() {
    showPage(contactPage);
});

document.getElementById("socialBackButton").addEventListener("click", function() {
    showPage(socialPage);
});

document.getElementById("homeButton").addEventListener("click", function() {
    showPage(homePage);
});
