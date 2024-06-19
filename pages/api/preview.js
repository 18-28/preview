import StoryblokClient from 'storyblok-js-client'

export default async function handler(req, res){ 

const Storyblok = new StoryblokClient({
    accessToken: 'GWas2MzQ7yf76pGmKaM0gwtt'
  })

  const home = await Storyblok.get(req.query.slug ? `cdn/stories/${req.query.slug}` : 'cdn/stories/home', {
    version: 'draft'
  })

  console.log(home)

  if(!home) {
    return res.status(401).json({message: 'url does not exist'})
  }

res.setPreviewData({})

res.redirect(307, `/${home.data.story.slug}`)

res.end('preview')

//comment
}