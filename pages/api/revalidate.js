export default async function revalidate(req, res){

    console.log(req.body.text)

    try {
        await res.revalidate(req.body.full_slug)
        return res.status(200).json({ message: `Revalidated: ${req.body.full_slug}` })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}