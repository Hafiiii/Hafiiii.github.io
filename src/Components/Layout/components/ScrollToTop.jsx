import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom'
// @mui
import { Link, Stack, Typography } from '@mui/material';
// components
import Iconify from '../../iconify/Iconify';

// ----------------------------------------------------------------------

export default function ScrollToTop() {
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
    <Link
      component={RouterLink}
      onClick={handleClick}
      underline='none'
      color="inherit"
      sx={{ cursor: 'pointer' }}
    >
      <Stack alignItems="center" my={3} mt={5}>
        <Iconify icon="codicon:chevron-up" sx={{ m: 0 }} />
        <Typography variant='caption'>BACK TO TOP</Typography>
      </Stack>
    </Link>
  );
}