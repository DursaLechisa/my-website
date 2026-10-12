let subjects = ["HTML", "CSS", "JavaScript"];

subjects.push("Python");
console.log(subjects);

subjects.pop();
console.log(subjects);

subjects.unshift("Computer Basics");
console.log(subjects);

subjects.shift();
console.log(subjects);

console.log(subjects.includes("CSS"));
console.log(subjects.indexOf("JavaScript"));
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
let number = 1;

while (number <= 5) {
    console.log(number);
    number++;
}

const webTopics = ["HTML", "CSS", "JavaScript", "Backend", "Database"];

const topicsContainer = document.getElementById("topicsContainer");

for (let i = 0; i < webTopics.length; i++) {
    const topicItem = document.createElement("p");

    topicItem.textContent = (i + 1) + ". " + webTopics[i];

    topicsContainer.appendChild(topicItem);
}

const newTopicInput = document.getElementById("newTopicInput");
const addTopicButton = document.getElementById("addTopicButton");
const topicMessage = document.getElementById("topicMessage");

addTopicButton.addEventListener("click", function() {
    const topicName = newTopicInput.value.trim();

    if (topicName === "") {
        topicMessage.textContent = "Please enter a topic!";
    } else {
        const newTopic = document.createElement("p");
        newTopic.textContent = topicName;

        topicsContainer.appendChild(newTopic);

        topicMessage.textContent = "Topic added successfully!";
        newTopicInput.value = "";
    }
});

const countButton = document.getElementById("countButton");
const countMessage = document.getElementById("countMessage");

function countTopics() {
    const total = topicsContainer.querySelectorAll("p").length;
    countMessage.textContent = "Total topics: " + total;
}

countButton.addEventListener("click", countTopics);
javascript
const nameInput = document.getElementById("nameInput");
const greetButton = document.getElementById("greetButton");
const greeting = document.getElementById("greeting");

greetButton.addEventListener("click", function() {
    const name = nameInput.value.trim();

    if (name === "") {
        greeting.textContent = "Please enter your name!";
    } else {
        greeting.textContent = "Hello, " + name + "!";
    }
});
