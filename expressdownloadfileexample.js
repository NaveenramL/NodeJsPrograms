const express = require("express");

const app = express();

app.get("/download",(req, res) => {
    console.log("file download example...");
    const filePath = "D:\\Infograss\\whatsapp.jpeg";
    res.download(filePath);
});

app.listen(9000);