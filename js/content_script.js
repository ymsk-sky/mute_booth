$(function(){
  var $button = $('<div class="switch-preview-button">●●●●●●●●●</div>');
  $button.on("click", function(){
    var url = location.href;
  });
  $("body").append($button);
});