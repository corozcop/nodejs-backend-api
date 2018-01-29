const http = require('http')
const app = require('./app')
const port = process.env.PORT || 3000
const server = http.createServer(app)
server.listen(port, function (err) {
  if (err) throw err
  console.log(` listen on port ${port}`)
})
