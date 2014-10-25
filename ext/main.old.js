/* PURE JS */
/*
var username = document.querySelector('span.user a').innerHTML;
var URL = 'http://rstat.emaf.ca/link';

init(username);

function init(username){
    if (! username){
      return console.log('you must be logged in to reddit to use rstat');
    }

    var elements = document.querySelectorAll('a.title');

    for(var i = 0; i < elements.length; i++){
      var element = elements[i];
      element.onclick = clickHandler;
    }


    function stateChange(){
      console.log(req.status);
    }

    function clickHandler(e){
      console.log('firing request');
      var req = new XMLHttpRequest();
      req.onreadystatechange = stateChange;
      req.open('POST')
      req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      req.send('username='+encodeURIComponent(username)+'data='+encodeURIComponent('nice'));
    }

}
*/
