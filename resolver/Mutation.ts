export async function postPhotoUrl(parent, args, context, info) {
    const newPhoto = await context.prisma.PhotoUrl.create({
        desciption: args.description
    })
    return newPhoto
};

module.exports = {
    postPhotoUrl
};