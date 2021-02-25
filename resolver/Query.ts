export async function allPhotoUrl(parent, args, context, info) {
    return context.prisma.PhotoUrl
};

export async function photoUrl(parent, args, context, info) {
    return context.prisma.PhotoUrl.find(context.PhotoUrl.id === args.id);
};

module.exports = {
    photoUrl,
    allPhotoUrl
};