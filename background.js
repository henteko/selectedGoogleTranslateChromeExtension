chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  var text = request.text;
  if(text === "") return;
  var url = 'http://translate.google.co.jp/#en/ja/' + text;
  chrome.tabs.create({
    'url': url
  }, function() {});
});
