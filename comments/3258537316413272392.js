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