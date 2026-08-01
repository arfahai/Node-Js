//const http = require("http");
// const fs = require("fs");
// const url = require("url");
const express =require("express");
const app=express()
app.get("/",(req,res)=>{
    return res.send("Hello from HomePage");
});
app.post("/signup",(req,res)=>{
    return res.send("This is SignupForm");
});

const myServer = http.createServer(app);//(req, res) => {
//     if (req.url === "/favicon.ico") return res.end();

//     const log = `${Date.now()}:${req.method}: ${req.url} New request received\n`;
//     const urls = url.parse(req.url);
//     console.log(urls);

//     fs.appendFile("log.txt", log, (err, data) => {
//         switch (req.url) {
//             case "/home":
//                 res.end("HomePage");
//                 break;
//             case "/aboutus":
//                 res.end("About Us");
//                 break;
//             default:
//                 res.end("404 Error Found");
//         }
//     });
// });

// myServer.listen(8000, () => console.log("hello"));
app.listen(8000, () => console.log("hello"));