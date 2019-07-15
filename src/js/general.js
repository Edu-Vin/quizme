	function logAnswer(index){
        this.selectedIndex = index
        this.selectedCategory = this.options[this.index][index]
    };

    function addSelected(index){
        if(this.selectedIndex == index){
            return 'selected';
        }
    };

    function next(){
    	this.Answers[this.index] = this.selectedCategory
    	var key_values = Object.keys(this.options);

    	if(key_values[key_values.length -1] != this.index){
    		var value_index = key_values.indexOf(this.index);
    		this.index = key_values[value_index + 1];
    	}

    	if(key_values[key_values.length -1] == this.index){
    		this.lastOption = true;
    	}
	        	
	};

	function getQuestions(url){
    	this.loader = true;
	    fetch(url, {
	      method:'get'
	    })
	    .then((response) => {
	    	return response.json()
	    })
	    .then((jsonData) => {
	    	this.loader = false;
	    	if(this.$route.name == 'general'){
	    		this.questions = _.shuffle(jsonData.results)
	    	}
	    	else{
	    		this.questions = _.shuffle(jsonData.data)
	    	}
	    })
		        
	};

	function nextQuestion(){
    	this.questionIndex++;
    	if(this.questionIndex == this.questions.length){
    		this.show_answer = true
    	}
	};

    function correctAnswer(){
    	this.correctAnswers++;
    };

    function restartQuiz(){
    	this.lastOption = false;
    	this.selectedIndex = null;
    	this.index = 'Subject'
    	this.show_answer = false;
    	this.questions = []
    };

//QuestionBox Functions

    function selectedAnswer(index){
		this.selectedIndex = index
		this.answered = true
	};


	function getAnswer(){
		
		if(this.selectedIndex === this.correctIndex){
			this.correctAnswer();

		}
		this.nextQuestion();
	};

	function answerClass(index){
		let answerClass = ''
		if(this.answered && this.selectedIndex === index){
			answerClass = 'selected'
			return answerClass
		}
	}

export {logAnswer, addSelected, next, getQuestions, nextQuestion, correctAnswer, restartQuiz, selectedAnswer, getAnswer, answerClass}