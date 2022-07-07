import express from "express"
import {getAllItems} from "./index";

const app = express()

app.get("/get-items", async (req, res) => {
    const items = await getAllItems()
    res.json(items)
})

app.get("/random-action", async (req, res) => {
    const total = 3 + 5
    res.json(total)
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})