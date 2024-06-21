import { Button } from '@mui/material';
import PropTypes from 'prop-types';

ButtonComponent.propTypes = {
    sx: PropTypes.object,
};

export default function ButtonComponent({ sx, ...others }) {
    return (
        <Button
            {...others}
            sx={{
                borderRadius: 0,
                color: 'white',
                px: 1,
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
