export async function allPhotoUrl(parent, args, context, info) {
    return context.prisma.photoUrl
};

export async function photoUrl(parent, args, context, info) {
    return context.prisma.photoUrl.findUnique({where: {id: parseInt(args.id)}});
};

module.exports = {
    photoUrl,
    allPhotoUrl
};