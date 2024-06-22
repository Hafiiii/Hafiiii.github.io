import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// @mui
import { Box, Stack, Typography, Button, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// sections
import CreationCarousel from '../components/CreationCarousel';
import CreationGrid from '../components/CreationGrid';
// components
import Iconify from '../../iconify/Iconify';
import Image from '../../image/Image';
import unimas from '../../../assets/unimas.png';
import uitm from '../../../assets/uitm.png';
import kns from '../../../assets/kns.png';
import TitleButton from '../../buttonComponent/TitleButton';

export default function SignatureDishes() {
    const theme = useTheme();

    const [images] = useState([
        { src: unimas, title: 'Tag 1', desc: 'Food 1', team: 'Team: Imran, Ferdinand, Ezzah', language: 'Java' },
        { src: uitm, title: 'Tag 1', desc: 'Food 1', team: 'Team: Imran, Ferdinand, Ezzah', language: 'Java' },
        { src: kns, title: 'Tag 1', desc: 'Food 1', team: 'Team: Imran, Ferdinand, Ezzah', language: 'Java' },
    ]);

    const [viewMode, setViewMode] = useState('carousel');

    const carouselSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '0px',
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        rtl: theme.direction === 'rtl',
        beforeChange: (_, newIndex) => setCurrentSlide(newIndex),
    };

    return (
        <>
            <TitleButton>@ CREATION</TitleButton>

            <Box
                sx={{
                    overflow: 'hidden',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    mb: 3,
                }}
            >
                <Stack direction="row" spacing={2} mb={5}>
                    <ButtonComponent
                        onClick={() => setViewMode('carousel')}
                        sx={{ backgroundColor: viewMode === 'carousel' ? 'rgb(0, 0, 0, 0.05)' : 'transparent' }}
                    >
                        <Iconify icon="system-uicons:carousel" sx={{ m: 0 }} />
                    </ButtonComponent>

                    <ButtonComponent
                        onClick={() => setViewMode('grid')}
                        sx={{ backgroundColor: viewMode === 'grid' ? 'rgb(0, 0, 0, 0.05)' : 'transparent' }}
                    >
                        <Iconify icon="pepicons-pencil:grid" sx={{ m: 0 }} />
                    </ButtonComponent>
                </Stack>

                {viewMode === 'carousel' ? (
                    <CreationCarousel images={images}/>
                ) : (
                    <CreationGrid images={images}/>
                )}
            </Box>
        </>
    );
}

function BoxCard({ src, alt, university, course, grade, start, end }) {
    return (
        <Stack
            direction="column"
            spacing={2}
            sx={{
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                backgroundColor: '#fff',
                border: '1.5px solid rgb(0, 0, 0, 0.3)',
                p: 3,

            }}
        >
            <Typography variant="body2" color="text.secondary">{university}</Typography>
            <Image src={src} alt={alt} sx={{ width: 100 }} />
            <Typography variant="subtitle1">{course}</Typography>
            <Typography variant="body2">{grade}</Typography>
            <Typography variant="caption">The Beginning: {start}</Typography>
            <Typography variant="caption">{end}</Typography>
        </Stack>
    );
}

function ButtonComponent({ children, sx, ...others }) {
    return (
        <Button
            sx={{
                borderRadius: 1,
                p: 1,
                minWidth: 0,
                color: '#000',
                '&:hover': {
                    backgroundColor: 'rgb(0, 0, 0, 0.05)',
                },
                ...sx
            }}
            {...others}
        >
            {children}
        </Button>
    );
}