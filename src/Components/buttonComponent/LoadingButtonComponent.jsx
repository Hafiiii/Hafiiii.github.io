import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { LoadingButton } from '@mui/lab';

LoadingButtonComponent.propTypes = {
    sx: PropTypes.object,
};

export default function LoadingButtonComponent({ sx, ...others }) {
    return (
        <LoadingButton
            {...others}
            sx={{
                borderRadius: 0,
                color: 'white',
                backgroundColor: '#9f694f',
                border: '1px solid #9f694f',
                '&:hover': {
                    color: '#9f694f',
                    backgroundColor: 'transparent',
                    border: '1px solid #9f694f',
                },
                ...sx
            }}
        />
    );
}