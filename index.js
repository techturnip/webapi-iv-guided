// this import should always be first
require('dotenv').config()

const server = require('./api/server.js')

const port = process.env.PORT || 4000

server.listen(port, () => {
  console.log(`\n*** Server Running on Port ${port} ***\n`)
})

// when running locally the IP is taken care of by localhost
// and we can hardcode any old port (over 3000) in

// when deploying
// heroku will assign an IP address
// port cannot be hardcoded in
// heroku needs to tell us which port
// (because it may be taken)
