(function(){
/* JQUERY */
var username = $('span.user a').first().text();
if (username == 'login or register'){
  return console.log("RStat Message: You must be Logged in to use RStat");
}
  console.log("RStat Message: Logged in as user "+username);
  var ROOT_URL = 'http://rstat.emaf.ca/link';
  var formData = new FormData();
  formData.append('uname', username);

  $('a.title').each(function(index,el){
    attachListener(el);
  });

    function attachListener(el){
      $(el).click(function(e){
        e.preventDefault();
        var formData = new FormData();
        formData.append('uname', username);
        var subReddit = getSubreddit();
        subReddit = subReddit || 'front';
        formData.append('subreddit', subReddit);
        sendLinkAjax(function(data){
          window.location.href = $(el).attr("href");
        });
      });
    }

    function sendLinkAjax(cb){
      $.ajax(ROOT_URL, {
        success: cb,
        contentType: false,
        cache: false,
        processData: false,
        data: formData,
        type: 'POST'
      });
    }

    function getSubreddit(){
      return window.location.pathname.split('/')[2];
    }
}());
