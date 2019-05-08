function jsonFun(){
    jsonData = "";
    inputURL = $('.inputURL').val();
    $.ajax({
    type:'get',
    //url: 'https://api.rss2json.com/v1/api.json?rss_url=http://sukhmanisakhi.com/feed/',
    url: inputURL,
    dataType: "json",
    success: function(data) {
        jsonData = data;
        //console.log(jsonData.items.length)
        $('h1').html(inputURL);
        $('<a href="'+inputURL+'" class="btn-tab">URL Tab</a> <a href="#" class="btn-dele">X</a>').prependTo('.tab-wrap');
        for (var i=0; i < jsonData.items.length;i++)
        {
            
            $('.dataoutput').append('<div class="data-wrap">'+'<div class="title">'+jsonData.items[i].title+'<span> - '+jsonData.items[i].pubDate+'</span>'+'</div>'+'<div class="bodytext">'+jsonData.items[i].content+'</div>'+'</div>');
        }
    }
    }).fail(function() {
        alert("Ajax failed to fetch data");
    });
}

$(function(){
    $(document).on('click', '.submitURL', function(){
        //alert(0)
        jsonFun();
    })
});