const ws = require('nodejs-websocket')

const server = ws.createServer(function (conn) {
    conn.on("text", function (str) {
        boardcast(str)
    })
    conn.on('error',function(err){
        console.log(err)
    })
}).listen(8001)

function boardcast(str) {
    server.connections.forEach((conn) => {
        let date = new Date()
        let result = JSON.parse(str)
        result['date'] = `${date.getMonth() + 1} / ${date.getDate()}  ${date.getHours()}:${date.getMinutes()} AM`
        console.log(result)
        conn.sendText(JSON.stringify(result))
    })
}