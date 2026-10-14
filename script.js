
/* 1. PAGE NAVIGATION */

const homePage = document.getElementById("homePage");
const profilePage = document.getElementById("profilePage");

const nextButton = document.getElementById("nextButton");
const backButton = document.getElementById("backButton");

nextButton.addEventListener("click", function () {
    homePage.classList.remove("active");
    profilePage.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

backButton.addEventListener("click", function () {
    profilePage.classList.remove("active");
    homePage.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* 2. HOME NAVIGATION LINKS */

const homeLinks = document.querySelectorAll(".home-link");

homeLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        profilePage.classList.remove("active");
        homePage.classList.add("active");
    });
});

/* 3. INITIAL TOPICS */

let webTopics = [
    "HTML",
    "CSS",
    "JavaScript",
    "Backend",
    "Database"
];

/* 4. GET HTML ELEMENTS */

const topicsContainer =
    document.getElementById("topicsContainer");

const countButton =
    document.getElementById("countButton");

const countMessage =
    document.getElementById("countMessage");

const newTopicInput =
    document.getElementById("newTopicInput");

const addTopicButton =
    document.getElementById("addTopicButton");

const topicMessage =
    document.getElementById("topicMessage");

const nameInput =
    document.getElementById("nameInput");

const greetButton =
    document.getElementById("greetButton");

const greeting =
    document.getElementById("greeting");

/* 5. DISPLAY TOPICS */

function displayTopics() {
    topicsContainer.innerHTML = "";

    for (let i = 0; i < webTopics.length; i++) {
        const topicItem = document.createElement("p");

        topicItem.textContent =
            (i + 1) + ". " + webTopics[i];

        topicsContainer.appendChild(topicItem);
    }
}

displayTopics();

/* 6. COUNT TOPICS */

countButton.addEventListener("click", function () {
    countMessage.textContent =
        "Total topics: " + webTopics.length;
});

/* 7. ADD A NEW TOPIC */

addTopicButton.addEventListener("click", function () {
    const topicName = newTopicInput.value.trim();

    if (topicName === "") {
        topicMessage.textContent =
            "Please enter a topic!";
        return;
    }

    webTopics.push(topicName);

    displayTopics();

    topicMessage.textContent =
        "Topic added successfully!";

    newTopicInput.value = "";

    countMessage.textContent =
        "Total topics: " + webTopics.length;
});

/* 8. GREETING */

greetButton.addEventListener("click", function () {
    const name = nameInput.value.trim();

    if (name === "") {
        greeting.textContent =
            "Please enter your name!";
    } else {
        greeting.textContent =
            "Hello, " + name + "!";
    }
});
