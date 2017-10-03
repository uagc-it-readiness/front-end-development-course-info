$(document).ready(function () {
    var url = 'http://localhost:3004/cart'

    $(document).ready(function () {
      
    });

    function addToCart() {
       
    }

    function loadCart() {

    }

    function addMore() {
       
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