const express = require("express")
const {graphqlHTTP} = require("express-graphql")
const schema = require("./schema/schema")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
app.use(cors())

mongoose.connect('mongodb+srv://MartinEmbon:Dianakupervaser5@cluster0.fal8x.mongodb.net/graphql-ninja?retryWrites=true&w=majority')
mongoose.connection.once("open",()=>{
    console.log("connected to db")
})



app.use("/graphql",graphqlHTTP({
    schema,
    graphiql:true
}))

app.listen(4000,()=>console.log("server running on 4000"))