window.onload=function() {
    //Full name validation
    var fullName = document.getElementById("name");
    var fullNameError = document.getElementById("name-error");
    fullName.addEventListener("blur", validateName);
    function validateName(e) {
        if (fullName.value.length>6 && fullName.value.indexOf(" ")>0) {
           return (
               fullName.style.border="2px solid green",
               true
           )
        }
        else {
           return (
               fullNameError.style.display="block",
               fullNameError.style.fontSize="11px",
               fullName.style.border="2px solid red",
               false
           )
        }
    }
    fullName.addEventListener("focus", focusValidation)
    function focusValidation() {
        fullNameError.style.display="none";
    }

    //Email Validation
    var email = document.querySelector("#email");
    var emailError = document.querySelector("#email-error")
    email.addEventListener("blur", validateEmail);
    function validateEmail(e) {
        var atSign = email.value.indexOf("@")
        var dot = email.value.indexOf(".")
        var extention = email.value.indexOf("com")
        if (atSign>0 && dot>0 && extention>0) {
            return (
                email.style.border="2px solid green",
                true
            ) 
        }
        else {
            return (
                emailError.style.display="block",
                emailError.style.fontSize="11px",
                email.style.border="2px solid red",
                false
            )
        }
    }
    email.addEventListener("focus", focusEmail)
    function focusEmail() {
        emailError.style.display="none";  
    }

    // Password validation
    var password = document.getElementById("password");
    var passwordError = document.getElementById("password-error");
    password.addEventListener("blur", validatePassword);
    function validatePassword(e) {
        var letters = /[a-zA-Z]/g;
        var numbers = /[0-9]/g;
        if (password.value.match(letters) && password.value.match(numbers) && password.value.length>=8) {
            return (
                password.style.border="2px solid green",
                true
            )
        }
        else {
            return (
                passwordError.style.display="block",
                passwordError.style.fontSize="11px",
                password.style.border="2px solid red",
                false
            )
        }
    }
    password.addEventListener("focus", focusPassword);
    function focusPassword() {
        passwordError.style.display="none";
    }

    //Repeat password validation
    var rePassword = document.getElementById("repeat-password");
    var rePasswordError = document.getElementById("repeat-password-error");
    rePassword.addEventListener("blur", validateRePassword);
    function validateRePassword(e) {
        var letters1 = /[a-zA-Z]/g;
        var numbers1 = /[0-9]/g;
        if (rePassword.value === password.value && rePassword.value.match(letters1) && rePassword.value.match(numbers1) && rePassword.value.length>=8) {
            return (
                rePassword.style.border="2px solid green",
                true
            )
        }
        else {
            return (
                rePasswordError.style.display="block",
                rePasswordError.style.fontSize="11px",
                rePassword.style.border="2px solid red",
                false
            )
        }
    }
    rePassword.addEventListener("focus", focusRePassword);
    function focusRePassword() {
        rePasswordError.style.display="none";
    }

    // Age validation
    var age = document.getElementById("age");
    var ageError = document.getElementById("age-error");
    age.addEventListener("blur", validateAge);
    function validateAge(e) {
        if (age.value>=18 && age.value % 1 === 0) {
            return (
                age.style.border="2px solid green",
                true
            )
        }
        else {
            return (
                ageError.style.display="block",
                ageError.style.fontSize="11px",
                age.style.border="2px solid red",
                false
            )
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
        if (phoneNumb.value.length>=7 && phoneNumb.value.indexOf(" ")<0 && phoneNumb.value.indexOf("-")<0 && phoneNumb.value.indexOf("(")<0 && phoneNumb.value.indexOf(")")<0) {
            return (
                phoneNumb.style.border="2px solid green",
                true
            )
        }
        else {
            return (
                phoneNumbError.style.display="block",
                phoneNumbError.style.fontSize="11px",
                phoneNumb.style.border="2px solid red",
                false
            )
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
        if (adress.value.match(letters) && adress.value.match(numbers) && adress.value.indexOf(" ")>0 && adress.value.length>=5) {
            return (
                adress.style.border="2px solid green",
                true
            )
        }
        else {
            return (
                adressError.style.display="block",
                adressError.style.fontSize="11px",
                adress.style.border="2px solid red",
                false
            )
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
        if (city.value.length>=3) {
            return (
                city.style.border="2px solid green",
                true
            )
        }
        else {
            return (
                cityError.style.display="block",
                cityError.style.fontSize="11px",
                city.style.border="2px solid red",
                false
            )
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
        if (postCode.value.length>=3) {
            return (
                postCode.style.border="2px solid green",
                true
            )
        }
        else {
            return (
                postCodeError.style.display="block",
                postCodeError.style.fontSize="11px",
                postCode.style.border="2px solid red",
                false
            )
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
        if (dniNumb.value.length>6 && dniNumb.value.length<9) {
            return (
                dniNumb.style.border="2px solid green",
                true
            )
        }
        else {
            return (
                dniError.style.display="block",
                dniError.style.fontSize="11px",
                dniNumb.style.border="2px solid red",
                false
            )
        }
    }
    dniNumb.addEventListener("focus", focusDni);
    function focusDni() {
        dniError.style.display="none";
    }

    //Send button
    var testButton = document.getElementById("send-button");
    var form = document.getElementById("formulary");
    testButton.addEventListener("click", validateForm);
    function validateForm(e) {
        e.preventDefault();
        validateName(e);
        validateEmail(e);
        validatePassword(e);
        validateRePassword(e);
        validateAge(e);
        validatePhoneNumb(e);
        validateAdress(e);
        validateCity(e);
        validatePostCode(e);
        validateDni(e);

        if (validateName(e) && validateEmail(e) && validatePassword(e) && validateRePassword(e) && validateAge(e) && validatePhoneNumb(e) && validateAdress(e) && validateCity(e) & validatePostCode(e) && validateDni(e)) {
            alert(
                "Full name:" +fullName.value+
                "Email:" +email.value+
                "Password:" +password.value+
                "Age:" +age.value+
                "Phone Number:" +phoneNumb.value+
                "Address:" +adress.value+
                "City:" +city.value+
                "Postal Code:" +postCode.value+
                "DNI Number:" +dniNumb.value
            )
            form.reset()
            
        }
        else {
            alert("Check for possible errors")
        }

        /*if (validateName(e) && validateEmail(e) && validatePassword(e) && validaterePassword(e) && validateAge(e) && validatePhoneNumb(e) && validateAdress(e) && validateCity(e) && validatePostCode(e) && validateDni(e)) {
            alert(
                "Full name:" +fullName.value,
                "Email:" +email.value,
                "Password:" +password.value,
                "Age:" +age.value,
                "Phone Number:" +phoneNumb.value,
                "Address:" +adress.value,
                "City:" +city.value,
                "Postal Code:" +postCode.value,
                "DNI Number:" +dniNumb.value
            );
        }
        else {
            alert("Check for possible errors")
        }*/
    }

    // Bonus
    var itemBonus = document.getElementById("name");
    itemBonus.addEventListener("keyup", testBonus);
    function testBonus(e) {
        document.getElementById("bonus").innerHTML= e.target.value ? "Hello "+fullName.value+"" : "";
    }
}
    
