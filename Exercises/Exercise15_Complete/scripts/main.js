$(document).ready(function () {

    ///// Code goes here

    $('#btnOne').on('click', part1);

    function part1() {
        alert('hello world');
    }


    $('#btnTwo').on('click', part2);

    function part2() {
        $('.update-html').html('<h3>Hello Word!</h3>');

    }

    $('#btnThree').on('click', part3);

    function part3(){
        $('#text-update').val('Hello World');
    }

    $('#btnCopyHtml').on('click', part4);

    function part4(){
        var copiedHtml = $('.copy-html').html();
        console.log(copiedHtml);
        $('.paste-html').html(copiedHtml);
    }

    $('#btnCopyValues').on('click', part5);
    function part5(){
        var copiedValue = $('#copy-text').val();
        $('#paste-text').val(copiedValue);
    }



});