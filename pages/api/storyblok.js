// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import StoryblokClient from 'storyblok-js-client'

export default async function handler(req, res) {
    const Storyblok = new StoryblokClient({
        accessToken: 'GWas2MzQ7yf76pGmKaM0gwtt'
      })
    
      const home = await Storyblok.get('cdn/stories/home', {
        version: 'published'
      })

    res.status(200).json(home);
  }
  