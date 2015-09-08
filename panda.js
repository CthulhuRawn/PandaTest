var https = require('https');
var http = require('http');

http.createServer(function(request,response)
{
  response.writeHeader(200, {"Content-Type": "text/plain"});
	https.get('https://status.github.com/api/messages.json', function(res) {

	  res.on('data', function(d) {
		response.write(d);
		response.end();	
		return;
	  });

	}).on('error', function(e) {
	  console.error(e);
	});
	
}).listen(8080);


