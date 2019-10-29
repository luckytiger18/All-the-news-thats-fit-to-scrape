var express = require("express");
var mongojs = require("mongojs");
var cheerio = require("cheerio");
var axios = require("axios");
var app = express();
var bodyParser = require('body-parser')

var databaseUrl = "articles";
var collections = ["articlesScrapeData"];

var db = mongojs(databaseUrl, collections);
db.on("error", function (error) {
    console.log("Database Error:", error);
});

app.use(bodyParser());
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.send('Hello World');
});

app.get('/all', function(req, res){
    db.articlesScrapeData.find({}, function(error,found){
        if (error) {
            console.log(error);
        }else{
            res.json(found);
        }
    })
})

app.get("/article", function (req, res) {

    axios.get('https://www.psychologytoday.com/us').then((res) => {
        const talks = [];
        const $ = cheerio.load(res.data)

        $('.teaser-listing--item').each((index, element) => {
            const title = $(element)
                .children()
                .first()
                .text()
            const articleLink = $(element)
                .find('a')
                .last()
                .attr('href')
            const articleImage = $(element)
                .find('img')
                .attr('data-src')

            talks[index] = { title, articleLink, articleImage }

            if (title && articleLink) {
                // Insert the data in the scrapedData db
                db.articlesScrapeData.insert({
                    title,
                    articleLink,
                    articleImage
                },
                    function (err, inserted) {
                        if (err) {
                            // Log the error if one is encountered during the query
                            console.log(err);
                        }
                        else {
                            // Otherwise, log the inserted data
                            console.log(inserted);
                        }
                    })
            }
        });
        // console.log(talks)
    })
})

app.listen(3000, function () {
    console.log("App running on port 3000!");
})

