$(document).ready(function () {

    $('form').submit(function (e) {
        e.preventDefault();
    });
	    	
	showQuestion(0);
	     
   
}); //end document.ready

    
   var questionNum = 0;

// Load questions to page
function showQuestion(questionNum) {
        console.log('questionNum',questionNum);
        $('h5').remove();
		$('li').remove();
		$('input[type=submit]').remove();
		$('#question-holder').empty();//this keeps the questions from shifting down

$('#question-holder').append('<h5>' + questions[questionNum].question + '</h5>').fadeIn('fast');

var write = "";
var opt = questions[questionNum].options;
for (var j = 0; j < opt.length; j++) {
    write += "<li><input type='radio' name='choices' class='choices' value=" +(j)+ ">" + opt[j]+ "</li><br/>";
}
$("#question-holder").append(write + "<br/><input type='submit' value='Next' class='fancy'/>").fadeIn('fast');

getAnswer();
}

  function startOver() {
			      //questionNum = 0;//THIS DOESN'T SEEM TO WORK HERE; HAVE TO PUT THIS LINE BF STARTOVER 
				  return showQuestion(0);
				  console.log('questionNum',questionNum);
			
			   } //close startOver function




function getAnswer() {	 
	  
	  
	 
   $('input[type=submit]').click(function() {
   if($("input[type='radio'][name='choices']").is(':checked')) {
   
   selection = $("input[type='radio'][name='choices']:checked").val();
   
   switch (questionNum) {
      case 0: 
	  if (questions[questionNum].options[selection] ==  questions[questionNum].options[0]) {
	        		
		$('h5').remove();
		$('li').remove();
		$('input[type=submit]').remove();
		$('#question-holder').empty()//this keeps the questions from shifting down
		//$('#sm').removeClass('hidden');
		//$("#question-holder").append($('#sm')).fadeIn('fast');
		//$('#sm').addClass('hidden');
		questionNum = 0;
		$("#question-holder").append('<h5>' + explanations[0].title + '</h5><img class="grr" src="nosmoke.png" /><p>' + explanations[0].para + '</p>').fadeIn('fast');
		$("#question-holder").append("<br/><input type='submit' value='Start Over' onclick = 'showQuestion(0);' class='fancy'/>").fadeIn('fast');
		//console.log('questionNum',questionNum);
		
		}
		else {
		
		questionNum = 1;
		showQuestion(1);
		//console.log('questionNum',questionNum);
		}
		break;
   
	  case 1: 
	  if (questions[questionNum].options[selection] ==  questions[questionNum].options[0]) {
	        		
		$('h5').remove();
		$('li').remove();
		$('input[type=submit]').remove();
		$('#question-holder').empty();//this keeps the questions from shifting down
		questionNum = 2;
		showQuestion(2);
		//console.log('questionNum',questionNum);
		}
		else {
		$('h5').remove();
		$('li').remove();
		$('input[type=submit]').remove();
		$('#question-holder').empty();//this keeps the questions from shifting down
		questionNum = 3;
		showQuestion(3);
		//console.log('questionNum',questionNum);
		}
		break;
		
		case 2:
		 if (questions[questionNum].options[selection] ==  questions[questionNum].options[0]) {
	        		
		$('h5').remove();
		$('li').remove();
		$('input[type=submit]').remove();
		$('#question-holder').empty();//this keeps the questions from shifting down
		//$('#ar').removeClass('hidden');
		//$("#question-holder").append($('#ar')).fadeIn('fast');
		questionNum = 0;
		$("#question-holder").append('<h5>' + explanations[1].title + '</h5><img class="grr" src="antacid.png" /><p>' + explanations[1].para + '</p>').fadeIn('fast');
		
		$("#question-holder").append("<br/><input type='submit' value='Start Over' onclick = 'showQuestion(0);' class='fancy'/>").fadeIn('fast');
		//console.log('questionNum',questionNum);
		}
		else {
		$('h5').remove();
		$('li').remove();
		$('input[type=submit]').remove();
		$('#question-holder').empty();//this keeps the questions from shifting down
		questionNum = 4;
		showQuestion(4);
		//console.log('questionNum',questionNum);
		}
		break;
		
		case 3:
			        		
		$('h5').remove();
		$('li').remove();
		$('input[type=submit]').remove();
		$('#question-holder').empty();//this keeps the questions from shifting down
		
		if (questions[questionNum].options[selection] ==  questions[questionNum].options[0]) {
		//$('#pn').removeClass('hidden');
		//$("#question-holder").append($('#pn')).fadeIn('fast');
		questionNum = 0;
		$("#question-holder").append('<h5>' + explanations[2].title + '</h5><img class="grr" src="med.png" /><p>' + explanations[2].para + '</p>').fadeIn('fast');
		$("#question-holder").append("<br/><input type='submit' value='Start Over' onclick = 'showQuestion(0);' class='fancy'/>").fadeIn('fast');
		//console.log('questionNum',questionNum);
		}
		
		else {
		//$('#br').removeClass('hidden');
		//$("#question-holder").append($('#br')).fadeIn('fast');
		questionNum = 0;
		$("#question-holder").append('<h5>' + explanations[3].title + '</h5><img class="grr" src="lungs.png" /><p>' + explanations[3].para + '</p>').fadeIn('fast');
		$("#question-holder").append("<br/><input type='submit' value='Start Over' onclick = 'showQuestion(0);' class='fancy'/>").fadeIn('fast');
		//console.log('questionNum',questionNum);
		}
		
		break;
		case 4:
		if (questions[questionNum].options[selection] ==  questions[questionNum].options[0]) {
	        		
		$('h5').remove();
		$('li').remove();
		$('input[type=submit]').remove();
		$('#question-holder').empty();//this keeps the questions from shifting down
		//$('#pnd').removeClass('hidden');
		//$("#question-holder").append($('#pnd')).fadeIn('fast');
		questionNum = 0;
		$("#question-holder").append('<h5>' + explanations[4].title + '</h5><img class="grr" src="water.png" /><p>' + explanations[4].para + '</p>').fadeIn('fast');
		$("#question-holder").append("<br/><input type='submit' value='Start Over' onclick = 'showQuestion(0);' class='fancy'/>").fadeIn('fast');
		//console.log('questionNum',questionNum);
		}
		else {
		$('h5').remove();
		$('li').remove();
		$('input[type=submit]').remove();
		$('#question-holder').empty();//this keeps the questions from shifting down
		questionNum = 5;
		showQuestion(5);
		//console.log('questionNum',questionNum);
		}
		break;
		case 5:
		if (questions[questionNum].options[selection] ==  questions[questionNum].options[0]) {
	        		
		$('h5').remove();
		$('li').remove();
		$('input[type=submit]').remove();
		$('#question-holder').empty();//this keeps the questions from shifting down
		//$('#aa').removeClass('hidden');
		//$("#question-holder").append($('#aa')).fadeIn('fast');
		questionNum = 0;
		$("#question-holder").append('<h5>' + explanations[5].title + '</h5><img class="grr" src="inhaler.png" /><p>' + explanations[5].para + '</p>').fadeIn('fast');
		$("#question-holder").append("<br/><input type='submit' value='Start Over' onclick = 'showQuestion(0);' class='fancy'/>").fadeIn('fast');
		//console.log('questionNum',questionNum);
		}
		else {
		$('h5').remove();
		$('li').remove();
		$('input[type=submit]').remove();
		$('#question-holder').empty();//this keeps the questions from shifting down
		questionNum = 6;
		showQuestion(6);
		//console.log('questionNum',questionNum);
		}
		break;
		case 6:
		$('h5').remove();
		$('li').remove();
		$('input[type=submit]').remove();
		$('#question-holder').empty();//this keeps the questions from shifting down
		
		if (questions[questionNum].options[selection] ==  questions[questionNum].options[0]) {
		//$('#se').removeClass('hidden');
		//$("#question-holder").append($('#se')).fadeIn('fast');
		questionNum = 0;
		$("#question-holder").append('<h5>' + explanations[6].title + '</h5><img class="grr" src="pills2.png" /><p>' + explanations[6].para + '</p>').fadeIn('fast');
		$("#question-holder").append("<br/><input type='submit' value='Start Over' onclick = 'showQuestion(0);' class='fancy'/>").fadeIn('fast');
		//console.log('questionNum',questionNum);
		}
		else {
		//$('#cf').removeClass('hidden');
		//$("#question-holder").append($('#cf')).fadeIn('fast');
		questionNum = 0;
		$("#question-holder").append('<h5>' + explanations[7].title + '</h5><img class="grr" src="sick.png" /><p>' + explanations[7].para + '</p>').fadeIn('fast');
		$("#question-holder").append("<br/><input type='submit' value='Start Over' onclick = 'showQuestion(0);' class='fancy'/>").fadeIn('fast');
		//console.log('questionNum',questionNum);
		}
		
		break;
		}//close switch
	  }
    
	    
		
	
    
	
	
	});
 };//end getAnswer function






    questions = [

    //question 1
	{
            question: "Are you a smoker?",
            options: ["Yes", "No"],
            correct: 0
        },
    {
            question: "Is your cough dry or wet (meaning up you're bringing up phlegm)?",
            options: ["Dry", "Wet"],
            correct: 0
        },
        { //if dry
            question: "When does it bother you?",
            options: ["At night", "All the time"],
            correct: 0
        },
        { //if wet
            question: "Do you have back pain when you cough or take deep breaths, and/or a fever?",
            options: ["Yes", "No"],
            correct: 0
        },
        { //if dry and all the time
            question: "Do you have a drippy sensation in your throat or have to clear your throat often?",
            options: ["Yes", "No"],
            correct: 0
        },
        {
            question: "Do you notice it when you're around allergens, like pet dander or pollen, or when you exercise?",
            options: ["Yes", "No"],
            correct: 0
        },
		
		 {
            question: "Do you take a blood pressure drug in the ace-inhibitor class, like Accupril or Lotensin?",
            options: ["Yes", "No"],
            correct: 0
        }];
		
		explanations = [
		  { title:"Kick the Habit!",
		    para: "It's probably a reaction to cigarette additives, but get checked to rule out conditions including emphysema and cancer."
		  },
		  { title:"Acid Reflux",
		    para: "Acid reflux could be the culprit, even if you don't have heartburn. Ask your doc if you should try antacids."
		  },
		  { title:"Pneumonia",
		    para: "It might be pneumonia, an infection of the lungs. If you have the bacterial form, you'll need antibiotics."
		  },
		  { title:"Bronchitis",
		    para: "You may have inflamed airways, aka bronchitis. Antibiotics can help if it's caused by bacteria."
		  },
		  { title:"Post Nasal Drip",
		    para: "Post-nasal drip, which is caused by inflammation in the nose, could be to blame. An antihistamine or nasal saline rinse should help."
		  },
		  { title:"Allergies/Asthma",
		    para: "Allergies or asthma may be the cause. See your doc for tests; you may need meds and/or an inhaler."
		  },
		  { title:"Side Effect",
		    para: "It's likely a side effect of your medication. Ask your doctor about switching to a different one."
		  },
		  { title:"Cold/Flu",
		    para: "Chances are it's left over from a cold or flu. But if it has lingered for weeks or months, get a checkup to be sure."
		  }
		
		
		];