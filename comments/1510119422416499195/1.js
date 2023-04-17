(function(){
  var comments = atob('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');

  var input = new Uint8Array(comments.length);
  for (var i = 0; i < comments.length; i++) { input[i] = comments.charCodeAt(i);}
  var output = pako.inflate(input);
  window.g_commentLoader.onLoad(JSON.parse(new TextDecoder("utf-8").decode(output)));
})();