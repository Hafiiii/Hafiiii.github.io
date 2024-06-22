import { Helmet } from 'react-helmet-async';
// @mui
import { Box, Container, Fade } from '@mui/material';
import useResponsive from '../hooks/useResponsive';
//sections
import Hello from './view/Hello';
import About from './view/About';
import Education from './view/Education';
import Creation from './view/Creation';

export default function Home() {
  const isMdUp = useResponsive('up', 'md');

  return (
    <>
      <Helmet>
        <title>HAFIZAH</title>
      </Helmet>

      <Fade in={true}>
        <main className='min-h-screen mx-9' >
          {isMdUp ? (
            <Container>
              <Box mx={10}>
                <section id="hello">
                  <Hello />
                </section>
                <section id="about">
                  <About />
                </section>
                <section id="education">
                  <Education />
                </section>
                <section id="creation">
                  <Creation />
                </section>
              </Box>
            </Container>
          ) : (
            <>
              <section id="hello">
                <Hello />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="education">
                <Education />
              </section>
              <section id="creation">
                <Creation />
              </section>
            </>
          )}
        </main>
      </Fade>
    </>
  )
}