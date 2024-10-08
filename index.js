const express = require("express")
// const telegramUrl = require("./controller/lib/axios");
const { handler } = require("./controller");
const PORT = process.env.PORT || 4040;

const app = express();

app.use(express.json());
app.post("*", async (req, res) => {
    console.log(req.body)
    res.send(await handler(req))
})

app.post("*", async (req, res) => {
    res.send(await handler(req));
})

app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log(`Sever is running on PORT: ${PORT}`)
})