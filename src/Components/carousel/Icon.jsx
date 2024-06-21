import PropTypes from 'prop-types';
import Iconify from '../iconify/Iconify';

// ----------------------------------------------------------------------

export function LeftIcon({ icon = 'carbon:chevron-right', isRTL }) {
  return (
    <Iconify
      icon={icon}
      width={18}
      sx={{
        transform: ' scaleX(-1)',
        ...(isRTL && {
          transform: ' scaleX(1)',
        }),
        m: 0,
      }}
    />
  );
}

LeftIcon.propTypes = {
  icon: PropTypes.string,
  isRTL: PropTypes.bool,
};

export function RightIcon({ icon = 'carbon:chevron-right', isRTL }) {
  return (
    <Iconify
      icon={icon}
      width={18}
      sx={{
        ...(isRTL && {
          transform: ' scaleX(-1)',
        }),
        m: 0,
      }}
    />
  );
}

RightIcon.propTypes = {
  icon: PropTypes.string,
  isRTL: PropTypes.bool,
};
