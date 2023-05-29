const http = require('http')

const routes = require('./routes')

const server = http.createServer((request, response) => {
	console.log(`Request method: ${request.method} | Endpoint: ${request.url}`)

	const route = routes.find((routeObj) => (
		routeObj.endpoints === request.url && routeObj.method === request.method
	))

	// if (request.url === '/users' && request.method === 'GET') {

	// 	UserController.listUsers(request, response)

	// } else {

    //     response.writeHead(404, { 'Content-Type': 'text/html'})
    //     response.end(`Cannot ${request.method} ${request.url}`)
	// }
})

server.listen(3000, () => console.log('Server at http://localhost:3000'))

