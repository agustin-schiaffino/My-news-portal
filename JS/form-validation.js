window.onload=function() {
    //Full name validation
    var fullName = document.getElementById("name");
    var fullNameError = document.getElementById("name-error");
    fullName.addEventListener("blur", validateName);
    function validateName(e) {
        var testing = e.target.value;
        if (testing="" || testing.length<6 || testing.indexOf(" ")<=0) {
           return fullNameError.style.display="block", fullNameError.style.fontSize="11px", fullName.style.border="2px solid red"
        }
        else {
           return fullName.style.border="2px solid green";
        }
    }
    fullName.addEventListener("focus", focusValidation)
    function focusValidation() {
        fullNameError.style.display="none" 
    }

    //Email Validation
    var email = document.querySelector("#email");
    var emailError = document.querySelector("#email-error")
    email.addEventListener("blur", validateEmail);
    function validateEmail() {
        var atSign = email.value.indexOf("@")
        var dot = email.value.indexOf(".")
        var extention = email.value.indexOf("com")
        if (atSign>0 && dot>0 && extention>0) {
            return email.style.border="2px solid green";
        }
        else {
            return emailError.style.display="block", emailError.style.fontSize="11px", email.style.border="2px solid red";    
        }
    }
    email.addEventListener("focus", focusEmail)
    function focusEmail() {
        emailError.style.display="none"
        
    }

    // Password validation
    var password = document.getElementById("password");
    var passwordError = document.getElementById("password-error");
    password.addEventListener("blur", validatePassword);
    function validatePassword(e) {
        var letters = /[a-zA-Z]/g;
        var numbers = /[0-9]/g;
        var testPwd = e.target.value;
        if (testPwd.match(letters) && testPwd.match(numbers) && testPwd.length>=8) {
            return password.style.border="2px solid green"
        }
        else {
            return passwordError.style.display="block", passwordError.style.fontSize="11px", password.style.border="2px solid red";  
        }
    }
    password.addEventListener("focus", focusPassword);
    function focusPassword() {
        passwordError.style.display="none"
    }

    //Repeat password validation
    var rePassword = document.getElementById("repeat-password");
    var rePasswordError = document.getElementById("repeat-password-error");
    rePassword.addEventListener("blur", validateRePassword);
    function validateRePassword() {
        if (rePassword.value === password.value) {
            return rePassword.style.border="2px solid green"
        }
        else {
            return rePasswordError.style.display="block", rePasswordError.style.fontSize="11px", rePassword.style.border="2px solid red";  
        }
    }
    rePassword.addEventListener("focus", focusRePassword);
    function focusRePassword() {
        rePasswordError.style.display="none";
    }
}
    
