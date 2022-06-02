import { ReactElement } from 'react';
import Layout from '../components/layout';

const Home = () => {
  return (
    <div>
      HOLA
    </div>
  )
}

Home.getLayout = function (page: ReactElement) {
  return (
    <Layout title={'Dashboard'}>
      {page}
    </Layout>
  )
}

export default Home
