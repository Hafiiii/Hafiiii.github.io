import { useRef } from 'react';
// @mui
import { Container, IconButton } from '@mui/material';
// components
import Iconify from '../../iconify/Iconify';

// ----------------------------------------------------------------------

export default function ScrollIntoView({ iconColor = "white", sx }) {
    const ref = useRef(null);

    return (
        <>
            <Container
                sx={{
                    mb: { md: 5 },
                    left: { md: 0 },
                    right: { md: 0 },
                    bottom: { md: 0 },
                    mx: { md: 'auto' },
                    pt: { xs: 3, md: 0 },
                    position: { md: 'absolute' },
                    display: { xs: 'none', md: 'flex' },
                    justifyContent: 'center',
                    alignItems: 'center',
                    ...sx
                }}
            >
                <IconButton onClick={() => ref.current?.scrollIntoView({ behavior: 'smooth' })}>
                    <Iconify icon="bi:chevron-compact-down" width={50} color={iconColor} sx={{ m: 0 }} />
                </IconButton>
            </Container>

            <div ref={ref} />
        </>
    );
}