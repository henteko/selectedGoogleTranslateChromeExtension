$(function() {
  $("body").keydown(function(event){
    if(event.ctrlKey === true && event.which === 72){
      var text = encodeURIComponent($.selection());
      chrome.extension.sendMessage({text: text}, function(response) {});
    }
  });
});
