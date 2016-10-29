$(document).ready(function(){

var onScreen = "";

$('.btn').click(function() {
      onScreen += this.value;
      document.getElementById("screen").innerHTML = "<p class='onscreen'>" + onScreen + "</p>";
});

$('.ac').click(function() {
      onScreen = "";
      document.getElementById("screen").innerHTML = "<p class='onscreen'>" + onScreen + "</p>";
});

$('.ce').click(function() {
      onScreen = onScreen.slice(0, -1);
      document.getElementById("screen").innerHTML = "<p class='onscreen'>" + onScreen + "</p>";
});

$('.equals').click(function() {
      onScreen = eval(onScreen);
      document.getElementById("screen").innerHTML = "<p class='onscreen'>" + onScreen + "</p>";
});  


});
