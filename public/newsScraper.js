
$('#scrapeButton').click(function () {
    console.log('welcome to new york times scraping')
    var addCard = $('<div class="col-lg-3 col-md-6 mb-4">\
        <div class="card h-100">\
            <img class="card-img-top" src="http://placehold.it/500x325" alt="">\
            <div class="card-body">\
                <h4 class="card-title">Article Title</h4>\
                <p class="card-author">Article by:</p>\
                <p class="card-summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse\
                    necessitatibus neque.</p>\
            </div>\
            <div class="card-footer">\
                <a href="#" class="btn btn-primary">Add to My Favorites</a>\
            </div>\
        </div>\
    </div>');
    $('#articleCard').append(addCard)

})

$.ajax({
    method: 'GET',
    url: '/article'
}).then(function (articles) {
    console.log(articles)
    // for (var i = 0; )
    var addCard = $('<div class="col-lg-3 col-md-6 mb-4">\
        <div class="card h-100">\
            <img class="card-img-top" src="http://placehold.it/500x325" alt="">\
            <div class="card-body">\
                <h4 class="card-title">Article Title</h4>\
                <p class="card-author">Article by:</p>\
                <p class="card-summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse\
                    necessitatibus neque.</p>\
            </div>\
            <div class="card-footer">\
                <a href="#" class="btn btn-primary">Add to My Favorites</a>\
            </div>\
        </div>\
    </div>');
    $('#articleCard').append(addCard)
})




