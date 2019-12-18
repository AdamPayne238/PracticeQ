module.exports = { industry, coach, tags };

function industry(parent, _args, context) {
	return context.prisma.post({ id: parent.id }).industry();
}

function coach(post) {
	return { __typename: 'User', id: post.coachID };
}

function tags(parent, _args, context) {
	return context.prisma.post({ id: parent.id }).tags();
}