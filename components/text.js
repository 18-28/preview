import { useEffect } from "react"
import StoryblokClient from 'storyblok-js-client'

const Text = (props) => {
    useEffect(() => {       
          const data = async () => {

            const Storyblok = new StoryblokClient({
                accessToken: 'TZNKj6AGu78yS8UIHxicTAtt'
              })

            const stories = await Storyblok.get(`cdn/stories`, {
                version: 'published'
              })
            console.log(stories)
        }
        data()
    })

    return(
        <>
        HARD CODE
        <h1>{props.fields.title}</h1>
        </>
    )
}

export default Text