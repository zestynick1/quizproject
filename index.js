var myQuestions = [
    {
      question: "What is the capital of Somalia?",
      answers: {
        a: 'Asmara',
        b: 'Mogadishu',
        c: 'Nairobi'
      },
      correctAnswer: 'b'
    },
    {
      question: "What is the capital of Democratic republic of the Congo?",
      answers: {
        a: 'Kinchasa',
        b: 'Windheok',
        c: 'Cairo'
      },
      correctAnswer: 'a'
    },
    {
      question: "What is the capital of the Phillipines?",
      answers: {
        a: 'Jakarta',
        b: 'Kuala Lumpur',
        c: 'Manila'
      },
      correctAnswer: 'c'
    },
  ];
  
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
    function showQuestions(questions, quizContainer){
      var output = [];
      var answers;
  
      // for each question...
      for(var i=0; i<questions.length; i++){
        
        // resets the list of answers
        answers = [];
  
        for(letter in questions[i].answers){
  
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label>'
          );
        }
  
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
  
      quizContainer.innerHTML = output.join('');
    }
  
  
    function showResults(questions, quizContainer, resultsContainer){
      
      var answerContainers = quizContainer.querySelectorAll('.answers');
      
      // keeps track of the user's answers
      var userAnswer = '';
      var numCorrect = 0;
      
      // for each question...
      for(var i=0; i<questions.length; i++){
  
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        // if the answer is correct
        if(userAnswer===questions[i].correctAnswer){
          // adds to the number of correct answers
          numCorrect++;
          
          // colors the answers green
          answerContainers[i].style.color = 'lightgreen';
        }
        else{
          // colors the answers red
          answerContainers[i].style.color = 'red';
        }
      }
  
      // shows number of correct answers out of total
      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
  
    showQuestions(questions, quizContainer);
    
    // when submitting, it shows the result
    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    }
  
  }
