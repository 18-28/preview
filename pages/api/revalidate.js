import StoryblokClient from 'storyblok-js-client'

export default async function revalidate(req, res){

    //get storyblok published stories
    //filter stories array with body.full_slug
    //if is in array call res.revalidate
    //if isn't in array, redeploy the branch

    //create another endpoint for unpublishing

    console.log(req.body.text)

    const Storyblok = new StoryblokClient({
        accessToken: 'TZNKj6AGu78yS8UIHxicTAtt'
      })

      const cacheBuster = Date.now();
    
      const publishedStories = await Storyblok.get(`cdn/stories`, {
        version: 'published',
        cv: cacheBuster
      })

      // return res.status(200).json(publishedStories)

    const isPublished = publishedStories.data.stories.findIndex(story => story.full_slug === req.body.full_slug)
    const revalidationSlug = req.body.full_slug === 'home' ? '/' : `/${req.body.full_slug}`

    if(isPublished != -1){
      console.log('---attempting to revalidate---')
      try {
        console.log('---calling to revalidation---')
          await res.revalidate(revalidationSlug)
          return res.status(200).json({ message: `Revalidated: ${req.body.full_slug}` })
      } catch (error) {
        console.log('---failed to revalidate---')
          return res.status(500).json({ error: error.message })
      }
    } else {
      console.log('---attempting to redeploy---')
      try {
        console.log('---calling redeploy api---')
        const response = await fetch('https://preview-murex.vercel.app/api/redeploy', {
        // const response = await fetch('http://localhost:3000/api/redeploy', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
        },
        })
        const data = await response.json()
        return res.status(200).json(data)
      } catch (error) {
          console.log('---redeploy attempt failed---')
          return res.status(500).json({ error: error.message })
      }
    }
}