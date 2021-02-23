async function getPhotoUrl(parent, args, context, info) {
    return context.find(context.PhotoUrl.id === args.id)
}

export default getPhotoUrl;