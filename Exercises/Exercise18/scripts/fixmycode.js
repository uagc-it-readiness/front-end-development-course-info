$(document).ready(function () {


    $('#btnAdNumbers').on('click', function () {
        /*
            Retrieve the numbers from the input fields
        */
        var firstNumber = $('txtFirstNumber').val();
        var secondNumber = $('txtSecondNumber').val();
        
        /*
            Add the two numbers together
        */
        var sum = firstNumber + secondNumber;

        /*
            If our sum is greater than 10. Add a blue class to the input.
            If our sum is less than 10, add a red class
        */
        if(sum > 10){
            $('txtThirdNumber').addClass('.blue');
            $('txtThirdNumber').RemoveClass('red');
        }else{
            $('txtThirdNumber').addClass('red');
            $('txtThirdNumber').RemoveClass('.blue');
        }

        /*
            Update the third input field with our value.
        */
        $('#txtThirNumber').val() = sum;
    });



});