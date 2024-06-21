import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';

export default function Notification({ notification, setNotification }) {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (notification.open) {
      enqueueSnackbar(notification.msg, {
        variant: notification.type,
        onClose: handleClose,
        preventDuplicate: true,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right'
        },
        hideIconVariant: true,
      });
    }
  }, [notification, enqueueSnackbar]);

  const handleClose = () => {
    setNotification({ open: false, msg: '', type: '' });
  };

  return null;
}

Notification.propTypes = {
  notification: PropTypes.shape({
    open: PropTypes.bool.isRequired,
    msg: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  setNotification: PropTypes.func.isRequired,
};
