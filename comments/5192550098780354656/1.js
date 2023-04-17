(function(){
  var comments = atob('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');

  var input = new Uint8Array(comments.length);
  for (var i = 0; i < comments.length; i++) { input[i] = comments.charCodeAt(i);}
  var output = pako.inflate(input);
  window.g_commentLoader.onLoad(JSON.parse(new TextDecoder("utf-8").decode(output)));
})();