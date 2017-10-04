$(document).ready(function () {
    var url = 'http://localhost:3004/cart';

    $('#btnAddToCart').on('click', addToCart);
    // $('.remove').on('click', remove);
    $('#main').on('click', '.remove', remove);
    $('#main').on('click', '.addMore', addMore);


    // console.log($('.me').parents('.parent'));
    // console.log($('.me').closest('.main'));

    loadCart();

    function addToCart() {
        var product = $('#product');
        var item = {
            name: product.find('.name').val(),
            qty: parseInt(product.find('.qty').val()),
            img: product.find('.img').val()
        };
        console.log(item);

        $.post(url, item, function () {
            loadCart();
        });

    }

    function loadCart() {
        $.get(url, function (response) {
            var html = convertResponseToHTML(response);
            $('#main').html(html);
        });
    }

    function addMore() {
        var btn = $(this);
        var container = btn.closest('.media');
        var id = container.find('.id').val();
        var newQty = parseInt(container.find('.qty').val()) + 1;

        $.ajax({
            url: url + '/' + id,
            method: 'PATCH',
            contentType: 'application/json',
            data: JSON.stringify({
                qty: newQty
            }),
            success: function () {
                loadCart();
            }
        });



    }

    function remove() {
        var btn = $(this);
        var container = btn.closest('.media');
        var id = container.find('.id').val();

        $.ajax({
            url: url + '/' + id,
            method: 'delete',
            success: function () {
                loadCart();
            }

        });



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
            `;

            html += cartHtml;
        }
        return html;

    }
});