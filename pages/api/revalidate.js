export default async function revalidate(req, res){

    try {
        console.log(`revalidating: ${req.query.slug}`)
        await res.revalidate(req.query.slug)
        return res.status(200).json({ message: `Revalidated: ${req.query.slug}` })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}