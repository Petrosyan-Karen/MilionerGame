let divHelps = document.querySelectorAll("#help > div");
let questionDiv = document.getElementById("question");
let answersDiv = document.querySelectorAll("#answers > div");
let divRight = document.getElementById("right"); 

let currentLang = 'en';
let level = 0;
let currentQuestion;
let isFiftyUsed = false;

// --- Language Switcher ---
document.getElementById('lang-dropdown').addEventListener('change', function() {
    currentLang = this.value;
    level = 0;
    fillQuestion();
    // Remove used helps and reset answer styles
    for (let div of divHelps) div.classList.remove("used");
    for (let d of answersDiv) d.classList.remove('answer-selected', 'answer-correct', 'answer-wrong');
});
let helps = {
    "audience": () => {
        // Find the correct answer div among displayed answers
        let correctDiv;
        for (let div of answersDiv) {
            if (currentQuestion.isCorrect(div.innerText)) {
                correctDiv = div;
                break;
            }
        }

        // Calculate correct answer percent
        let correctPercent = getRandomInt(84 - 6 * level, 100 - 6 * level + 1);
        correctDiv.innerText += ` (${correctPercent}%)`;

        let rem = 100 - correctPercent;
        // Collect visible wrong answers
        let visibleWrongDivs = [];
        for (let div of answersDiv) {
            if (div !== correctDiv && div.style.visibility !== "hidden") {
                visibleWrongDivs.push(div);
            }
        }

        // Distribute remaining percent randomly among wrong answers
        for (let i = 0; i < visibleWrongDivs.length; i++) {
            let percent = (i === visibleWrongDivs.length - 1) ? rem : getRandomInt(rem + 1);
            visibleWrongDivs[i].innerText += ` (${percent}%)`;
            rem -= percent;
        }
    },
    "fifty": () => {
        // Find all displayed wrong answers
        let wrongDivs = [];
        for (let div of answersDiv) {
            if (!currentQuestion.isCorrect(div.innerText)) {
                wrongDivs.push(div);
            }
        }
        // Randomly hide two wrong answers
        for (let i = 0; i < 2 && wrongDivs.length > 0; i++) {
            let idx = getRandomInt(wrongDivs.length);
            wrongDivs[idx].style.visibility = "hidden";
            wrongDivs.splice(idx, 1);
        }
        isFiftyUsed = true;
    },
    "call": () => {
        // Find all visible answers
        let visibleDivs = Array.from(answersDiv).filter(div => div.style.visibility !== "hidden");
        // Decide if the call will be correct
        let isCorrect = isProable(100 - 5 * level);
        let suggestion;
        if (isCorrect) {
            // Suggest the correct answer
            suggestion = visibleDivs.find(div => currentQuestion.isCorrect(div.innerText));
        } else {
            // Suggest a random wrong answer
            let wrongDivs = visibleDivs.filter(div => !currentQuestion.isCorrect(div.innerText));
            suggestion = wrongDivs[getRandomInt(wrongDivs.length)];
        }
        if (suggestion) {
            alert(uiText[currentLang].call + " " + suggestion.innerText.split(' (')[0]);
        } else {
            alert(uiText[currentLang].noSuggestion);
        }
    },
    "change": () => {
        fillQuestion(currentQuestion.question);
    },
}

function fillQuestion(currentText) {
    // Remove color classes from all answers
    for (let d of answersDiv) {
        d.classList.remove('answer-selected', 'answer-correct', 'answer-wrong');
        d.style.visibility = "visible";
    }

 let levelQuestions = questions[currentLang][level];
let index = getRandomInt(levelQuestions.length);
currentQuestion = levelQuestions[index];
    // ensure the new question is different from the current one
    while (currentText && currentQuestion.question == currentText) {
        index = getRandomInt(levelQuestions.length);
        currentQuestion = levelQuestions[index];
    }

    // set text
    questionDiv.innerHTML = `<span class='question-level'>${level + 1}</span>. ${currentQuestion.question}`;

    // set level highlight
    let current = divRight.querySelector(".current");
    current && current.classList.remove("current");
    divRight.querySelectorAll("div")[14 - level].classList.add("current");

    // set answers
    let answers = [...currentQuestion.answers];
    for (let i = 0; i < 4; i++) {
        index = getRandomInt(answers.length); 
        answersDiv[i].style.visibility = "visible";
        answersDiv[i].innerText = answers[index];
        answersDiv[i].setAttribute("data-answer", answers[index]);
        answers.splice(index, 1);
    }
}

function reset() {
    for (let div of divHelps) {
        div.classList.remove("used");
    }
    level = 0;
    fillQuestion();
}

function playSound(source) {
    let element = document.getElementById(`sound-${source}`);
    if (!element) return;
    element.pause();
    element.currentTime = 0;
    element.play();
}

fillQuestion();

// helps click event
for (let div of divHelps) {
    div.addEventListener("click", (e) => {
        if (e.target.classList.contains("used")) {
            return; // if help is already used, do nothing
        }
        e.target.classList.add("used"); // mark help as used

        let type = e.target.getAttribute("data-type");
        helps[type]();
    });
}

// answers click event
for (let div of answersDiv) {
    div.addEventListener("click", function () {
        // Prevent multiple clicks during animation
        if (document.querySelector('.answer-selected')) return;

        // Remove previous classes
        for (let d of answersDiv) {
            d.classList.remove('answer-selected', 'answer-correct', 'answer-wrong');
        }

        div.classList.add('answer-selected');

        setTimeout(() => {
            if (currentQuestion.isCorrect(div.innerText)) {
                div.classList.remove('answer-selected');
                div.classList.add('answer-correct');
                playSound("correct-answer");
                level++;

                setTimeout(() => {
                    if (level < questions[currentLang].length) {
                        fillQuestion();
                    } else {
                        // Game won
                        let amountDiv = divRight.querySelector(".current");
                        let amount = amountDiv ? amountDiv.innerText : "0";
                        alert(uiText[currentLang].congrats + "\n" + uiText[currentLang].won + amount);
                        reset();
                        playSound("new-game");
                    }
                }, 1000);

            } else {
                div.classList.remove('answer-selected');
                div.classList.add('answer-wrong');
                playSound("wrong-answer");
               setTimeout(() => {
    // Find the last safe level (5, 10, or 15)
    let safeLevel = 0;
    if (level >= 15) safeLevel = 15;
    else if (level >= 10) safeLevel = 10;
    else if (level >= 5) safeLevel = 5;

    let amount = "$0";
    if (safeLevel > 0) {
        let safeIndex = 15 - safeLevel;
        let amountDiv = divRight.querySelectorAll("div")[safeIndex];
        amount = amountDiv ? amountDiv.innerText : "$0";
    }
    alert(uiText[currentLang].wrong + "\n" + uiText[currentLang].won + amount);
    reset();
}, 1000);
            }
        }, 5000);
    });
}

document.getElementById("img").addEventListener("click", function() {
    document.getElementById("sound-intro").play();
});