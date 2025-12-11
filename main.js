let storyData;
let currentNode;
let playerName = "";


async function loadStory() {
    const response = await fetch('story.json');
    const data = await response.json();
    return data;
}


async function initStory() {
    storyData = await loadStory();

 
    document.getElementById('startButton').addEventListener('click', () => {
        const nameInput = document.getElementById('playerName').value.trim();
        if (nameInput !== "") {
            playerName = nameInput;
            document.getElementById('startContainer').style.display = "none";
            document.getElementById('storyContainer').style.display = "flex";
            currentNode = storyData.start;
            displayNode(currentNode);
        } else {
            alert("Enter your name to start!");
        }
    });
}


function displayNode(node) {
    const storyText = document.getElementById('storyText');
    const choicesDiv = document.getElementById('choices');
    const restartButton = document.getElementById('restartButton');
    const storyImage = document.getElementById('storyImage');

  
    storyText.textContent = node.text.replace("{name}", playerName);

    storyText.style.opacity = 0;
    setTimeout(() => { storyText.style.opacity = 1; }, 50);

  
    if (node.image) {
        storyImage.src = node.image;
        storyImage.style.display = "block";
        storyImage.style.opacity = 0;
        setTimeout(() => { storyImage.style.opacity = 1; }, 50);
    } else {
        storyImage.style.display = "none";
    }

  
    choicesDiv.innerHTML = '';
    if (node.choices.length === 0) {
        restartButton.style.display = 'block';
    } else {
        restartButton.style.display = 'none';
        node.choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.textContent = choice.text;
            btn.className = 'choiceButton';
            btn.addEventListener('click', () => {
                currentNode = storyData[choice.next];
                displayNode(currentNode);
            });
            choicesDiv.appendChild(btn);
        });
    }
}


document.getElementById('restartButton').addEventListener('click', () => {
    currentNode = storyData.start;
    displayNode(currentNode);
});


document.addEventListener('DOMContentLoaded', () => {
    initStory();

    const storyText = document.getElementById('storyText');
    const storyImage = document.getElementById('storyImage');
    storyText.style.transition = "opacity 0.5s";
    storyImage.style.transition = "opacity 0.5s";
});
