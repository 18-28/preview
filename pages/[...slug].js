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
  const Storyblok = new StoryblokClient({
    accessToken: 'GWas2MzQ7yf76pGmKaM0gwtt'
  })

  const home = await Storyblok.get(`cdn/stories/${context.params.slug}`, {
    version: context.draftMode === true ? 'draft' : 'published'
  })

  // const props = {
  //   prop1: 'hello',
  //   prop2: 'world'
  // }

  return {
    props: {
      page: home
    }
  }
}

export async function getStaticPaths(context){
    const Storyblok = new StoryblokClient({
      accessToken: 'GWas2MzQ7yf76pGmKaM0gwtt'
    })
  
    const paths = await Storyblok.getAll('cdn/stories', {
      version: context.draftMode === true ? 'draft' : 'published'
    })

    // console.log(paths)

    const draft = ['/test-page', 'draft-page']
    const published = ['/test-page']
  
    // const props = {
    //   prop1: 'hello',
    //   prop2: 'world'
    // }
  
    return {
      paths: context.draftMode === true ? draft : published,
      fallback: false
    }
  }

