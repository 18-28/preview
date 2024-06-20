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
  // console.log('index')
  // const Storyblok = new StoryblokClient({
  //   accessToken: 'GWas2MzQ7yf76pGmKaM0gwtt'
  // })

  // const home = await Storyblok.get('cdn/stories/home', {
  //   version: context.draftMode === true ? 'draft' : 'published'
  // })

  const res = await fetch('https://preview-murex.vercel.app/api/storyblok')
  // const res = await fetch('http://localhost:3000/api/storyblok')
  const home = await res.json()

  return {
    props: {
      page: home
    },
    revalidate: 300,
  }
}