const mongoose = require('mongoose')
const express = require('epress')

const app = express()
const PORT = proccess.env.PORT || 3001

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017', {
    useFindandModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

mongoose.set("debug, true")
app.use(require('./routes'))
app.listen(PORT, () => console.log(`App listening on localhost: ${PORT}`))