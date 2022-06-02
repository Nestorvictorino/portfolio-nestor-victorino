import { ReactElement } from 'react';
import Layout from '../components/layout';
import UpDashboard from '../components/pages/upDashboard';

const Home = () => {
  return (
    <div className='d-flex align-items-center justify-content-center'>
      <UpDashboard/>
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
