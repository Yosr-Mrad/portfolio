// Sticky Navbar on Scroll
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      const navbar = document.querySelector(".navbar.navbar-expand-lg");
      if (window.scrollY > 0) {
        navbar.classList.add("nav-sticky");
      } else {
        navbar.classList.remove("nav-sticky");
      }
    });
  
    // Set progress bar widths
    document.querySelector(".progress-bar855").style.width = "85%";
    document.querySelector(".progress-bar85").style.width = "85%";
    document.querySelector(".progress-bar95").style.width = "95%";
    document.querySelector(".progress-bar90").style.width = "90%";
    document.querySelector(".progress-bar8555").style.width = "85%";
    document.querySelector(".progress-bar85-react").style.width = "85%";
    document.querySelector(".progress-bar60-node").style.width = "60%";
    document.querySelector(".progress-bar95-html").style.width = "95%";
    document.querySelector(".progress-bar85-css").style.width = "85%";
    document.querySelector(".progress-bar80-php").style.width = "80%";
    document.querySelector(".progress-bar85-sql").style.width = "85%";
    document.querySelector(".progress-bar80-nosql").style.width = "80%";
    
  });
  
  // Typing Effect
  document.addEventListener("DOMContentLoaded", function () {
    const terms = [
      "Web Developer",
      "Web Designer",
      "Front End Developer",
      "Apps Designer",
      "Coordinator",
      "Radio Presenter",
      "Communications Trainer",
    ];
  
    const typingTerm = document.getElementById("typing-term");
  
    let index = 0; // Current term index
    let charIndex = 0; // Current character index
    let isDeleting = false; // Whether we're deleting text
    const typingSpeed = 150; // Typing speed in ms
    const deletingSpeed = 50; // Deleting speed in ms
    const delayBetweenTerms = 1000; // Delay before typing next term
  
    function typeEffect() {
      const currentTerm = terms[index];
      if (isDeleting) {
        // Remove characters
        typingTerm.textContent = currentTerm.slice(0, charIndex--);
      } else {
        // Add characters
        typingTerm.textContent = currentTerm.slice(0, charIndex++);
      }
  
      // Manage transitions
      if (!isDeleting && charIndex === currentTerm.length) {
        // Finished typing, wait, then start deleting
        setTimeout(() => (isDeleting = true), delayBetweenTerms);
      } else if (isDeleting && charIndex === 0) {
        // Finished deleting, move to next term
        isDeleting = false;
        index = (index + 1) % terms.length; // Loop back to the start
      }
  
      // Recursively call the function with appropriate speed
      setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
    }
  
    // Start the typing effect
    typeEffect();
  });
  
  const quizData = [
    {
      question: "What does HTML stand for?",
      options: [
        "HyperText Markup Language",
        "HighText Machine Language",
        "Hyperloop Machine Language",
        "None of the above"
      ],
      answer: "HyperText Markup Language"
    },
    {
      question: "Which CSS property is used to change the text color?",
      options: ["font-color", "text-color", "color", "background-color"],
      answer: "color"
    },
    {
      question: "Which HTML tag is used to define a hyperlink?",
      options: ["<link>", "<a>", "<href>", "<hyperlink>"],
      answer: "<a>"
    },
    {
      question: "Which JavaScript keyword is used to declare a variable?",
      options: ["var", "let", "const", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "What is the correct syntax to link an external CSS file in HTML?",
      options: [
        "<stylesheet href='style.css'>",
        "<style src='style.css'>",
        "<link rel='stylesheet' href='style.css'>",
        "<css href='style.css'>"
      ],
      answer: "<link rel='stylesheet' href='style.css'>"
    },
    {
      question: "How can you add a comment in a CSS file?",
      options: [
        "// This is a comment",
        "/* This is a comment */",
        "<!-- This is a comment -->",
        "# This is a comment"
      ],
      answer: "/* This is a comment */"
    },
    {
      question: "What does the 'DOM' stand for in JavaScript?",
      options: [
        "Document Object Model",
        "Display Object Management",
        "Digital Object Model",
        "Data Object Management"
      ],
      answer: "Document Object Model"
    },
    {
      question: "Which HTML element is used for the largest heading?",
      options: ["<h1>", "<h6>", "<head>", "<header>"],
      answer: "<h1>"
    },
    {
      question: "What does the 'position' property in CSS control?",
      options: [
        "The color of an element",
        "The layout of an element",
        "The background of an element",
        "The visibility of an element"
      ],
      answer: "The layout of an element"
    },
    {
      question: "Which method is used to add an element at the end of an array in JavaScript?",
      options: [".push()", ".pop()", ".add()", ".concat()"],
      answer: ".push()"
    }
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      button.classList.add("quiz-option");
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();
  // Select the Redo button
const redoButton = document.getElementById("redo");

// Add an event listener for the Redo button
redoButton.addEventListener("click", function () {
    // Reset question and options
    document.getElementById("question").innerHTML = "";
    document.getElementById("options").innerHTML = "";

    // Restart the quiz (you can reload questions or reset state)
    startQuiz(); // Assuming you have a function to start the quiz
});

// Example function to start the quiz (modify based on your actual implementation)
function startQuiz() {
    // Logic to load the first question and reset states
    document.getElementById("question").innerText = "Welcome to the Quiz!";
    document.getElementById("options").innerHTML = `
        <button>Option 1</button>
        <button>Option 2</button>
    `;
}
