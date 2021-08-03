const express = require("express");
const {gettShirts, addtShirts, updateSku, deleteSku} = require("./tshirtsController")

const app = express();
const PORT = 5050;
app.use(express.json());

app.get("/api/tShirts", gettShirts);

app.post("/api/tShirts", addtShirts);

app.put("/api/tShirts/:id/:sku", updateSku);

app.delete("/api/tShirts", deleteSku);

app.listen(PORT, () => console.log(`listen on port ${PORT}`));
