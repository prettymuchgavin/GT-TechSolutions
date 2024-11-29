document.addEventListener("DOMContentLoaded", function() {
    const fname = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const problem = document.getElementById("problem");

    document.getElementById("contactForm").addEventListener("input", function() {
        if (fname.value.trim() === '') {
            fname.style.color = "red";
        } else {
            fname.style.color = "black";
        }
        if (email.value.trim() === '') {
            email.style.color = "red";
        } else if (!validateEmail(email.value)) {
            email.style.color = "red";
        } else {
            email.style.color = "black";
        }
        if (phone.value.trim() !== '' && !validatePhone(phone.value)) {
            phone.style.color = "red";
        } else {
            phone.style.color = "black";
        }
        if (problem.value.trim() === '') {
            problem.style.color = "red";
        } else if (problem.value.length < 10) {
            problem.style.color = "red";
        } else {
            problem.style.color = "black";
        }
    });
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function validatePhone(phone) {
        const re = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
        return re.test(String(phone).toLowerCase());
    }
    

    document.getElementById("contactForm").addEventListener("submit", function(event) {

        let isValid = true;
        if (fname.value.trim() === '') {
            alert('Name Field Can Not Be Empty.');
            isValid = false;
        }
        if (email.value.trim() === '') {
            alert('Email Field Can Not Be Empty.');
            isValid = false;
        } else if (!validateEmail(email.value)) {
            alert('Please Enter A Valid Email.');
            isValid = false;
        }
        if (phone.value.trim() !== '' && !validatePhone(phone.value)) {
            alert('Phone Number is Invalid. Try Again or Remove the Number.');
        }
        if (problem.value.trim() === '') {
            alert('Problem Field Can Not Be Empty.');
            isValid = false;
        } else if (problem.value.length < 10) {
            alert('Problems must be 10 characters (Spam Protection)');
            isValid = false;
        }

        if (!isValid){
            event.preventDefault();
        }
        
    });
});