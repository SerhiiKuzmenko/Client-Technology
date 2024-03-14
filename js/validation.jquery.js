$(document).ready(()=>{

    $('#form-for-registration').validate({
        rules:{
            login: "required",
            pass:{
                required: true,
                minlength: 8,
                strongPassword: true 
            },
            repass:{
                required: true,
                equalTo: "#pass",   
            },
            mail:{
                required: true,
                email: true
            },
            phone: "required",
        },
        message:{
            login: "Please enter your login.",
            pass: {
                required: "Enter your password.",
                minlength: "Your password must be at least 8 characters long.",
            },
            repass:{
                required: "Enter your password again.",
                equalTo: "Passwords do not match."
            },
            mail: "Please enter a valid email address",
            phone: "Please enter a valid telephone number",
        },
    });
    $.validator.addMethod("strongPassword", function(value, element) {
        return this.optional(element) || (value.match(/[\W]/)&&value.match(/[0-9]/));
    }, "Your password must contain at least one digit and one special character.");



    $('#qa-form').validate({
        rules:{
            name: "required",
            mail: {
                required: true,
                email: true,
            },
            topic: {
                required: true,
                maxlength: 20,
            },
            QA: "required",
        },
        message:{
            name: "Enter your name.",
            mail: "Enter your valid email address.",
            topic: {
                required: "Ente your topic.",
                maxlength: "The length of the subject should be less than 20 characters.",
            },
            QA: "Enter your questions.",
        },
    });
});





