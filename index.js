import express from "express";
import path from "path";
import axios from "axios";
import jsonToCvs from "./src/script.js";

const url = 'https://reqres.in/api/users'
const __dirname = path.resolve()
const app = express()
const PORT = process.env.PORT || 3000
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))

let json
let _title = 'Bussines card'
let response = await axios.get(url)

if (response.status) { 
  json = await response.data
} else {
  alert(response.status)
}
console.log(json)

app.get('/', (request, response) => {
    response.render('index',  {title: _title, data: (json['data'])})
}) 

app.get('/persons', (request, response) => {
  response.download(__dirname + '/persons.csv')
})

jsonToCvs(json['data'])

app.listen(PORT, () => {
    console.log(`Start on port: ${PORT}`)
})

