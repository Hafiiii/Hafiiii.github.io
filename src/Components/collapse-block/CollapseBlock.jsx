import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { Collapse, Stack, Typography } from '@mui/material';
// components
import Iconify from '../iconify/Iconify';

export default function CollapseBlock({ title, children, disabledChecked = false, sx, ...other }) {
    const [checked, setChecked] = useState(disabledChecked);

    const handleOpen = () => {
        setChecked((prev) => !prev);
    };

    return (
        <Stack alignItems="flex-start" sx={{ width: 1 }} {...other}>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                onClick={handleOpen}
                sx={{ width: 1, cursor: 'pointer' }}
            >
                <Typography variant="body1" textTransform="uppercase" sx={{ ...sx}}>{title}</Typography>

                <Iconify
                    icon={checked ? 'system-uicons:minus' : 'system-uicons:plus'}
                    sx={{ color: 'text.secondary' }}
                />
            </Stack>

            <Collapse
                unmountOnExit
                in={checked}
            >
                <Stack sx={{ py: 1 }}>
                    {children}
                </Stack>
            </Collapse>
        </Stack>
    );
}

CollapseBlock.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    disabledChecked: PropTypes.bool,
    sx: PropTypes.object,
};