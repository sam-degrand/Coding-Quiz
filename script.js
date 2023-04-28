// Define an array of quiz questions and answers
const questions = [
    {
        question: "What does CSS stand for?",
        choices: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets"],
        answer: "Cascading Style Sheets"
      },
    {
      question: "What is the largest planet in our solar system?",
      choices: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Jupiter"
    },
    {
      question: "What is the highest mountain in the world?",
      choices: ["Mount Everest", "Mount Kilimanjaro", "Mount Fuji", "Mount Rushmore"],
      answer: "Mount Everest"
    },
    {
        question: "What does JS stand for?",
        choices: ["JavaScript", "JavaSyntax", "JavaServer"],
        answer: "JavaScript"
      }
      ,
     {
      question: "What does HTML stand for?",
      choices: ["Hypertext Markup Language", "Hypertext Modeling Language", "Hypertext Management Language"],
      nswer: "Hypertext Markup Language"
     },
     {
        question: "What is the output of console.log(typeof [])?",
        choices: ["object", "array", "undefined"],
        answer: "object"
      },
      {
        question: "What is the correct syntax to add a class to an HTML element using JavaScript?",
        choices: ["document.getElementByClassName('example').className = 'new-class';", "document.getElementById('example').classList.add('new-class');", "document.getElementsByTagName('example')[0].classList.add('new-class');"],
        answer: "document.getElementById('example').classList.add('new-class');"
      },
      {
        question: "Which HTML tag is used to define a table?",
        choices: ["<table>", "<tr>", "<td>"],
        answer: "<table>"
      },
      {
        question: "What is the difference between padding and margin in CSS?",
        choices: ["Padding adds space within an element, while margin adds space outside an element.", "Padding adds space outside an element, while margin adds space within an element.", "There is no difference between padding and margin."],
        answer: "Padding adds space within an element, while margin adds space outside an element."
      },
      {
        question: "Which CSS property is used to control the text color of an element?",
        choices: ["font-weight", "background-color", "color"],
        answer: "color"
      },
      {
        question: "What is the output of console.log(3 + '3')?",
        choices: ["6", "33", "NaN"],
        answer: "33"
      },
      {
        question: "Which HTML tag is used to define a form for user input?",
        choices: ["<input>", "<form>", "<button>"],
        answer: "<form>"
      }

  ];
  
  // Define the timer duration in seconds
  const timerDuration = 60;
  
  // Define variables to keep track of the quiz state
  let currentQuestion = 0;
  let score = 0;
  let timeLeft = timerDuration;
  
  // Get references to HTML elements
  const quizEl = document.getElementById("quiz");
  const questionEl = document.getElementById("question");
  const choicesEl = document.getElementById("choices");
  const timeLeftEl = document.getElementById("time-left");
  
  // Define a function to start the quiz
  function startQuiz() {
    // Hide the start button
    document.getElementById("start-btn").style.display = "none";
    
    // Display the first question
    displayQuestion();
    
    // Start the timer
    const timer = setInterval(function() {
      timeLeft--;
      timeLeftEl.textContent = timeLeft;
      
      if (timeLeft === 0 || currentQuestion === questions.length) {
        // Stop the timer and end the quiz
        clearInterval(timer);
        endQuiz();
      }
    }, 1000);
  }
  
  // Define a function to display a question and its choices
  function displayQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    choicesEl.innerHTML = "";
    
    q.choices.forEach(function(choice) {
      const btn = document.createElement("button");
      btn.classList.add("choice-btn");
      btn.textContent = choice;
      
      // Add an event listener to check the answer when the button is clicked
      btn.addEventListener("click", function() {
        if (choice === q.answer) {
          score++;
        } else {
          timeLeft -= 10; // Subtract 10 seconds for a wrong answer
        }
        
        currentQuestion++;
        
        if (currentQuestion === questions.length) {
          // End the quiz when all questions have been answered
          endQuiz();
        } else {
          displayQuestion();
        }
      });
      
      choicesEl.appendChild(btn);
    });
  }
  
  // Define a function to end the quiz and display the score
 // Define a function to end the quiz and display the score
function endQuiz() {
    // Display a pop-up with the user's score and ask for their initials
    const initials = prompt(`Quiz complete! Your score is ${score} out of ${questions.length}. Enter your initials to save your score.`);
    
    // Add the score and initials to the score list
    const scoreListEl = document.getElementById("score-list");
    const li = document.createElement("li");
    li.textContent = `${initials}: ${score}`;
    scoreListEl.appendChild(li);
  }