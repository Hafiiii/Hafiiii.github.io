import PropTypes from 'prop-types';
import { memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Link, Typography } from '@mui/material';
// components
import image from '../../../public/hafi.com.png';

// ----------------------------------------------------------------------

function Logo({ single = false, sx }) {
    const theme = useTheme();

    const fullLogo = (
        <svg id="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" width="65" height="65">
            <image xlinkHref={image} width="100%" height="100%" />
        </svg>
    );

    return (
        <Link
            component={RouterLink}
            to="/"
            aria-label="go to homepage"
            sx={{ width: single ? 65 : 150, height: single ? 65 : 150, ...sx }}
        >
            {fullLogo}
        </Link>
    );
}

Logo.propTypes = {
    single: PropTypes.bool,
    sx: PropTypes.object,
};

export function LogoWord({ sx }) {
    return (
        <Link
            component={RouterLink}
            to="/"
            aria-label="go to homepage"
            color="inherit"
            underline="none"
            sx={{
                display: 'flex',
                alignItems: 'center',
                mx: 2,
            }}
        >
            <Typography variant="body1" fontSize={28} letterSpacing={1} sx={{ ...sx }}>HAFIZAH</Typography>
        </Link>
    );
}

LogoWord.propTypes = {
    sx: PropTypes.object,
};

export default memo(Logo);
