const {connect, connection} = require('moongoose')

const connectionString = 'mongodb://localhost:27017'

connect(connectionString)

module.exports = connection