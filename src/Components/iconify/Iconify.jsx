import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Icon } from '@iconify/react';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

const Iconify = forwardRef(
    function Iconify({ icon, width = 20, sx, ...other }, ref) {
        return (
            <Box
                ref={ref}
                component={Icon}
                icon={icon}
                sx={{ width, height: width, mr: 1, flexShrink: 0, ...sx }}
                {...other}
            />
        )
    }
)

Iconify.propTypes = {
    icon: PropTypes.node,
    sx: PropTypes.object,
    width: PropTypes.number,
};

export default Iconify;