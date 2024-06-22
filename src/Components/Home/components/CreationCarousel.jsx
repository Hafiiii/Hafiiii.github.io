import { useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
// react=slick
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// @mui
import { Box, Link, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// components
import Iconify from '../../iconify/Iconify';
import Image from '../../image/Image';
import { creationCarouselData } from './contentData';

export default function CreationCarousel() {
    const theme = useTheme();

    const [currentSlide, setCurrentSlide] = useState(0);

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
        autoplaySpeed: 3200,
        rtl: theme.direction === 'rtl',
        beforeChange: (_, newIndex) => setCurrentSlide(newIndex),
    };

    return (
        <Slider {...carouselSettings}>
            {(creationCarouselData || []).map((data, index) => (
                <Box
                    key={index}
                    sx={{
                        position: 'relative',
                        px: 1,
                    }}
                >
                    <Image
                        src={data.src}
                        sx={{
                            width: '100%',
                            height: '500px',
                            objectFit: 'cover',
                            filter: 'brightness(40%)',
                            borderRadius: 3,
                        }}
                    />

                    <Stack
                        alignItems="flex-start"
                        justifyContent="space-between"
                        spacing={1.5}
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            p: 5,
                            width: '100%',
                        }}
                    >
                        <Stack direction="column" alignItems="flex-start" justifyContent="center" spacing={0}>
                            <Typography variant="body1" color="#fff">{data.title}</Typography>
                            <Typography variant="body2" color="rgb(255, 255, 255, 0.8)">{data.team}</Typography>
                        </Stack>

                        <Stack direction="column" alignItems="flex-start" justifyContent="center" spacing={0.5}>
                            <Link component={RouterLink} onClick={() => { window.open(data.githubURL, '_blank') }}>
                                <Iconify icon="ph:github-logo" sx={{ color: '#fff', m: 0 }} />
                            </Link>
                        </Stack>
                    </Stack>
                </Box>
            ))}
        </Slider>
    );
}