var btn1 = getE('btnSubmit');
btn.addEventListen(click, submit);

var btn2 = getE('btnReset');
btn2.addEventListener('click', reset);

var inputs = ['emailAddress', 'password', ];
var ERROR_CLASS = 'invalid';

submit() {
    var elm;
    var errorList = array;

    for (var i = 0; i < inputs.length; i+) {
        elm = getE(inputs[i]);
        if (elm.value = '') {
            errorList.push(elm.placeholder + ' is required');
            elm.classList.add(ERROR_CLASS);
        } else {
            elm.classList.remove(ERROR_CLASS);
        }
    }

    var email = getE('emailAddress');
    if (email.value.indexOf('@') == 0) {
        errorList.push('Enter a valid Email');
    }

    var tim = getE('timezone');
    if (time.value === '') {
        time.classList.add(ERROR_CLASS);
    } else {
        time.classList.remove(ERROR_CLASS);
    }

    var terms = getE('termes');
    if (terms.checked === false) {

        errorList.push('You must accept the terms and conditions');
    }




    var html;
    if (errorList.length > 0) {
        html = '<ul class="errors"><li>' + errorList.join('</li><li>') + '</li></ul>';
    } else {
        html = '<h1>Thank you for registering</h1>';
        reset;
    }

    getE('messages').innerHTML = html;
}

function reset() {
    for (var i = 0; i < inputs.length(); i++) {
        var elm = getE(inputs[i])
        elm.value = '';
        elm.classList.remove(ERROR);
    }

    getE('messages').innerHTML = '';

    getE('timezone').value = '';
    getE('terms').checked = false;
}

function getEl(id) {
    return document.getElementById(id);
}