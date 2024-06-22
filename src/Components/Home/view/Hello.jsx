// @mui
import { Container, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
// components
import Image from '../../image/Image';
import Typewriter from '../../../assets/typewriter.png';

const HafizahContainer = styled('div')({
    position: 'relative',
    display: 'inline-block',
    '& h1': {
        position: 'relative',
        margin: 0,
        padding: 0,
        fontSize: 150,
        fontWeight: 700,
        overflow: 'hidden',
        letterSpacing: 50,
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
        color: '#212121',
        zIndex: 1,
        transition: 'color 0.3s ease',
    },
    '& .hafizah__filled': {
        position: 'absolute',
        margin: 0,
        padding: 0,
        top: 0,
        fontSize: 150,
        fontWeight: 700,
        letterSpacing: 50,
        textShadow: '0px 4px 7px rgba(0, 0, 0, 0.25), 0px 4px 10px rgba(0, 0, 0, 0.25)',
        clipPath: 'polygon(0% 100%, 0% 99%, 100% 99%, 100% 100%)',
        transition: 'clip-path 0.6s cubic-bezier(0.2, 0.1, 0.15, 1.32)',
        color: '#F8F9FA'
    },
    '&:hover .hafizah__filled': {
        clipPath: 'polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%)',
        cursor: 'default',
    },
});

export default function Hello() {
    return (
        <>
            <Stack direction="column" alignItems="center" justifyContent="center" spacing={10} height="100vh">
                <Stack direction="column" alignItems="center" justifyContent="center" spacing={0}>
                    <Typography variant='body2' lineHeight={0} fontSize={28} letterSpacing={7}>Hey, I'm</Typography>

                    <HafizahContainer>
                        <Typography variant="h1">HAFIZAH</Typography>
                        <Typography variant="h1" className="hafizah__filled">HAFIZAH</Typography>
                    </HafizahContainer>

                    <Typography variant='body2' lineHeight={0} fontSize={28} letterSpacing={7}>software engineering student</Typography>
                </Stack>

                <Image
                    src={Typewriter}
                    alt="typewriter"
                    sx={{
                        width: 'auto',
                        height: '30%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        '&:hover': {
                            transform: 'scale(1.1)',
                            transition: '500ms ease',
                        }
                    }}
                />
            </Stack>
        </>
    );
}