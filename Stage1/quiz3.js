// quiz.js
document.addEventListener('keydown', function (event) {
    if (
        (event.ctrlKey && event.key === 'r') || 
        (event.key === 'F5') || 
        (event.key === 'F12') || 
        (event.ctrlKey && event.shiftKey && event.key === 'I')
    ) {
        event.preventDefault();
        alert('Restricted key press detected!');
    }
});

// Disable right-click context menu
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    alert('Right-click is disabled');
});

// Prompt user if they try to refresh or close the page
window.addEventListener('beforeunload', function (event) {
    const confirmationMessage = "Are you sure you want to leave? Your progress will be lost.";
    event.returnValue = confirmationMessage; // Standard for most browsers
    return confirmationMessage; // For some older browsers
});

// Detect if DevTools is open (by checking screen width)
var checkDevTools = setInterval(function() {
    if (window.outerWidth - window.innerWidth > 100) {
        alert('Developer tools detected!');
        document.body.style.backgroundColor = "red";
    }
}, 1000); // Check every second

const quizData = {
    "circle": [
        { "question": "question data 1", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option B" },
        { "question": "question data 2", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option C" },
        { "question": "question data 3", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option B" },
        { "question": "question data 4", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option C" },
        { "question": "question data 5", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option A" },
        { "question": "question data 6", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option D" },
        { "question": "question data 7", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option D" },
        { "question": "question data 8", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option B" },
        { "question": "question data 9", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option C" },
        { "question": "question data 10", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option A" }
    ],
    "square": [
        { "question": "question data 1", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option B" },
        { "question": "question data 2", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option C" },
        { "question": "question data 3", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option B" },
        { "question": "question data 4", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option C" },
        { "question": "question data 5", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option A" },
        { "question": "question data 6", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option D" },
        { "question": "question data 7", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option D" },
        { "question": "question data 8", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option B" },
        { "question": "question data 9", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option C" },
        { "question": "question data 10", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option A" }
    ],
    "triangle": [
        { "question": "question data 1", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option B" },
        { "question": "question data 2", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option C" },
        { "question": "question data 3", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option B" },
        { "question": "question data 4", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option C" },
        { "question": "question data 5", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option A" },
        { "question": "question data 6", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option D" },
        { "question": "question data 7", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option D" },
        { "question": "question data 8", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option B" },
        { "question": "question data 9", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option C" },
        { "question": "question data 10", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option A" }
    ],
    "star": [
        { "question": "question data 1", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option B" },
        { "question": "question data 2", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option C" },
        { "question": "question data 3", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option B" },
        { "question": "question data 4", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option C" },
        { "question": "question data 5", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option A" },
        { "question": "question data 6", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option D" },
        { "question": "question data 7", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option D" },
        { "question": "question data 8", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option B" },
        { "question": "question data 9", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option C" },
        { "question": "question data 10", "options": ["option A", "option B", "option C", "option D"], "correctAnswer": "option A" }
    ]
};

let currentSet = '';
let currentQuestionIndex = 0;
let correctAnswers = 0;
let extraLife = 0;  // 0 means no extra life, 1 means extra life is available
let timer;
let timeRemaining = 180; // 3 minutes (180 seconds)
let timerRunning = false; // Flag to check if timer is running

// Set up event listeners to start the quiz
document.getElementById("circle").addEventListener("click", () => startQuiz('circle'));
document.getElementById("square").addEventListener("click", () => startQuiz('square'));
document.getElementById("triangle").addEventListener("click", () => startQuiz('triangle'));
document.getElementById("star").addEventListener("click", () => startQuiz('star'));

// Initialize or resume quiz from sessionStorage
function initializeQuiz() {
    const storedProgress = JSON.parse(sessionStorage.getItem('quizProgress'));
    const storedBackgroundColor = sessionStorage.getItem('backgroundColor');
    const isQuizFailed = sessionStorage.getItem('quizFailed');

    // If quiz was previously failed, lock the background color and disable all buttons
    if (isQuizFailed === 'true') {
        document.body.style.backgroundColor = "red";
        disableAnswerButtons();
    }

    if (storedProgress) {
        // Resume quiz progress
        currentSet = storedProgress.currentSet;
        currentQuestionIndex = storedProgress.currentQuestionIndex;
        correctAnswers = storedProgress.correctAnswers;
        extraLifeGiven = storedProgress.extraLifeGiven || false;
        loadQuestion();
        
        // Disable shape selection buttons to prevent re-selection
        disableShapeSelection();
    } else {
        // Show the shape selection page
        document.getElementById("shape-selection").style.display = "block";
    }
}

// Update the timer display every second
function updateTimer() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById("timer").innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    if (timeRemaining <= 0) {
        clearInterval(timer); // Stop the timer
        quizFailed(); // Trigger failure if time runs out
    } else {
        timeRemaining--; // Decrease time remaining
    }
}

function startQuiz(shape) {
    document.getElementById("quiz-container").style.marginTop="80px"
    // Prevent re-selection if quiz is already started
    if (sessionStorage.getItem('quizProgress') || sessionStorage.getItem('quizFailed') === 'true') return;

    // Start the timer
    if (!timerRunning) {
        timerRunning = true;
        timer = setInterval(updateTimer, 1000); // Update every second
    }
    currentSet = shape;
    correctAnswers = 0;
    currentQuestionIndex = 0;
    extraLifeGiven = false;
    
    // Save the initial state in sessionStorage
    sessionStorage.setItem('quizProgress', JSON.stringify({ currentSet, currentQuestionIndex, correctAnswers }));

    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("shape-selection").style.display = "none";
    disableShapeSelection();
    loadQuestion();
}

function loadQuestion() {
    const questionData = quizData[currentSet][currentQuestionIndex];
    document.getElementById("quiz-title").innerText = `${currentSet.charAt(0).toUpperCase() + currentSet.slice(1)} Quiz`;
    document.getElementById("question-container").innerHTML = ` 
        <p>${questionData.question}</p>
        <div id="options-container">
            ${questionData.options.map(option => `
                <button class="option-btn" onclick="checkAnswer('${option}')">${option}</button>
            `).join('')}
        </div>
    `;
}

function quizFailed() {
    // Set background color to red and show the message
    document.body.style.backgroundColor = "red";
    document.getElementById("result-message").innerText = "Time's up! You failed the quiz.";
    
    // Disable all buttons
    disableAnswerButtons();

    // Store the failed state in sessionStorage
    sessionStorage.setItem('quizFailed', 'true');
}

// Disable shape selection after the quiz starts
function disableShapeSelection() {
    document.getElementById("circle").disabled = true;
    document.getElementById("square").disabled = true;
    document.getElementById("triangle").disabled = true;
    document.getElementById("star").disabled = true;
}

// Disable answer selection (buttons) after incorrect answer is selected
function disableAnswerButtons() {
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(button => {
        button.disabled = true;
    });
}

// Check the selected answer
function checkAnswer(selectedOption) {
    const questionData = quizData[currentSet][currentQuestionIndex];
    const correctAnswer = questionData.correctAnswer;

    if (selectedOption === correctAnswer) {
        correctAnswers++;
        document.getElementById("question-container").classList.add("correct");
        if (correctAnswers === 5 && extraLife === 0) {
            extraLife = 1; // Extra life earned
            addlife(); // Show "extra life earned" modal
        }
    } else {
        // If student has completed 5 questions correctly, give them an extra life
        if (extraLife === 1) {
            // If they have an extra life and answer incorrectly, show "extra life taken" modal
            extraLife = 0; // Revoke the extra life
            showModal(); // Show custom modal instead of alert
            sessionStorage.setItem('quizProgress', JSON.stringify({ currentSet, currentQuestionIndex, correctAnswers }));
            return;
        }

        // If no extra life left, game over
        // Set background color to red and lock it
        document.body.style.backgroundColor = "red";
        document.getElementById("result-message").innerText = "You are Dead, please take your Soul and leave...";

        // Save the failed state in sessionStorage
        sessionStorage.setItem('quizFailed', 'true');

        // Disable all answer buttons
        disableAnswerButtons();

        // Store the failed state in sessionStorage
        sessionStorage.setItem('backgroundColor', 'red');
        clearInterval(timer); // Stop the timer on failure
        return;
    }

    // Save progress in sessionStorage
    sessionStorage.setItem('quizProgress', JSON.stringify({
        currentSet,
        currentQuestionIndex: currentQuestionIndex + 1,
        correctAnswers,
        extraLifeGiven
    }));

    if (currentQuestionIndex === 9) {
        if (correctAnswers === 10) {
            document.body.style.backgroundColor = "green";
            document.getElementById("result-message").innerText = "Congratulations player... moving towards the next Stage";
        } else {
            document.body.style.backgroundColor = "red";
            document.getElementById("result-message").innerText = "Game Over, try again!";
        }
        clearInterval(timer); // Stop the timer on quiz completion
        return;
    }

    currentQuestionIndex++;
    loadQuestion();
}

// Function to show the modal when extra life is earned
function addlife() {
    document.getElementById("add-life-modal").style.display = "flex";
}

// Function to close the extra life earned modal
function closeaddlife() {
    document.getElementById("add-life-modal").style.display = "none";
}

// Function to show the modal
function showModal() {
    document.getElementById("extra-life-modal").style.display = "flex";
}

// Function to close the modal
function closeModal() {
    document.getElementById("extra-life-modal").style.display = "none";
}

// Call this function to initialize the quiz when the page is loaded
initializeQuiz();
