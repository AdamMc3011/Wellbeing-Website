$(document).ready(function(){
  $('.picture_container .slides >img').click(function()  {
    var $smallImages = $(this).attr('src');
    $('.big-screen >img').attr('src', $smallImages );
  
});
});