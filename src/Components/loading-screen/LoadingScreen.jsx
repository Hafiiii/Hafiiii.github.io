import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// @mui
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
import { bgBlur } from '../../utils/cssStyles';
//
import ProgressBar from '../progress-bar/ProgressBar';

// ----------------------------------------------------------------------

const StyledRoot = styled(Box)(({ theme }) => ({
  ...bgBlur({
    blur: 2,
    opacity: 0.24,
    color: theme.palette.background.default,
  }),
  top: 0,
  zIndex: 9999,
  position: 'fixed',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const letterVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

// ----------------------------------------------------------------------

export default function LoadingScreen({ sx }) {
  const text = "HAFIZAH";
  const [playAnimation, setPlayAnimation] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlayAnimation((prev) => !prev);
    }, 1400);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ProgressBar />

      <StyledRoot sx={sx}>
        {playAnimation && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                style={{ display: 'inline-block', marginLeft: 5, fontSize: 36 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        )}
      </StyledRoot>

      <Box sx={{ width: 1, height: '100vh' }} />
    </>
  );
}

LoadingScreen.propTypes = {
  sx: PropTypes.object,
};
