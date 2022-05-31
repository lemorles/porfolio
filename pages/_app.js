import Head from 'next/head'
import Layout from '../layout'

export default function MyApp({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />

    <style global jsx>{`
       html,
       body,
       div,
       form,
       figure,
       label,
       h1,
       h2,
       h3,
       h4,
       h5,
       h6,
       p,
       blockquote,
       pre {
           font-family: 'DM Sans', sans-serif;
           font-size: 100%;
           font-weight: normal;
           margin: 0;
           padding: 0;
           box-sizing: border-box;
       }

       ul, li {
        list-style: none;
        margin: 0;
        padding: 0;
       }

       a {
        text-decoration: none;
       }

       h1{
        font-size: 34px;
        font-weight: bold;
       }

       h2 {
        font-size: 26px;
        font-weight: bold;
       }

       p {
        font-size: 16px;
        line-height: 1.5;
        color: var(--black-light);
       }

       :root {
          --black: #242423;
          --black-light: #333533;
          --yellow: #F5CB5C;
          --grey: #CFDBD5;
          --grey-light: #E8EDDF;
          --white: #FFFFFF;
       }
      `}</style>
  </Layout>
}
