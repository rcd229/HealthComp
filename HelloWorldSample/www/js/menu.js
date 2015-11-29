jQuery(document).ready(function($){

 
// Show/hide the main navigation
$('.menu-toggle').click(function() {
  var el = $('#menu-option');
  console.log("yo");
  console.log(el.text());
  if(el.text() == "open"){
    $('#navul').show();
    el.text('close');
  }
  else{
    $('#navul').hide();
    el.text('open');
  };
  return false;
  // Animation complete.
});

/*$(window).resize(function() {
  if ($(window).width() > 780) {
      $('#navul').show();
  }
  else {
      $('#navul').hide();
  }
});*/



// Stop the navigation link moving to the anchor (Still need the anchor for semantic markup)
$('.menu-toggle a').click(function(e) {
e.preventDefault();
});

});


