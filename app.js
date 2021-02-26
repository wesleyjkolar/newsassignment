let articles = news.articles
let newsContainer = document.getElementById("newsContainer")

let articleArray = articles.map((article) => {
    let author = article.author ? article.author : ""
    let title = article.title ? article.title : ""
    let description = article.description ? article.description : ""
    let url = article.url ? article.url : ""
    let urlToImage = article.urlToImage ? article.urlToImage : "/Users/wesleykolar/Desktop/week4/newsassignment/download.jpg"
    let publishedAt = article.publishedAt ? article.publishedAt : ""

    let articleDiv =
    `<div id="article">
        <h2>${author}</h2>
        <p>${title}</p><br>
        <img src="${urlToImage}"/>
        <p>${description}</p>
        <a href="${url}">Click here for full article</a>
        <p>${publishedAt}</p>
    </div>`

    return articleDiv
})

newsContainer.insertAdjacentHTML("beforeend", articleArray.join(""))