const quiz = [
    {
      question: "Qual foi a contribuição mais conhecida de Grace Hopper para a ciência da computação?",
      choices: ["Desenvolvimento do primeiro compilador", "Criação da primeira linguagem de programação de alto nível", "Desenvolvimento do primeiro computador", "Desenvolvimento da primeira rede de computadores"],
      answer: "Desenvolvimento do primeiro compilador"
    },
    {
      question: "Qual era o nome do primeiro compilador desenvolvido por Grace Hopper?",
      choices: ["A-0 System", "COBOL", "FORTRAN", "C++"],
      answer: "A-0 System"
    },
    {
      question: "Qual o nome do programa que Grace Hopper participou quando ingressou na Marinha dos Estados Unidos?",
      choices: ["WAVES", "DEBUG", "USS COBOL", "WHALE"],
      answer: "WAVES"
    },
    {
      question: "Em que ano Grace Hopper ingressou na Marinha dos Estados Unidos?",
      choices: ["1966", "1971", "1944", "1980"],
      answer: "1944"
    },
    {
      question: "Grace Hopper desenvolveu a primeira linguagem de programação de alto nível em 1959. Qual o nome dado a  essa linguagem?",
      choices: ["JAVA", "COBOL", "FORTRAN", "A-0 System"],
      answer: "COBOL"
    }
  ];
  
  const questionEl = document.getElementById("question");
  const choicesEl = document.getElementById("choices");
  const submitBtn = document.getElementById("submit");
  const resultsEl = document.getElementById("results");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const q = quiz[currentQuestion];
    questionEl.textContent = q.question;
    choicesEl.innerHTML = "";
    for (let i = 0; i < q.choices.length; i++) {
      const choice = q.choices[i];
      const button = document.createElement("button");
      button.textContent = choice;
      button.addEventListener("click", function() {
        if (choice === q.answer) {
          score++;
        }
        currentQuestion++;
        if (currentQuestion < quiz.length) {
          showQuestion();
        }
        else {
          showResults();
        }
      });
      choicesEl.appendChild(button);
    }
  }
  
  function showResults() {
    questionEl.style.display = "none";
    choicesEl.style.display = "none";
    submitBtn.style.display = "none";
    const percent = (score / quiz.length) * 100;
    resultsEl.textContent = `Você acertou ${score} de ${quiz.length} perguntas (${percent}%).`;
  }
  
  showQuestion();
  