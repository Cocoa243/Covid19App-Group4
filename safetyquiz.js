// function to calculate the result of the survey
function tabulateAnswers() {
    // initialize variables for each choice's score
    // If you add more choices and outcomes, you must add another variable here.
    var c1score = 0;
    var c2score = 0;
    var c3score = 0;

    
    // get a list of the radio inputs on the page
    var choices = document.getElementsByTagName('input');
    // loop through all the radio inputs
    for (i=0; i<choices.length; i++) {
      // if the radio is checked..
      if (choices[i].checked) {
        // add 1 to that choice's score
        if (choices[i].value == 'c1') {
          c1score = c1score + 1;
        }
        if (choices[i].value == 'c2') {
          c2score = c2score + 1;
        }
        if (choices[i].value == 'c3') {
          c3score = c3score + 1;
        }
      }
    }
    tabulateAnswers()
    
    // Find out which choice got the highest score.
    var maxscore = Math.max(c1score,c2score,c3score);
    
    // Display answer corresponding to that choice
    answerbox.innerHTML = function showImage1(src){
        var img = document.createElement("img");
        img.src = "images/score1.png";
        answerbox.appendChild(img);
    }
      showImage1()   
    if (c2score == maxscore) { // If user chooses the second choice the most, this outcome will be displayed.
        answerbox.innerHTML = function showImage2(src){
            var img = document.createElement("img");
            img.src = "images/score2.png";
            answerbox.appendChild(img);
        }
          showImage2() 
    if (c3score == maxscore) { // If user chooses the third choice the most, this outcome will be displayed.
        answerbox.innerHTML = function showImage3(src){
            var img = document.createElement("img");
            img.src = "images/score.png";
            answerbox.appendChild(img);
        }
          showImage3()        

}}}
  
