import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm Sherrisa. I'm a UX designer, frontend developer, and musician. You can contact me on 
          <a href="https://www.linkedin.com/in/sherrisa/"> Linkedin</a>.
        </p>
      </section>
    </Layout>
  );
}