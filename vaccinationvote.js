/*JS FOR VOTES*/
/*Create variables to target the buttons pro and against and alert the user of their vote*/
function clicksubmit(){

    let votePro = document.getElementById('pro'); 
    alert("You voted PRO");
    let voteAgainst = document.getElementById('against'); 
    alert("You voted AGAINST");

}
clicksubmit();
/*Create variables to save the vote, show the result and increase anytime the user votes*/

let pro = 0;
let against = 0;

function refreshResults () {
  let results = document.getElementById('results');
  results.innerHTML = 'total: ' + (pro + against);
  results.innerHTML += '<br />pro: ' + pro;
  results.innerHTML += '<br />against: ' + against;
}

document.getElementById('pro').addEventListener('click', function () {
  pro++;
  refreshResults();
});

document.getElementById('against').addEventListener('click', function () {
  against++;
  refreshResults();
});