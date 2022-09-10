const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();

const url = "https://www.theguardian.com/international";
axios(url).then((response) => {
  const html = response.data;
  const $ = cheerio.load(html);
  const articles = [];

  $(".fc-item__title", html).each(function () {
    const title = $(this).text();
    const link = $(this).find('a').attr('href');
    articles.push({title, link});
    
  });
  console.log(articles);
}).catch(err => {
    console.log("An Error occured when trying to scrap the web:", err)
});

module.exports = app;
