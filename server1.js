var cheerio = require("cheerio");
var axios = require("axios");


axios.get('https://www.psychologytoday.com/us').then((res) => {
    const talks = [];
    const $ = cheerio.load(res.data)

        $('.teaser-listing--item').each ((index, element) => {
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

            talks[index] = { title , articleLink, articleImage}
        });
        console.log(talks)
})

