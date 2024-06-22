import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// @mui
import { Link, Stack, Tooltip } from '@mui/material';
// components
import { _socials } from '../Footer/Footer';
import Iconify from '../iconify/Iconify';

// ----------------------------------------------------------------------

export default function MegaMenuDesktopHorizon({ data, ...other }) {
  return (
    <Stack direction="column" spacing={2}>
      <Stack direction="column" spacing={1} {...other}>
        <ParentItem title="Hello" path="#hello" />
        <ParentItem title="About" path="#about" />
        <ParentItem title="Education" path="#education" />
        <ParentItem title="Creation" path="#creation" />
      </Stack>

      <Stack direction="row" alignItems="center" spacing={1.3}>
        {_socials.map((social) => (
          <Tooltip title={social.shortURL} key={social.value} >
            <Link component={RouterLink} onClick={() => { window.open(social.URL, '_blank') }}>
              <Iconify icon={social.icon} sx={{ color: '#000', m: 0 }} />
            </Link>
          </Tooltip>
        ))}
      </Stack>
    </Stack>
  );
}

MegaMenuDesktopHorizon.propTypes = {
  data: PropTypes.array,
  categories: PropTypes.array,
};

// ----------------------------------------------------------------------

function ParentItem({ title, path = '', icon, open, hasSub, isNew = false, ...other }) {
  const activeStyle = {
    color: 'primary.dark',
  };

  return (
    <Link
      component={HashLink}
      to={path}
      underline="none"
      color="inherit"
      variant="body2"
      smooth
      sx={{
        fontSize: 16,
        letterSpacing: 1,
        display: 'flex',
        cursor: 'pointer',
        alignItems: 'center',
        textTransform: 'uppercase',
        transition: (theme) => theme.transitions.create('all'),
        '&:hover': {
          activeStyle,
          ...(open && activeStyle),
          color: 'text.secondary',
        },
        position: 'relative',
      }}
      {...other}
    >
      {title}
    </Link>
  );
}

ParentItem.propTypes = {
  hasSub: PropTypes.bool,
  icon: PropTypes.node,
  open: PropTypes.bool,
  path: PropTypes.string,
  title: PropTypes.string,
  isNew: PropTypes.bool,
};
