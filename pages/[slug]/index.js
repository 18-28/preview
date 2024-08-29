import Image from "next/image";
import { Inter } from "next/font/google";
import StoryblokClient from 'storyblok-js-client'
import Layout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  // console.log(props)
  return (
    <Layout page={props.page} />
  );
}

export async function getStaticProps(context){
//   console.log(context)
  const Storyblok = new StoryblokClient({
    accessToken: 'TZNKj6AGu78yS8UIHxicTAtt'
  })

  const page = await Storyblok.get(`cdn/stories/${context.params.slug}`, {
    version: context.draftMode === true ? 'draft' : 'published'
  })

  // const res = await fetch('https://preview-murex.vercel.app/api/storyblok')
  // const res = await fetch('http://localhost:3000/api/storyblok')
  // const home = await res.json()

  return {
    props: {
      page: page
    }
  }
}

export async function getStaticPaths(context) {

    const Storyblok = new StoryblokClient({
        accessToken: 'TZNKj6AGu78yS8UIHxicTAtt'
      })

    const paths = await Storyblok.getAll(`cdn/stories`, {
        version: context.draftMode === true ? 'draft' : 'published'
      })

      const allPaths = paths.filter(story => story.slug === story.full_slug).map(story => ({params: {slug: story.slug}}))

      return {
        paths: allPaths,
        fallback: true
      }
}