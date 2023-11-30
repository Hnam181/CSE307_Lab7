var nameError = document.getElementById('name-error');
var mailError = document.getElementById('email-error');
var passError = document.getElementById('pass-error');
var cpassError = document.getElementById('cpass-error');

function validateName() {
    var name = document.getElementById('contact-name').value;
    if (name.length == 0) {
        nameError.innerHTML = 'Please input your name';
        return false;
    }
    // if (!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
    //     nameError.innerHTML = 'Write full name';
    //     return false;
    // }
    nameError.innerHTML = 'valid';
    return true;
}
function validateEmail() {
    var email = document.getElementById('contact-email').value;
    if (email.length == 0) {
        mailError.innerHTML = 'Please input your email';
        return false;
    }
     if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        mailError.innerHTML = 'Write full email';
         return false;
     }
    mailError.innerHTML = 'valid';
    return true;
}
function validatePass() {
    var pass = document.getElementById('contact-pass').value;
    if (pass.length == 0 || pass.length < 6 ) {
        passError.innerHTML = 'Please input your password(min-length = 6)';
        return false;
    }
    passError.innerHTML = 'valid';
    return true;
}
function validateCpass() {
    var pass = document.getElementById('contact-pass').value;
    var cpass = document.getElementById('contact-cpass').value;
    if (cpass.length == 0) {
        cpassError.innerHTML = 'Please input your confirm password';
        return false;
    }
    if (cpass !== pass) {
        cpassError.innerHTML = 'It does not match your password';
        return false;
    }
    cpassError.innerHTML = 'valid';
    return true;

}