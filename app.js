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
			case '/journal001':
				renderHTML('./journal001.html', response);
				break;
			case '/journal008':
				renderHTML('./journal008.html', response);
				break;
			case '/journal011':
				renderHTML('./journal011.html', response);
				break;
			case '/journal000':
				renderHTML('./journal000.html', response);
				break;
			case '/journal026':
				renderHTML('./journal026.html', response);
				break;
			case '/journal032':
				renderHTML('./journal032.html', response);
				break;
			case '/journal058':
				renderHTML('./journal058.html', response);
				break;
			case '/journal080':
				renderHTML('./journal080.html', response);
				break;
			default:
				response.writeHead(404);
				response.write('File not found!');
				response.end();
		}
	}
};