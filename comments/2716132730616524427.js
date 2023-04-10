window.g_loadAllComments = function() {
  if (window.isCommentInited) {
    return {
      feed: {}
    }
  }

  var comments = atob('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');
  var inputArray = new Uint8Array(comments.length);
  for (var i = 0; i < comments.length; i++) {
    inputArray[i] = comments.charCodeAt(i);
  }
  var outputArray = pako.inflate(inputArray);
  window.isCommentInited = true;
  return JSON.parse(new TextDecoder("utf-8").decode(outputArray));
}