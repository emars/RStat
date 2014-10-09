
var elements = document.querySelectorAll('a.title');

for(var i = 0; i < elements.length; i++){
  var element = elements[i];
  element.onclick = clickHandler;
}

function clickHandler(e){
  
}



/*
$('a.title').each(function(element){
  $(element).click(function(e){
    console.log(this);
  });
});
*/
