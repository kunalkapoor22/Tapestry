function pickstyle(whichstyle) {
  var expireDate = new Date()
  var expstring = expireDate.setDate(expireDate.getDate() + 30)

  document.cookie = "tapestrystyle=" + whichstyle + "; path=/;" + "; expires=" + expireDate.toGMTString()
}
