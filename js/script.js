
// somoth scroll
var easeInOutQuad = new SmoothScroll('[data-easing="easeInOutQuad"]', { speed: 1000, easing: 'easeInOutQuad' });

// make go up botton on scroll 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("go-up").style.display = "block";
    } else {
        document.getElementById("go-up").style.display = "none";
    }
}


// ckeck if user enter vaile user & password (login)
function checkLogin() {

    var user_login = document.forms["form-login"]["username-login"].value;
    var pass_login = document.forms["form-login"]["password-login"].value;

    if ( isEmpty(user_login) || isEmpty(pass_login) ) {
        alert("Please enter all information in the required fields");
    } else {
        alert("Logged in successfully");
    }
}

// ckeck if user enter vlid email, user, password (login)
function checkSignUP() {
     
    var user_signup = document.forms["form-signup"]["username-signup"].value,
        pass_signup = document.forms["form-signup"]["password-signup"].value,
        email       = document.forms["form-signup"]["email"].value,
        check       = document.getElementById("confirm-terms");
        
    if ( isEmpty(user_signup) || isEmpty(pass_signup) || isEmpty(email) ) {
        alert("Please enter all information in the required fields");
    } else if (check.checked == false) {
        alert("Please read the terms and approve them first");
    } else  {
        alert("Successfully Registered");
    }
}

// check if string is empity
function isEmpty(str) {
    return (!str || 0 === str.length);
}