(function(){
  var comments = atob('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');

  var input = new Uint8Array(comments.length);
  for (var i = 0; i < comments.length; i++) { input[i] = comments.charCodeAt(i);}
  var output = pako.inflate(input);
  window.g_commentLoader.onLoad(JSON.parse(new TextDecoder("utf-8").decode(output)));
})();