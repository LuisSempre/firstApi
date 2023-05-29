const users = require('../mocks/users')

module.exports = {
	listUsers(request, response) {
		response.whiteHead(200, { 'Content-Type': 'application.json' })
		response.end(JSON.stringify(users))
	}
}
