# Anagram Checker

This project contains a Simple Progress Bar, Digital Clock, and Anagram Checker using HTML, CSS, and JavaScript.

---

## HTML Code – `index.html`

```html
<html>
<head>
    <title>My prg</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="progress">
    <h2>Simple Progress Bar</h2>
    <div class="progressContainer">
        <div class="progressBar" id="progressBar">0%</div>
    </div>
    <br>
    <button onclick="startProgress()">Start</button>
</div>

<div class="clock">
    <h1>Digital Clock</h1>
    <div id="clock"></div>
</div>

<div class="anagram">
    <h2>Anagram Checker</h2>
    <input type="text" id="word1" placeholder="Enter first word">
    <br>
    <input type="text" id="word2" placeholder="Enter second word">
    <br>
    <button onclick="check()">Check</button>
    <button onclick="clearData()">Clear</button>
    <h3 id="result"></h3>
</div>

<script src="script.js"></script>
</body>
</html>
```

---

## CSS Code – `style.css`

```css
.progress {
    position: absolute;
    top: 20px;
    left: 20px;
}

.clock {
    position: absolute;
    top: 20px;
    right: 20px;
}

.anagram {
    text-align: center;
    margin-top: 200px;
}

.progressContainer {
    width: 400px;
    height: 30px;
    border: 1px solid black;
}

.progressBar {
    width: 0%;
    height: 100%;
    background-color: green;
    text-align: center;
    color: white;
}

input, button {
    padding: 10px;
    margin: 5px;
    font-size: 16px;
}
```

---

## JavaScript Code – `script.js`

```javascript
let width = 0;

function startProgress() {
    width += 10;
    if (width > 100) width = 100;

    document.getElementById("progressBar").style.width = width + "%";
    document.getElementById("progressBar").innerHTML = width + "%";
}

function clock() {
    let d = new Date();

    document.getElementById("clock").innerHTML =
        d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

clock();
setInterval(clock, 1000);

let threeLetterWords = [
    "cat", "act", "dog", "god",
    "rat", "tar", "art"
];

let fourLetterWords = [
    "evil", "vile", "live", "veil",
    "race", "care"
];

let fiveLetterWords = [
    "earth", "heart",
    "angel", "glean",
    "thing", "night"
];

let sixLetterWords = [
    "listen", "silent",
    "rescue", "secure",
    "danger", "garden"
];

function check() {
    let a = document.getElementById("word1").value.toLowerCase().trim();
    let b = document.getElementById("word2").value.toLowerCase().trim();

    if (a === "" || b === "") {
        document.getElementById("result").innerHTML =
            "Please enter both words";
        return;
    }

    let allWords = [
        ...threeLetterWords,
        ...fourLetterWords,
        ...fiveLetterWords,
        ...sixLetterWords
    ];

    if (!allWords.includes(a) || !allWords.includes(b)) {
        document.getElementById("result").innerHTML =
            "Word not found in the array";
        return;
    }

    let sortedA = a.split("").sort().join("");
    let sortedB = b.split("").sort().join("");

    if (sortedA === sortedB) {
        document.getElementById("result").innerHTML = "Anagram";
    } else {
        document.getElementById("result").innerHTML = "Not Anagram";
    }
}

function clearData() {
    document.getElementById("word1").value = "";
    document.getElementById("word2").value = "";
    document.getElementById("result").innerHTML = "";
}
```
