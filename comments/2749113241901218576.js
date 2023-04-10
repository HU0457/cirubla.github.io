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