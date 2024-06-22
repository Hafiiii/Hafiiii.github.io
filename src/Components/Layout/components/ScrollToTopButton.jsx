import { useState, useEffect } from 'react';
// @mui
import { Fab } from '@mui/material';
// components
import Iconify from '../../iconify/Iconify';

// ----------------------------------------------------------------------

export default function ScrollToTopButton() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isShow = window.scrollY > 400;
            setShow(isShow);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    if (!show) {
        return null;
    }

    return (
        <Fab
            size="small"
            aria-label="scroll back to top"
            sx={{
                backgroundColor: '#212121',
                boxShadow: '0 6px 8px 0 rgb(0, 0, 0, 0.3)',
                position: 'fixed',
                bottom: 16,
                right: 16,
                zIndex: (theme) => theme.zIndex.speedDial,
                color: '#fff',
                '&:hover': {
                    backgroundColor: '#212121',
                    color: '#fff',
                }
            }}
            onClick={handleClick}
        >
            <Iconify icon="fluent:chevron-up-12-filled" width={20} height={20} sx={{ m: 0 }} />
        </Fab>
    );
}