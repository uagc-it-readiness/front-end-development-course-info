$(document).ready(function () {
    var url = 'http://localhost:3004/cart'

    $(document).ready(function () {
        $('#btnAddToCart').on('click', addToCart);

        $('#main').on('click', '.addMore', addMore);
        loadCart();
    });

    function addToCart() {
        var product = $('#product');

        var item = {
            name: product.find('.name').val(),
            qty: product.find('.qty').val(),
            img: product.find('.img').val()
        };

        $.post(url, item, function (result) {
            loadCart();
        });

    }

    function loadCart() {

        $.get(url, function (response) {

            //Convert HTML Stuff
            var convertedHTML = convertResponseToHTML(response);

            //Apply the html stuff
            $('#main').html(convertedHTML);

        });

    }

    function addMore() {
        var item = $(this).closest('.media');
        var id = parseInt(item.find('.id').val())

        $.ajax({
            url: url + '/' + id,
            method: 'patch',
           contentType: 'application/json',
            data: JSON.stringify({
                qty: parseInt(item.find('.qty').val()) + 1
            }),
            success: loadCart
        });
        console.log(item);
    }

    function convertResponseToHTML(resp) {
        var html = '';

        for (var i = 0; i < resp.length; i++) {
            var post = resp[i];
            var cartHtml = `
            <div class="media">
            <div class="media-left">
                <img class="media-object" src="${post.img}" alt="...">
            </div>
            <div class="media-body">
              <h4 class="media-heading">${post.name} -  Qty: ${post.qty}</h4>
              
                <input type="text" class="id" value="${post.id}" readonly/>
                <input type="text" class="qty" value="${post.qty}" readonly/>
                <button class="addMore btn btn-success">Add more</button>
                <button class="remove btn btn-warning">Remove</button>

            </div>
          </div>
            `

            html += cartHtml;
        }
        return html;

    }
});