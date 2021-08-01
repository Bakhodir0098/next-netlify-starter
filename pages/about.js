import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function About() {
  return (
    <div className='container'>
      <Head>
        <title>About page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header title='About page' />
        <p className='description'>About pages</p>
      </main>

      <Footer />
    </div>
  );
}
