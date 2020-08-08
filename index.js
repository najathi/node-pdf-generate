const express = require("express");
const wkhtmltopdf = require("wkhtmltopdf");
const fs = require("fs");

const app = express();

// url
// wkhtmltopdf("http://google.com/", { pageSize: "letter" }).pipe(
//     fs.createWriteStream("./output/out.pdf")
// );

// read file
// wkhtmltopdf(fs.readFileSync("./assets/invoice.html"), {}).pipe(
//     fs.createWriteStream("out.pdf")
// );

// another way read file
// wkhtmltopdf(fs.readFileSync("./assets/invoice.html", "utf-8"), {
//     pageWidth: "210",
//     pageHeight: "297",
//     output: "./output/out.pdf",
// });

// Download file through browser
app.get("/", (req, res) => {
    wkhtmltopdf(fs.readFileSync("./assets/invoice.html"), {}, function (
        err,
        stream
    ) {
        res.download("output/out.pdf", function (err) {});
    }).pipe(fs.createWriteStream("./output/out.pdf"));
});

app.listen(3000);
