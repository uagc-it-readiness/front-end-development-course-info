/*
    Exercise 27 
*/
$(document).ready(function(){
    /*=======================
        Regular Expressions 
     =======================*/



$('#btnvalidate').click(function(){
    var numVal = $('#numeric').val();
    var pattern = /[a-z]/gi;
    var numResult = numVal.replace(pattern, '');
    
    console.log(numResult);
    
    $('#numeric').val(numResult);
});



     /*=======================
       Array Methods 
     =======================*/




});