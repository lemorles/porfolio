import Head from 'next/head'
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <>
      <Head>
        <title>Leandro Morales | Full Stack Developer</title>
        <meta name="description" content="Portfolio Web of Leandro Morales" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <About />

      <Skills />

      <Projects />
    </>
  )
}
