export default async function revalidate(req, res){

    console.log(req.body.text)
    console.log(req.body.full_slug)

    const revalidationSlug = req.body.full_slug === 'home' ? '/' : `/${req.body.full_slug}`

    console.log(revalidationSlug)

    try {
        await res.revalidate(revalidationSlug)
        return res.status(200).json({ message: `Revalidated: ${req.body.full_slug}` })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}