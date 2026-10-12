
// 1. Initial topics
let webTopics = [
    "HTML",
    "CSS",
    "JavaScript",
    "Backend",
    "Database"
];

// 2. Get HTML elements
const topicsContainer = document.getElementById("topicsContainer");
const countButton = document.getElementById("countButton");
const countMessage = document.getElementById("countMessage");

const newTopicInput = document.getElementById("newTopicInput");
const addTopicButton = document.getElementById("addTopicButton");
const topicMessage = document.getElementById("topicMessage");

const nameInput = document.getElementById("nameInput");
const greetButton = document.getElementById("greetButton");
const greeting = document.getElementById("greeting");

// 3. Display all topics
function displayTopics() {
    topicsContainer.innerHTML = "";

    for (let i = 0; i < webTopics.length; i++) {
        const topicItem = document.createElement("p");

        topicItem.textContent =
            (i + 1) + ". " + webTopics[i];

        topicsContainer.appendChild(topicItem);
    }
}

// Show topics when website opens
displayTopics();

// 4. Count topics
countButton.addEventListener("click", function () {
    countMessage.textContent =
        "Total topics: " + webTopics.length;
});

// 5. Add a new topic
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

// 6. Greeting
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
