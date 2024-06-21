import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouterLink, useNavigate } from 'react-router-dom';
// @mui
import { Masonry } from '@mui/lab';
import { Box } from '@mui/material';
import { Link, Paper, Typography, Stack } from '@mui/material';

// ----------------------------------------------------------------------

export default function MegaMenuDesktopHorizon({ data, ...other }) {
  return (
    <Stack direction="row" spacing={{ md: 1.5, lg: 2 }} {...other}>
      <ParentItem title="Hello" path="/" />
      <ParentItem title="About" categories={data} path="/" />
      <ParentItem title="Education" categories={data} path="/" />
      <ParentItem title="Creation" path="/" />
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
      component={RouterLink}
      to={path}
      underline="none"
      color="inherit"
      variant="caption"
      sx={{
        fontSize: 13,
        letterSpacing: 0.5,
        display: 'flex',
        cursor: 'pointer',
        alignItems: 'center',
        textTransform: 'uppercase',
        height: 64,
        lineHeight: '64px',
        transition: (theme) => theme.transitions.create('all'),
        '&:hover': {
          activeStyle,
          ...(open && activeStyle),
          color: '#9f694f',
        },
        position: 'relative',
      }}
      {...other}
    >
      {icon && <Stack sx={{ width: 20, height: 20, mr: 1 }}>{icon}</Stack>}

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
