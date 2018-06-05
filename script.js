/* Task 1 */
 
var element = document.getElementById('heading');
console.log(element.innerText);

/* Task 2 using plain JavaScript */
function addTexts(){
    var task2div = document.getElementById('task2a');
    var paragrap = document.createElement('p');
    paragrap.innerText="GoodBye World!";
    task2div.appendChild(paragrap);
}

function changeColor(newColor) {
  var elem = document.getElementsByTagName('body')[0];

  elem.style.backgroundColor = newColor;
}

function Redirect(){
    window.location.href = "https://www.google.com/";
    
}
var getGoogle = document.getElementById('getGoogle');
getGoogle.addEventListener('click',Redirect);


/* Task 4 using jQuery */

$('#addTextj').click(function(){
    $('#task4a').append("<div>Hello World</div>");
});

$('#red').click(function(){
    $('body').css("background-color","red");
});

$('#green').click(function(){
    $('body').css("background-color","green");
});

 
 
$('#sum').click(function(){
    var num1 = $('#num1').val();
      var num2 = $('#num2').val();
    var sum = Number(num1)+Number(num2);
    $('#answer').text(sum);
});
