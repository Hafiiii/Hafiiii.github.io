import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Link } from '@mui/material';
// components
import Iconify from '../iconify/Iconify';
import Notification from '../Notification/Notification';

CopyToClipboard.propTypes = {
    copyName: PropTypes.string,
    color: PropTypes.string,
    sxIcon: PropTypes.object,
};

export default function CopyToClipboard({ copyName, color, sxIcon, ...others }) {
    const [notification, setNotification] = useState({ open: false, msg: '', type: '' });
    
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            setNotification({ open: true, msg: 'Copied to clipboard', type: 'success' });
        }).catch(err => {
            setNotification({ open: true, msg: 'Failed to copy', type: 'error' });
            console.error('Could not copy text: ', err);
        });
    };

    return (
        <>
            <Link
                component={RouterLink}
                onClick={() => copyToClipboard(copyName)}
                {...others}
            >
                <Iconify icon="ph:copy" sx={{ m: 0, color: 'text.secondary', ...sxIcon }} />
            </Link>

            <Notification notification={notification} setNotification={setNotification} />
        </>
    );
}
