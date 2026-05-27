const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/", (req, res) => {
    res.send("Backend Running");
});
app.get("/books", (req, res) => {
    const books = [
        {id:1,title:"Harry Potter" },
        {id:2,title:"Atomic Habits" }  
    ];
    res.json(books);
});
app.listen(5000, () => {
    console.log("Server running on port 5000");
});