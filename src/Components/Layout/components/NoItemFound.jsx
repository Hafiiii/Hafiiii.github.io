import PropTypes from 'prop-types';
// @mui
import { Stack, Typography } from '@mui/material';
import Image from '../../image/Image';
import itemNotFound from '../../../assets/icons/notfound.png';

// ----------------------------------------------------------------------

export default function NoItemFound({ title }) {
  return (
    <Stack
      alignItems="center"
      sx={{ my: 5, opacity: .4 }}
    >
      <Image
        alt="no item found"
        src={itemNotFound}
        sx={{ width: 300, height: 300 }}
      />
      <Typography variant="body2" fontSize={18} textTransform="uppercase">
        {title}
      </Typography>
    </Stack>
  );
}

NoItemFound.propTypes = {
  title: PropTypes.string,
};