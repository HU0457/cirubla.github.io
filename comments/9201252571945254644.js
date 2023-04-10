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