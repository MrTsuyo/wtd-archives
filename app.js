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
			case '/journal118':
				renderHTML('./journal118.html', response);
				break;




			case '/LOCATION_001_TAPE_d3R':
				renderHTML('.LOCATION_001_TAPE_d3R.html', response);
				break;
			case '/LOCATION_001_TAPE_kL':
				renderHTML('.LOCATION_001_TAPE_kL.html', response);
				break;
			case '/LOCATION_002_TAPE_WFy':
				renderHTML('.LOCATION_002_TAPE_WFy.html', response);
				break;
			case '/LOCATION_002_TAPE_Y2':
				renderHTML('.LOCATION_002_TAPE_Y2.html', response);
				break;

			case '/LOCATION_003_TAPE_hpd':
				renderHTML('.LOCATION_003_TAPE_hpd.html', response);
				break;

			case '/LOCATION_003_TAPE_mV':
				renderHTML('.LOCATION_003_TAPE_mV.html', response);
				break;

			case '/LOCATION_004_TAPE_zL3':
				renderHTML('.LOCATION_004_TAPE_zL3.html', response);
				break;

			case '/LOCATION_004_TAPE_dl':
				renderHTML('.LOCATION_004_TAPE_dl.html', response);
				break;
			default:
				response.writeHead(404);
				response.write('File not found!');
				response.end();
		}
	}
};