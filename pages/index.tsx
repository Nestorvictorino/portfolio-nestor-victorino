import { ReactElement } from 'react';
import Layout from '../components/layout';
import AboutMe from '../components/pages/dashboard/aboutMe';
import Projects from '../components/pages/dashboard/projects';
import SocialMedia from '../components/pages/dashboard/socialMedia';
import UpDashboard from '../components/pages/dashboard/upDashboard';

const Home = () => {
  return (
    <div className='d-flex align-items-center justify-content-center flex-column'>
      <div className='d-flex justify-content-center' style={{marginBottom:'9rem'}}>
        <UpDashboard />
      </div>
      <AboutMe/>
      <SocialMedia/>
      <Projects/>
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
