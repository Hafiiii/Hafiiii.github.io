import { cloneElement } from 'react';
import { LoadingButton } from '@mui/lab';
import PropTypes from 'prop-types';

ButtonSubmit.propTypes = {
  sx: PropTypes.object,
  text: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.element,
  iconsx: PropTypes.object,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default function ButtonSubmit({ sx, text, type, icon, iconsx, onClick, disabled, }) {
  return (
    <LoadingButton
      type={type}
      variant='contained'
      onClick={onClick}
      sx={{
        color: 'white',
        backgroundColor: '#B71C1C',
        fontFamily: "Karla",
        fontWeight: '600',
        borderRadius: '5px',
        padding: '10px 34px',
        '&:hover': {
          backgroundColor: '#c13030',
        },
        ...sx
      }}
      disabled={disabled}
    >
      {text}
      {icon && cloneElement(icon, { sx: { marginLeft: '8px', fontSize: '18px', ...iconsx } })}
    </LoadingButton>
  );
}