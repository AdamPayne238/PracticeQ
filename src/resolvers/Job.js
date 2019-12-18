module.exports = { posts };

function posts(parent, _args, context) {
	return context.prisma.job({ id: parent.id }).posts();
}
