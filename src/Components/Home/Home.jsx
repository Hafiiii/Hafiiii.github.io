import { Helmet } from 'react-helmet-async';
// @mui
import { Fade } from '@mui/material';
//sections
import HeroHome from './view/HeroHome';

export default function Home() {
  window.scroll({ top: 0 });

  return (
    <>
      <Helmet>
        <title>HAFIZAH</title>
      </Helmet>

      <Fade in={true}>
        <main className='min-h-screen mb-9' >
          <HeroHome />
        </main>
      </Fade>
    </>
  )
}