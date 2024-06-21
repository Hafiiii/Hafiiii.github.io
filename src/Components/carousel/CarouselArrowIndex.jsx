import PropTypes from 'prop-types';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Typography, Box, IconButton } from '@mui/material';
// utils
import { bgBlur } from '../../utils/cssStyles';
//
import { LeftIcon, RightIcon } from './Icon';

// ----------------------------------------------------------------------

const StyledRoot = styled(Box)(({ theme }) => ({
  zIndex: 9,
  display: 'inline-flex',
  alignItems: 'center',
  position: 'absolute',
  bottom: theme.spacing(2),
  left: '50%',
  transform: 'translateX(-50%)',
  padding: theme.spacing(0.8),
  borderRadius: 50,
  backgroundColor: 'white'
}));

const StyledIconButton = styled(IconButton)({
  width: 18,
  height: 20,
  padding: 0,
});

// ----------------------------------------------------------------------

export default function CarouselArrowIndex({ index, total, onNext, onPrev, icon, sx, ...other }) {
  const theme = useTheme();

  const isRTL = theme.direction === 'rtl';

  return (
    <StyledRoot sx={sx} {...other}>
      <StyledIconButton color="default" onClick={onPrev}>
        <LeftIcon icon={icon} isRTL={isRTL} />
      </StyledIconButton>

      <Typography variant="caption" sx={{ mx: 1, color: 'black' }}>
        {index + 1}/{total}
      </Typography>

      <StyledIconButton color="default" onClick={onNext}>
        <RightIcon icon={icon} isRTL={isRTL} />
      </StyledIconButton>
    </StyledRoot>
  );
}

CarouselArrowIndex.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  index: PropTypes.number,
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
  sx: PropTypes.object,
  total: PropTypes.number,
};
