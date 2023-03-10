const express = require("express");
const multer = require("multer");

const app = express();
const upload = multer({ dest: 'images/'});

app.post("/upload", upload.any(), (req, res) => {
    console.log(req.files);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end("Done.");
});

app.listen(3000, () => {
    console.log("Server running");
})



