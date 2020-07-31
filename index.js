const wkhtmltopdf = require("wkhtmltopdf");
const fs = require("fs");

// url
// wkhtmltopdf("http://google.com/", { pageSize: "letter" }).pipe(
//     fs.createWriteStream("./output/out.pdf")
// );

// read file
wkhtmltopdf(fs.readFileSync("./assets/invoice.html"), {}).pipe(
    fs.createWriteStream("out.pdf")
);

// another way read file
// wkhtmltopdf(fs.readFileSync("./assets/invoice.html", "utf-8"), {
//     pageWidth: "210",
//     pageHeight: "297",
//     output: "./output/out.pdf",
// });
