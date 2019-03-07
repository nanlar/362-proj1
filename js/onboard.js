// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

// my functions
function checksubmit(){
  if (checkmail())
  {
    alert('Congratulations, you are now signed up for our newsletter!');
  }
  else {
    // when email check fails, I don't know how to get back to email input again
  }
};

document.getElementById("myform").addEventListener('submit', checksubmit);

// check the email address against a regular expression
function checkmail() {
  var emailbutton = document.getElementById("email");
  var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(emailbutton.value.match(emailformat))
  {
    return true;
  }
  else
  {
    // if your entry is not in the emailformat defined above"
    alert("Email validation failed.\nPlease enter a valid e-mail address.");
    return false;
  }
}
  








