const jwt = require('jsonwebtoken')

module.exports = {
	checkFields,
	splitAndTrimTags,
	getUserId,
}

const JWT_SECRET = process.env.JWT_SECRET

function checkFields(args) {
	for (let key of Object.keys(args)) {
		if (!args[key]) {
			throw new Error(`Invalid input for ${key}`)
		}
	}
}

function splitAndTrimTags(tagString) {
	const tagArray = tagString.split(',')
	return tagArray.map(tag => {
		return { name: tag.trim() }
	})
}

function getUserId(context) {
	const Authorization = context.request.get('Authorization')
	if (Authorization) {
		const token = Authorization.replace('Bearer ', '')
		const { id: userId } = jwt.verify(token, JWT_SECRET)
		return userId
	}
	throw new Error('Not Authenticated')
}
