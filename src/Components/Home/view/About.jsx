// @mui
import { Box, Stack, Typography } from '@mui/material';
//hooks
import useResponsive from '../../hooks/useResponsive';
// components
import Image from '../../image/Image';
import hafizah from '../../../assets/hafizah.jpeg';
import TitleButton from '../../buttonComponent/TitleButton';
import Iconify from '../../iconify/Iconify';

export default function About() {
    const isMdUp = useResponsive('up', 'md');

    return (
        <>
            <TitleButton>ABOUT</TitleButton>

            <Stack direction={{ xs: "column", md: "row" }} spacing={12} alignItems="center">
                <Stack direction="column" spacing={3}>
                    <Typography variant="body2" textAlign="justify">
                        A junior software developer based in Sarawak, Malaysia, recently graduated with a Bachelor of Software Engineering from Universiti Malaysia Sarawak (UNIMAS). Seeking opportunities to contribute to innovative projects and grow as a professional in the software industry.
                    </Typography>

                    <Stack spacing={1}>
                        <Typography variant="body2">Some technologies I have been working with recently</Typography>
                        <Stack
                            spacing={1}
                            display="grid"
                            gridTemplateColumns={{
                                xs: 'repeat(auto, 1fr)',
                                sm: 'repeat(auto, 1fr)',
                                md: 'repeat(3, 1fr)',
                            }}
                        >
                            <ListText>JavaScript</ListText>
                            <ListText>React.js</ListText>
                            <ListText>Angular</ListText>
                            <ListText>TypeScript</ListText>
                            <ListText>React Native</ListText>
                            <ListText>Java</ListText>
                            <ListText>Node.js</ListText>
                        </Stack>
                    </Stack>

                    <Typography variant="body2" textAlign="justify">
                        I have hands-on experience in front-end development and a strong foundation in software engineering principles.
                        Passionate about building impactful solutions and collaborating with teams to deliver high-quality applications.
                    </Typography>
                </Stack>

                {isMdUp &&
                    <Box>
                        <Stack
                            sx={{
                                position: 'relative',
                                width: 310,
                                height: 410,
                                backgroundColor: '#F8F9FA',
                                borderRadius: '320px 320px 0 0',
                                border: '1.5px rgba(0, 0, 0, 0.5) solid',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >

                            <Image
                                src={hafizah}
                                alt="hafizah"
                                sx={{
                                    position: 'absolute',
                                    borderRadius: '320px 320px 0 0',
                                    border: '1.5px rgba(0, 0, 0, 0.5) solid',
                                    maxWidth: 280,
                                    '&:hover': {
                                        transform: 'scale(1.1)',
                                        transition: '500ms ease',
                                    }
                                }}
                            />


                        </Stack>
                    </Box>
                }
            </Stack>
        </>
    );
}

function ListText({ children }) {
    return (
        <Stack direction="row" alignItems="center">
            <Iconify icon="tdesign:chevron-right-s" />
            <Typography variant="body2">{children}</Typography>
        </Stack>
    );
}