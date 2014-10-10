var username = document.querySelector('span.user a').innerHTML;
var elements = document.querySelectorAll('a.title');

for(var i = 0; i < elements.length; i++){
  var element = elements[i];
  element.onclick = clickHandler;
}

function clickHandler(e){

}
