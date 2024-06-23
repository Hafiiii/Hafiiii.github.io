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
            <TitleButton>@ ABOUT</TitleButton>

            <Stack direction={{ xs: "column", md: "row" }} spacing={12} alignItems="center">
                <Stack direction="column" spacing={3}>
                    <Typography variant="body2" textAlign="justify">A software engineering student based in Sarawak, Malaysia. Currently pursuing Bachelor of Computer Science (Software Engineering) in Universiti Malaysia Sarawak (UNIMAS), enthusiastic about the ever-evolving world of technology.</Typography>

                    <Stack spacing={1}>
                        <Typography variant="body2">Some technologies I've been engaged with recently</Typography>
                        <ListText>JavaScript</ListText>
                        <ListText>React.js</ListText>
                        <ListText>C/C++</ListText>
                    </Stack>

                    <Typography variant="body2" textAlign="justify">
                        Embarking on my software engineering journey from scratch,
                        inspired by a deep curiosity to create impactful things.
                        Currently focused on front-end development, with an openness to exploring other exciting fields too.
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