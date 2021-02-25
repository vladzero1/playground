export async function postPhotoUrl(parent, args, context, info) {
    console.log(context.prisma.photoUrl);
    const newPhoto = await context.prisma.photoUrl.create({
        desciption: args.description
    })
    return newPhoto
};

module.exports = {
    postPhotoUrl
};