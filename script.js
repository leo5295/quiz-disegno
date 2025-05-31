// Seleziona 30 domande casuali dal database definito in quiz-data.js
function getRandomQuestions(data, count) {
    const shuffled = data.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

const selectedQuestions = getRandomQuestions(quizData, 30);

// Variabili di stato
let currentQuestion = 0;
let userAnswers = new Array(selectedQuestions.length).fill(null);
let score = 0;
let correctCount = 0;
let incorrectCount = 0;
let skippedCount = 0;

// Elementi DOM
const quizContent = document.getElementById('quiz-content');
const progressBar = document.getElementById('progress-bar');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const resultsContainer = document.getElementById('results-container');
const scoreElement = document.getElementById('score');
const scoreText = document.getElementById('score-text');
const correctCountElement = document.getElementById('correct-count');
const incorrectCountElement = document.getElementById('incorrect-count');
const skippedCountElement = document.getElementById('skipped-count');
const feedbackDetails = document.getElementById('feedback-details');

// Funzione per mostrare la domanda corrente
function showQuestion() {
    const question = selectedQuestions[currentQuestion];

    // Aggiorna la barra di avanzamento
    const progress = ((currentQuestion + 1) / selectedQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;

    // Crea il contenuto della domanda
    let optionsHtml = '<div class="options-grid">';
question.options.forEach((option, index) => {
    const isSelected = userAnswers[currentQuestion] === index;
    optionsHtml += `
        <div class="option ${isSelected ? 'selected' : ''}" data-index="${index}">
            <div class="option-letter">${String.fromCharCode(97 + index)}</div>
            <div class="option-text">${option}</div>
        </div>
    `;
});
optionsHtml += '</div>';


    // Aggiungi l'immagine se presente
    let imageHtml = '';
    if (question.image) {
        imageHtml = `
            <img src="${question.image}" alt="Figura per la domanda" class="question-image">
            <div class="image-caption">Figura per la domanda</div>
        `;
    }

    const questionHtml = `
        <div class="question-container" id="question-section">
            <div class="question-number">Domanda ${currentQuestion + 1} di ${selectedQuestions.length}</div>
            <div class="question-text">${question.question}</div>
            ${imageHtml}
            <div class="options-container">${optionsHtml}</div>
        </div>
    `;

    quizContent.innerHTML = questionHtml;

    setTimeout(() => {
    const questionSection = document.getElementById('question-section');
    if (questionSection) {
        questionSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}, 50);


    // Event listener alle opzioni
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', () => {
            document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');

            const selectedIndex = parseInt(option.getAttribute('data-index'));
            userAnswers[currentQuestion] = selectedIndex;
        });
    });

    prevBtn.disabled = currentQuestion === 0;
    nextBtn.textContent = currentQuestion === selectedQuestions.length - 1 ? 'Termina Quiz' : 'Prossima';
}

// Calcolo del punteggio
function calculateScore() {
    score = 0;
    correctCount = 0;
    incorrectCount = 0;
    skippedCount = 0;

    selectedQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];

        if (userAnswer === null) {
            skippedCount++;
        } else {
            const selectedOption = question.options[userAnswer];

            if (userAnswer === question.correctAnswer) {
                score += 1;
                correctCount++;
            } else if (selectedOption === "Non rispondo") {
                skippedCount++;
            } else {
                score -= 0.25;
                incorrectCount++;
            }
        }
    });

    score = Math.max(0, score);
}

// Mostra i risultati
function showResults() {
    calculateScore();

    scoreElement.textContent = score.toFixed(2);
    correctCountElement.textContent = correctCount;
    incorrectCountElement.textContent = incorrectCount;
    skippedCountElement.textContent = skippedCount;

    const maxScore = selectedQuestions.length;
    const percentage = (score / maxScore) * 100;
    let message = '';

    if (percentage >= 90) {
        message = "Perfetto! Sei un vero esperto di disegno tecnico!";
    } else if (percentage >= 70) {
        message = "Ottimo risultato! Hai una solida conoscenza del disegno tecnico.";
    } else if (percentage >= 50) {
        message = "Buon lavoro! Hai una conoscenza base del disegno tecnico.";
    } else {
        message = "Continua a studiare! Con un po' più di pratica migliorerai sicuramente.";
    }

    scoreText.textContent = message;

    feedbackDetails.innerHTML = '';
    selectedQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        let feedbackClass = '';
        let feedbackIcon = '';
        let feedbackStatus = '';

        if (userAnswer === null || question.options[userAnswer] === "Non rispondo") {
            feedbackClass = 'skipped';
            feedbackIcon = '<i class="fas fa-forward"></i> ';
            feedbackStatus = 'Non risposta';
        } else if (userAnswer === question.correctAnswer) {
            feedbackClass = 'correct';
            feedbackIcon = '<i class="fas fa-check-circle"></i> ';
            feedbackStatus = 'Corretta';
        } else {
            feedbackClass = 'incorrect';
            feedbackIcon = '<i class="fas fa-times-circle"></i> ';
            feedbackStatus = 'Errata';
        }

        const feedbackHtml = `
    <div class="feedback-item ${feedbackClass}">
        <div class="feedback-question">${feedbackIcon}Domanda ${index + 1}: ${question.question}</div>
        ${question.image ? `<img src="${question.image}" alt="Immagine domanda ${index + 1}" class="question-image">` : ""}
        <div class="feedback-answer">La tua risposta: <strong>${userAnswer !== null ? question.options[userAnswer] : 'Nessuna risposta'}</strong></div>
        <div class="feedback-answer">Stato: <strong>${feedbackStatus}</strong></div>
        <div class="feedback-explanation">${question.feedback}</div>
    </div>
`;


        feedbackDetails.innerHTML += feedbackHtml;
    });

    document.querySelector('.navigation').style.display = 'none';
    quizContent.style.display = 'none';
    resultsContainer.style.display = 'block';
}

// Gestione dei pulsanti
nextBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (userAnswers[currentQuestion] === null) {
        const nonRispondoIndex = selectedQuestions[currentQuestion].options.findIndex(opt => opt === "Non rispondo");
        if (nonRispondoIndex !== -1) {
            userAnswers[currentQuestion] = nonRispondoIndex;
        }
    }

    if (currentQuestion < selectedQuestions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showResults();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
});

document.querySelectorAll('.btn-restart').forEach(restartBtn => {
    restartBtn.addEventListener('click', () => {
        currentQuestion = 0;
        userAnswers = new Array(selectedQuestions.length).fill(null);
        score = 0;
        correctCount = 0;
        incorrectCount = 0;
        skippedCount = 0;

        document.querySelector('.navigation').style.display = 'flex';
        quizContent.style.display = 'block';
        resultsContainer.style.display = 'none';

        showQuestion();
    });
});


// Inizia il quiz
showQuestion();
