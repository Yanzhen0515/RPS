const http = require('http');
const url = require('url'); 
const querystring = require('querystring'); 
const RPS = require('C:/Users/xianyu/Desktop/Project/RPS/src/RPS.');

let won = 0;

http.createServer(function(request, response) {
    const par = url.parse(request.url);

    if (par.pathname === '/game') {
        const query = querystring.parse(par.query);
        const playerAction = query.action;

        if (!playerAction) {
            response.writeHead(400);
            response.end('Invalid input');
            return;
        }

        if (won >= 3) {
            response.writeHead(500);
            response.end('GG');
            return;
        }

        const gameResult = RPS(playerAction);

        response.writeHead(200);

        if (gameResult === 0) {
            response.end('draw');
        } else if (gameResult === 1) {
            response.end('win');
            won++;
        } else if (gameResult === -1) {
            response.end('lose');
        }
        return;
    }

    response.writeHead(404);
    response.end('Not Found');
}).listen(8080);