document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector("#quiz-list")) loadQuizzes();
    if (document.querySelector("#dark-mode-toggle")) darkModeToggle();
});

function darkModeToggle() {
    const toggleBtn = document.getElementById("dark-mode-toggle");
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}

function addQuestion() {
    let container = document.getElementById("questions-container");
    let qDiv = document.createElement("div");
    qDiv.innerHTML = `
        <input type="text" placeholder="Question">
        <input type="text" placeholder="Answer">
    `;
    container.appendChild(qDiv);
}

function saveQuiz() {
    let title = document.getElementById("quiz-title").value;
    let questions = [...document.querySelectorAll("#questions-container div")].map(div => ({
        question: div.children[0].value,
        answer: div.children[1].value
    }));

    let quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
    quizzes.push({ title, questions });
    localStorage.setItem("quizzes", JSON.stringify(quizzes));

    window.location.href = "index.html";
}

function loadQuizzes() {
    let quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
    let list = document.getElementById("quiz-list");

    quizzes.forEach((quiz, index) => {
        let li = document.createElement("li");
        li.textContent = quiz.title;
        li.onclick = () => startQuiz(index);
        list.appendChild(li);
    });
}

function startQuiz(index) {
    localStorage.setItem("currentQuiz", index);
    window.location.href = "quiz.html";
}

function submitQuiz() {
    alert("Quiz Submitted!");
}