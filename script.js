const quizzes = [
  // Agnes
  [
    {
      question:
        "I came to you at the end of the first semester quite desperate as my Invisible radio code was just not working. What did I call it?",
      options: ["haunted", "fun", "intriguing"],
      correct: 0,
    },
    {
      question:
        "A human robot with instruction and a grid on the floor, looking for a snickers. Our team managed to find the snicker and avoid obstacles. Why?",
      options: [
        "Our instructions meant the robot adapted well to its environment",
        "absolutely just luck",
        "the course was easy",
      ],
      correct: 1,
    },
    {
      question:
        "Creature time. Our creature was a simple construction with a detachable parachute. However, we did not quite get it ready. What was the main issue?",
      options: [
        "the wheels came off",
        "our Arduino died",
        "the fan ate the parachute",
      ],
      correct: 2,
    },
    {
      question:
        "Pothole time. In our tutorials, one line of code was super useful and stuck with me. Which one could it be?",
      options: ["--break system packages", "unzip Pothole.zip", "cd"],
      correct: 0,
    },
  ],
  // Irti
  [
    {
      question:
        "When demonstrating how the pen plotter works I believe, you accidentally dropped something and were upset, because they don't make it anymore. What were you upset about damaging?",
      options: ["the plotter", "your phone", "your phone case"],
      correct: 2,
    },
    {
      question:
        "Our first more meaningful interaction took me by surprise. Why do you think that was?",
      options: [
        "because I was completely clueless and not paying attention",
        "because you read my journal and saw me complaining about the previous lesson being chaotic",
        "because I am scared of human interaction",
      ],
      correct: 1,
    },
    {
      question:
        "In one of our conversations, I called one of the assignment's parts cursed. Which assignment was it?",
      options: ["the invisible radio", "the plotter", "the Amazon experience"],
      correct: 0,
    },
    {
      question:
        "When explaining functions to us, you ran into an issue when using your name as an example. What function were you writing?",
      options: ["function(name)", "function(tutor)", "function(student)"],
      correct: 2,
    },
  ],
  // Jen
  [
    {
      question:
        "My Physical Computing project was a bit underbaked because of (among other thing)?",
      options: [
        "the servo not taking advantage of all the numbers on the dial",
        "the LEDs not working",
        "I did not print the bottom of the final design",
      ],
      correct: 0,
    },
    {
      question:
        "In week 2 (of physical computing), we talked about a word that I marked in my journal as THAT IS GOING TO BE EASY TO REMEMBER - well, I did not. What word was that?",
      options: ["Quixotic", "Skeuomorphism", "Perspicacious"],
      correct: 1,
    },
    {
      question:
        "Our homework was to take pictures of affordances in the wild. Not many people did their homework. I had two pictures in: A picture of our stupid light switches. The another one without any labels and at the time it was not clear to anyone, what it meant and how was it relevant. I was not sure either, so I stayed quiet. What picture was that?",
      options: [
        "a washing machine that simply makes no sense",
        "a TV remote that is overly confusing",
        "a really strangely over-engineered tap at a local restaurant",
      ],
      correct: 2,
    },
    {
      question:
        "Our first in-person tutorial almost did not happen because I was late. Why?",
      options: [
        "I am a careless person",
        "Time is a flat circle",
        "Several months in I still had no idea which building is called Greencoat",
      ],
      correct: 2,
    },
  ],
  // Murad
  [
    {
      question:
        "When I came scrambling for help outside of your working hours, you saved me by a simple advice. What was it?",
      options: [
        "don't worry about it",
        "pip3 install ultralytics",
        "Good Luck",
      ],
      correct: 1,
    },
    {
      question:
        "While not the most capable, I definitely am not a slacker. But there was one group project, that I did not get a chance to participate in, because the group was simply too large. Still, it was the only group that managed to get the thing working (although limping) on first try. What were we building?",
      options: ["IR remote", "inflatables", "Braitenberg vehicle"],
      correct: 2,
    },
    {
      question:
        "What was the most interesting part of the 180Studios exhibition we visited? There are correct answers.",
      options: [
        "Chaos (strangely moving desk lamp with sound)",
        "Pendulum",
        "Planets",
      ],
      correct: 0,
    },
    {
      question:
        "Why did I never respond to your very kind Slack message about me requesting accommodations?",
      options: [
        "I am rude and need to focus more on ME",
        "Chaos",
        "I talked to you while holding pizza",
      ],
      correct: 2,
    },
  ],
];

const quizLabels = ["Agnes", "Irti", "Jen", "Murad"];

document.addEventListener("DOMContentLoaded", () => {
  const quizTitle = document.getElementById("quiz-title");
  const quizSelection = document.getElementById("quiz-selection");
  const quizContainer = document.getElementById("quiz-container");
  const questionContainer = document.getElementById("question-container");
  const optionsContainer = document.getElementById("options-container");
  const nextButton = document.getElementById("next-button");
  const container = document.getElementById("container");

  let currentQuiz = [];
  let currentQuizIndex = -1;
  let currentQuestionIndex = 0;

  quizSelection.addEventListener("click", (e) => {
    if (e.target.classList.contains("quiz-button")) {
      currentQuizIndex = parseInt(e.target.getAttribute("data-quiz"));
      currentQuiz = quizzes[currentQuizIndex];
      currentQuestionIndex = 0;
      quizTitle.textContent = quizLabels[currentQuizIndex];
      quizSelection.classList.add("hidden");
      quizContainer.classList.remove("hidden");
      container.classList.remove("container-start");
      container.classList.add("container");
      showQuestion();
    }
  });

  nextButton.addEventListener("click", () => {
    const selectedOption = document.querySelector(
      'input[name="option"]:checked'
    );

    if (selectedOption) {
      if (
        parseInt(selectedOption.value) ===
        currentQuiz[currentQuestionIndex].correct
      ) {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuiz.length) {
          showQuestion();
        } else {
          window.location.href = `${quizLabels[
            currentQuizIndex
          ].toLowerCase()}.html`;
        }
      } else {
        alert("Wrong answer! Please try again.");
      }
    } else {
      alert("Please select an option.");
    }
  });

  function showQuestion() {
    questionContainer.textContent = currentQuiz[currentQuestionIndex].question;
    optionsContainer.innerHTML = "";
    currentQuiz[currentQuestionIndex].options.forEach((option, index) => {
      const label = document.createElement("label");
      label.innerHTML = `<input type="radio" name="option" value="${index}"> ${option}`;
      optionsContainer.appendChild(label);
    });
    nextButton.classList.remove("hidden");
  }
});
