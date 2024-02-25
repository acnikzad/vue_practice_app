<template>
    <div id="QuizApp">
      <div v-if="!showResults">
        <h2>{{ questions[currentQuestionIndex].text }}</h2>
        <ul>
          <li v-for="(answer, index) in questions[currentQuestionIndex].answers" :key="index">
            <button @click="selectAnswer(answer)">{{ answer }}</button>
          </li>
        </ul>
      </div>
  
      <div v-else>
        <h2>Your Score: {{ calculateScore() }}/{{ questions.length }}</h2>
        <p v-if="calculateScore() === questions.length">Perfect score!</p>
        <p v-else-if="calculateScore() > questions.length / 2">Great job!</p>
        <p v-else>Good effort! Try again to improve your score.</p>
        <button @click="restartQuiz">Restart Quiz</button>
      </div>
      <div>
        <p class="highlight">This is highlighted text.</p>
        <p>This is normal text.</p>
      </div>
      <div class="container">
        <div class="centered-content">Centered</div>
      </div>
      <footer>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
      </footer>
    </div>
  </template>

<script>
  export default {
    name: 'QuizApp',
    data() {
      return {
        currentQuestionIndex: 0,
        userAnswers: [],
        questions: [
          {
            text: "What is the capital of France?",
            answers: ["New York", "London", "Paris", "Tokyo"],
            correctAnswer: "Paris"
          },
          {
            text: "Which language runs in a web browser?",
            answers: ["Java", "C", "Python", "JavaScript"],
            correctAnswer: "JavaScript"
          },
          {
            text: "What is AWD?",
            answers: ["Ford Mustang", "C", "Python", "JavaScript"],
            correctAnswer: "JavaScript"
          },
          // Add more questions as needed
        ],
        showResults: false,
      };
    },
    methods: {
      selectAnswer(answer) {
        this.userAnswers.push(answer);
        if (this.currentQuestionIndex < this.questions.length - 1) {
          this.currentQuestionIndex++;
        } else {
          this.showResults = true;
        }
      },
      calculateScore() {
        return this.userAnswers.filter((answer, index) => 
          answer === this.questions[index].correctAnswer).length;
      },
      restartQuiz() {
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.showResults = false;
      }
    }
  }
</script>

<style>

p.highlight {
  background-color: yellow;
}

footer a {
  text-decoration: underline;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 500px;
  border: 1px solid black;
}

.centered-content {
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 200px;
  border: 1px solid red;
}

</style>