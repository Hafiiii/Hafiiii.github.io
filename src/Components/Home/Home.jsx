import { Helmet } from 'react-helmet-async';
// @mui
import { Box, Container, Fade } from '@mui/material';
//sections
import Hello from './view/Hello';
import About from './view/About';
import Education from './view/Education';
import Creation from './view/Creation';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>HAFIZAH</title>
      </Helmet>

      <Fade in={true}>
        <main className='min-h-screen mx-9' >
          <Container>
            <Box mx={6}>
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
        </main>
      </Fade>
    </>
  )
}