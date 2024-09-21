import express from 'express'

const app = express()
app.use(express.json())

let datastore = {
users: []

}

app.get("/users", (req, res) => {

    res.json(datastore.users)


})