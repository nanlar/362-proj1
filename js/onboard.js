// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

// my functions
function checksubmit(){
    alert('Your Submission Received: Congratulations, you are now signed up for our newsletter!');
    
    // disable submit button;
    var submitbutton = document.getElementById("submit");
    submitbutton.style.opacity = 0.2;
    submitbutton.style.backgroundColor = lightgrey;
};

document.getElementById("Test1").addEventListener('submit', checksubmit);

