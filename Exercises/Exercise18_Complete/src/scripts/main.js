$(document).ready(function () {

    //List Titles
    var appendUrl = 'http://jsonplaceholder.typicode.com/posts?userId=1';
	
	$.ajax({
            url:appendUrl,
            method:'GET',
            success: function(response){
				let appendEl = $('#append');
				for(var i = 0; i < response.length; i++){
					debugger;
					appendEl.append('<li>Index: '+i+' Title: '+response[i].title+'</li>');
				}
			},
            failure:function(response){}
        });


    //
    var prependUrl = 'http://jsonplaceholder.typicode.com/photos?albumId=1';
	$.ajax({
            url:prependUrl,
            method:'GET',
            success: function(response){
				let prependEl = $('#prepend');
				for(var i = 0; i < response.length; i++){
					prependEl.append('<li>Index: '+i+' Title: '+response[i].title+'</li>');
				}
			},
            failure:function(response){}
        });

});