
const http = require('http');
const fs = require('fs');
const url = require('url'); 
const querystring = require('querystring'); 

const RPS = require('./RPS');
let won = 0;

http.createServer(function(request,response){
  const par = url.parse(request.url);

  if (par.pathname == '/game') {
    const query = querystring.parse(parsedUrl.query);
    
    const playerAction = query.action;

    if (won >= 3) {
      response.writeHead(500);
      response.end('GG');
      return
    }
  }
  const game = RPS(playerAction);
  response.writeHead(200);

  if(game == 0){
    response.end('draw');
  }

  else if(game == 1){
    response.end('win');
    won++;
  }

  else if(game == -1){
    response.end('win');
  }


}
).listen(8080);