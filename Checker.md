# My Programs

This project contains three programs:

1. Simple Progress Bar
2. Digital Clock
3. Anagram Checker

## Complete HTML, CSS & JavaScript Code

```html
<html>
<head>
<title>My programs</title>
<style>
.progress{
position:absolute;
top:20px;
left:20px;
}
.clock{
position:absolute;
top:20px;
right:20px;
}
.anagram{
text-align:center;
margin-top:200px;
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
body {
            text-align: center;
            font-family: Arial;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
        }

        #result {
            margin-top: 20px;
            font-size: 18px;
        }


</style>
</head>
<body>
<div class="progress">
<h2>Simple Progress Bar</h2>

    <div class="progressContainer">
        <div class="progressBar"id="progressBar">0%</div>
    </div>

    <br>

    <button onclick="startProgress()">Start</button>
</div>
<div class="clock">
<h1>Digital Clock</h1>
    <div id="clock"></div>

</div>
<h2>Anagram Checker</h2>

    <button onclick="checkAnagram()">Check Anagram</button>

    <div id="result"></div>
<script>
let width = 0;
        function startProgress() {


            width = width + 10;

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
let words = [
            "listen", "silent",
            "eat", "tea",
            "god", "dog",
            "hello", "world",
            "cat", "act"
        ];

        function checkAnagram() {

            let anagram = "";
            let notAnagram = "";

            for (let i = 0; i < words.length; i = i + 2) {

                let word1 = words[i];
                let word2 = words[i + 1];

                if (word1.split("").sort().join("") ==
                    word2.split("").sort().join("")) {

                    anagram = anagram +
                        word1 + " - " + word2 + "<br>";

                } else {

                    notAnagram = notAnagram +
                        word1 + " - " + word2 + "<br>";
                }
            }

            document.getElementById("result").innerHTML =
                "<h3>Anagram</h3>" + anagram +
                "<h3>Not Anagram</h3>" + notAnagram;
        }

</script>
</body>
</html>
