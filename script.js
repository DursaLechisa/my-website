```javascript
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
