async function PostPhoto(parent, args, context, info) {
    const newPhoto = await context.prisma.PhotoUrl.create({
        desciption: args.description
    })
    return newPhoto
}

export default PostPhoto;