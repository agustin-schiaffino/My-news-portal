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

    // Age validation
    var age = document.querySelector("#age");
    var ageError = document.querySelector("#age-error");
    age.addEventListener("blur", validateAge);
    function validateAge(e) {
        var testAge = e.target.value;
        if (testAge>=18 && testAge % 1 === 0) {
            return age.style.border="2px solid green"
        }
        else {
            return ageError.style.display="block", ageError.style.fontSize="11px", age.style.border="2px solid red"
        }
    }
    age.addEventListener("focus", focusAge);
    function focusAge() {
        ageError.style.display="none";
    }

    // Phone Number validation
    var phoneNumb = document.getElementById("phone-number");
    var phoneNumbError = document.getElementById("phonenumb-error");
    phoneNumb.addEventListener("blur", validatePhoneNumb);
    function validatePhoneNumb(e) {
        var testPhoneNumb = e.target.value;
        if (testPhoneNumb.length>=7 && testPhoneNumb.indexOf(" ")<0 && testPhoneNumb.indexOf("-")<0 && testPhoneNumb.indexOf("(")<0 && testPhoneNumb.indexOf(")")<0) {
            return phoneNumb.style.border="2px solid green"
        }
        else {
            return phoneNumbError.style.display="block", phoneNumbError.style.fontSize="11px", phoneNumb.style.border="2px solid red"
        }
    }
    phoneNumb.addEventListener("focus", focusPhoneNumb);
    function focusPhoneNumb() {
        phoneNumbError.style.display="none";
    }

    // Adress validation
    var adress = document.getElementById("adress");
    var adressError = document.getElementById("adress-error");
    adress.addEventListener("blur", validateAdress);
    function validateAdress(e) {
        var letters = /[a-zA-Z]/g;
        var numbers = /[0-9]/g;
        var testAdress = e.target.value;
        if (testAdress.match(letters) && testAdress.match(numbers) && testAdress.indexOf(" ")>0 && testAdress.length>=5) {
            return adress.style.border="2px solid green" 
        }
        else {
            return adressError.style.display="block", adressError.style.fontSize="11px", adress.style.border="2px solid red"
        }  
    }
    adress.addEventListener("focus", focusAdress);
    function focusAdress() {
        adressError.style.display="none";
    }

    //City validation
    var city = document.getElementById("City");
    var cityError = document.getElementById("city-error")
    city.addEventListener("blur", validateCity);
    function validateCity(e) {
        var testCity = e.target.value;
        if (testCity.length>=3) {
            return city.style.border="2px solid green";   
        }
        else {
            return cityError.style.display="block", cityError.style.fontSize="11px", city.style.border="2px solid red";
        }  
    }
    city.addEventListener("focus", focusCity);
    function focusCity() {
        cityError.style.display="none";
    }

    // Postal Code validation
    var postCode = document.querySelector("#postal-code");
    var postCodeError = document.querySelector("#postal-code-error");
    postCode.addEventListener("blur", validatePostCode);
    function validatePostCode(e) {
        var testPostCode = e.target.value;
        if (testPostCode.length>=3) {
            return postCode.style.border="2px solid green";
        }
        else {
            return postCodeError.style.display="block", postCodeError.style.fontSize="11px", postCode.style.border="2px solid red"
        }
    }
    postCode.addEventListener("focus", focusPostCode);
    function focusPostCode() {
        postCodeError.style.display="none";
    }

    // DNI Number validation
    var dniNumb = document.getElementById("dni-number");
    var dniError = document.getElementById("dni-error");
    dniNumb.addEventListener("blur", validateDni);
    function validateDni(e) {
        var testDni = e.target.value;
        if (testDni.length>6 && testDni.length<9) {
            return dniNumb.style.border="2px solid green";
        }
        else {
            return dniError.style.display="block", dniError.style.fontSize="11px", dniNumb.style.border="2px solid red";
        }
    }
    dniNumb.addEventListener("focus", focusDni);
    function focusDni() {
        dniError.style.display="none";
    }
}
    
