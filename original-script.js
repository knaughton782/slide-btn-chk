$(document).ready(function () {
  /** Hide ALL SLIDES EXCEPT CURRENT, starts with first slide. For development, comment out this section to see all the slides at once. **/

  $('.allSlides .slide').each(function (e) {
    if (e != 0) {
      $(this).hide();
    }
  }); 

/** continue/back BUTTON FUNCTIONALITY  **/
  // for each click on the continue button, hide the current slide and show the next one
  $('.continue').click(function () {
    if ($('.allSlides .slide:visible').next().length != 0) {
      $('.allSlides .slide:visible')
        .next()
        .show()
        .prev()
        .hide();

    } else {
      $('.allSlides .slide:visible').hide();
      $('.allSlides .slide:first').show(); //wraps around and shows first slide again
    }
    // return to default state to hide answer information
    $(".aDisplay").hide();
    $(".bDisplay").hide();
    $(".cDisplay").hide();
  });

  // if back button is used, for each click on the back button, hide the current slide and show the previous one
  $('.back').click(function () {
    if ($('.allSlides .slide:visible').prev().length != 0) {
      $('.allSlides .slide:visible')
        .prev()
        .show()
        .next()
        .hide();
    } else {
      $('.allSlides .slide:visible').hide();
      $('.allSlides .slide:last').show();
    }
    // return to default state to hide answer information
    $(".aDisplay").hide();
    $(".bDisplay").hide();
    $(".cDisplay").hide();
  });
  /** END Back / Continue Button Functionality ****************/


  /****************** button content switching functionality ********************/
  // default state hides answer info
  $(".aDisplay").hide();
  $(".bDisplay").hide();
  $(".cDisplay").hide();

// shows the answer info when the button is clicked
  $('.btn').click(function () {
    switch (true) {
      case $(this).hasClass('aaa'):
        $(".aDisplay").show();
        $(".bDisplay").hide();
        $(".cDisplay").hide();
        break;
      case $(this).hasClass('bbb'):
        $(".aDisplay").hide();
        $(".bDisplay").show();
        $(".cDisplay").hide();
        break;
      case $(this).hasClass('ccc'):
        $(".aDisplay").hide();
        $(".bDisplay").hide();
        $(".cDisplay").show();
        break;
    }
  })
  /****************** end content display ********************/

}); 
