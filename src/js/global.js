// =============================================================
//  
//  Alerts
//	
// ============================================================= 


// Use the class .alert-gone to remove
// the element from the DOM

// Use the class .alert-hide to just
// hide the element from the DOM


// This removes the element from the DOM
$('.close').click(function(e) {
  var elem = $(e.currentTarget).parents('.alert-gone');
  elem.removeClass('in');
  
  setTimeout(function () {
    elem.remove();
  }, 450);
});

// This just hides the element
$('.close').click(function(e){
  var hiding = $(e.currentTarget).parents('.alert-hide');
  hiding.removeClass('in');
});