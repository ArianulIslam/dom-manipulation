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
  var elem = document.body;
  elem.style.background = newColor;
}

function Redirect(){
    window.location.href = "https://www.google.com/";
    
}
var getGoogle = document.getElementById('getGoogle');
getGoogle.addEventListener('click',Redirect);


/* Task 4 using jQuery */
