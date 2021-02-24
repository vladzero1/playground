async function photoUrl(parent, args, context, info) {
    return context.prisma.find(context.PhotoUrl.id === args.id)
}

export default photoUrl;