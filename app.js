var url = require('url');

function renderHTML(path, response) {
	fs.readFile(path, null, function(error, data) {
		if (error) {
			response.writeHead(404);
			response.write('File not found!');
		} else {
			response.write(data);
		}
		response.end();
	});
}

module.exports = {
	handleRequests: function(request, response) {
		response.writeHead(200,{'Content-Type': 'text/html'});

		var path = url.parse(request.url).pathname;
		switch (path) {
			case '/':
				renderHTML('./index.html', response);
				break;
			case '/REVAMP':
				renderHTML('./REVAMP.html', response);
				break;
			case '/ASS':
				renderHTML('./ASS.html', response);
				break;
			default:
				response.writeHead(404);
				response.write('File not found!');
				response.end();
		}
	}
};