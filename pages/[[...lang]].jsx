import Head from 'next/head'

import Layout from '../src/components/Layout';
import IndexPage from '../src/pages/Index';

export default function Index() {
  return (
    <>
      <Head>
        <title>Илья Новиков. Государственный музей изобразительных искусств имени А.С.Пушкина</title>
      </Head>
      <Layout>
        <IndexPage />
      </Layout>
    </>
  )
}
