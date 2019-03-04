// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

// my functions
function checksubmit(){
    alert('Congratulations, you are now signed up for our newsletter!');
    
    // after alert disable submit button;
    var submitbutton = document.getElementById("submit");
    submitbutton.style.opacity = 0.2;
    submitbutton.style.backgroundColor = yellow;
};

document.getElementById("myform").addEventListener('submit', checksubmit);



