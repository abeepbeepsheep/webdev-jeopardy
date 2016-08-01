console.log('JS Testing.');

// Making Answer buttons only clickable once
$('.btn-outline-secondary').click(function(){
   $(this).prop('disabled', true);
});
$('.correct').click(function(){
  $(alert("Correct!"));
  $('.correct').toggleClass('successanswer');
  $(score1).append('$10');
});
$('.incorrect').click(function(){
  $(alert("Nope."));
  $(score2).append('$-10');
});

/* Cred to Dr Mike VVV */
var questions = [
  {
    prompt: 'What is the expansion of HTML?',
    options: [ 'Hyper Text Markup Language', 'Holding Text Marker Language', 'Hyperlink Text Management Language', 'Holding Text Modal Language'],
    correctAnswer: 'Hyper Text Markup Language'
  },
  {
    prompt: 'What is the current version of HTML?',
    options: ['HTMLv5.1', 'HTML5', 'HTML2016', 'HTMLC'],
    correctAnswer: 'HTML5'
  },
  {
    prompt: 'What seperate language has largely replaced use of <style></style> elements?',
    options: ['HTMLS Code', 'Style Sheet Language', 'CSS or Central Style Sheet', 'CSS or Cascading Style Sheets'],
    correctAnswer: 'CSS or Cascading Style Sheets'
  },
  {
    prompt: 'What new element type introduced in HTML5 is functionally the same as a Div?',
    options: ['Semantic Tags', 'PseudoDivs', 'DivisionIDs', 'Division Notation'],
    correctAnswer: 'Semantic Tags'
  },
  {
    prompt: 'HTML is the principal source for attributes of Nodes in the DOM. Browsers do not usually allow cross-site actions but there is one major exception:',
    options: ['Get Requests', 'Ping Commands', 'iFrames', 'XSS '],
    correctAnswer: 'iFrames'
  },
];

/* Dr Mike VVV */

function submit() {
  var selected = $(".modal-body input:checked").val();
  alert('You selected ' + selected);
}
function getOptions(question) {
  var $buttonDiv = $('<div class="btn-group" data-toggle="buttons"></div>');
  question.options.forEach(function(opt) {
    var $div = $('<div class="radio">');
    var $label = $('<label class="radio-inline"></label');
    var $input = $('<input type="radio" name="opts" value="' + opt + '">');

    $label.append($input);
    $label.append(opt);

    $div.append($label);
    $buttonDiv.append($div);
  });
  return $buttonDiv;
}

function showQuestion(event, $modal) {
  var button = $(event.relatedTarget);  // Button that triggered the modal
  var num = parseInt(button.data('num'));
  var question = questions[num];
  $modal.find('.modal-title').text(question.prompt);
  $modal.find('.modal-body').empty().append(getOptions(question));
}

$(function() {
  $("#myModal").on('show.bs.modal', function(event) {
    showQuestion(event, $(this));
  });
});

/* ^^^ Dr Mike ^^^ */
$('#myModal').on('hidden.bs.modal', function (e) {

})


















// VVVV Garbage text to hack the Gibson with VVVVV


// $( "" ).click(function() {
//   alert( "Handler for .click() called." );
// });


// Listen for game button clicks-
// Add extra step find particular div that makes modal-
// // Yaml? Tool for typing JSON?


// $('#exampleModal').on('show.bs.modal', function (event) {
//   var button = $(event.relatedTarget) // Button that triggered the modal
//   var recipient = button.data('whatever') // Extract info from data-* attributes
//   var modal = $(this)
//   modal.find('.modal-title').text('New message to ' + recipient)
//   modal.find('.modal-body input').val(recipient)
// })




// Get JSON Example ---

// var text = '{"employees":[' +
// '{"firstName":"John","lastName":"Doe" },' +
// '{"firstName":"Anna","lastName":"Smith" },' +
// '{"firstName":"Peter","lastName":"Jones" }]}';

// obj = JSON.parse(text);
// document.getElementById("demo").innerHTML =
// obj.employees[2].firstName + " " + obj.employees[2].lastName;


// //??? Fix found online for Modal bug issue with Bootstrap???
// $('.modal').on('hidden.bs.modal', function (e) {
//     $('.modal .modal-body').empty();
// });


// Jeopardy JS
// $("p").click(function(){
//     alert("The paragraph was clicked.");
// });
// <script>
// $.getJSON('question1.json'), function(data) {
//   console.log( 'Working' );
// };
// </script>

// console.log('JS Testing.');

// $( "#question" ).append( "<button type="button" class="btn-outline-secondary">1. Hypertext Markup Language</button>" );


// $(


// var text = '{"question":[' +
// '{"answerA":"Hyper Text Markup Language"},' +
// '{"answerB":"Bogus Answer"},' +
// '{"answerC":"Bogus Answer"},' +
// '{"answerD":"Closeish"}]}';

// obj = JSON.parse(text);
// document.getElementById("question").innerHTML = obj.question;


// Code I barely understand, attemped to edit unsuccesfully //

// $(function() {

//     $('.well question').click{function() {

//       $.getJSON('question1.json', function(data) {

//                var item = [];

//                   $.each(data, function(key, value) {

//                 items.push('<li id="' + key + '">' + val +  </li>);

//            });

//            $('<ul/>', {
//             'class': 'interest-list',
//             html: items.join('')
//           }).appendTo('body');

//     });

// });
