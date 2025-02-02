function loadQuizzes() {
    fetch("quizzes.json")
        .then(response => response.json())
        .then(quizzes => {
            let list = document.getElementById("quiz-list");
            quizzes.forEach((quiz, index) => {
                let li = document.createElement("li");
                li.textContent = quiz.title;
                li.onclick = () => startQuiz(index, quizzes);
                list.appendChild(li);
            });
        })
        .catch(error => console.error("Error loading quizzes:", error));
}

function startQuiz(index, quizzes) {
    localStorage.setItem("currentQuiz", JSON.stringify(quizzes[index]));
    window.location.href = "quiz.html";
}