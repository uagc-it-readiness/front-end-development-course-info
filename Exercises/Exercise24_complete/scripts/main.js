$(document).ready(function () {
    $('#btnSubmit').on('click', submitForm);


    function submitForm() {
        var myForm = document.getElementById('frmMyForm');

        if (myForm.checkValidity() === true) {
            $('form').fadeOut('slow', function () {
                $("#thankyou").fadeIn('slow');
            });
        }
        myForm.classList.add('was-validated');






    }



});