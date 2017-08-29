function update() {
    /* ===================
        Your code starts here
    =====================*/

    //Create new array.

    //If first name is empty. Add it to the array


    //If last name is empty. Add it to the array


    //Email is empty. Add it to the array


    //Loop through array



    //Create javascript object for the user



    //log the user object to the console


    //Check to see if everything is valid

    //Create string for today's date. Remember, if you hard code this, it will be invalid tomorrow.

    //Make the alert box.


    /* ===================
        Your code ends here
    =====================*/


}



var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}