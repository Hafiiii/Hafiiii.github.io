import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FacebookIcon, TelegramIcon, TwitterIcon, WhatsappIcon, PinterestIcon, EmailIcon, FacebookShareButton, TelegramShareButton, TwitterShareButton, WhatsappShareButton, PinterestShareButton, EmailShareButton } from "react-share";
// @mui
import { Link, Popover, Stack } from '@mui/material';
// components
import Iconify from '../iconify/Iconify';
import Notification from '../Notification/Notification';
import CopyToClipboard from '../copyToClipboard/CopyToClipboard';

ShareSocial.propTypes = {
    productId: PropTypes.number,
    productName: PropTypes.string,
    sxIcon: PropTypes.object,
};

export default function ShareSocial({ productId, productName, sxIcon, ...others }) {
    const url = `hafiiii.github.io/`;
    const title = `HAFIZAH`;
    const hashtag = "#hafizah";
    const separator = "Check Out Now: ";

    const [open, setOpen] = useState(null);
    const [notification, setNotification] = useState({ open: false, msg: '', type: '' });

    const [actions] = useState([
        {
            label: "Facebook",
            value: "Facebook",
            backgroundColor: 'transparent',
            icon: <FacebookShareButton
                className="fadeIn"
                openShareDialogOnClick
                url={url}
                title={title}
                hashtag={hashtag}
                separator={separator}>
                <FacebookIcon size={30} round />
            </FacebookShareButton>
        },
        {
            label: 'Telegram',
            value: "Telegram",
            icon: <TelegramShareButton
                className="fadeIn"
                openShareDialogOnClick
                url={url}
                title={title}
                hashtag={hashtag}
                separator={separator}>
                <TelegramIcon size={30} round />
            </TelegramShareButton>
        },
        {
            label: 'Twitter',
            value: "Twitter",
            icon: <TwitterShareButton
                className="fadeIn"
                openShareDialogOnClick
                url={url}
                title={title}
                hashtag={hashtag}
                separator={separator}>
                <TwitterIcon size={30} round />
            </TwitterShareButton>
        },
        {
            label: 'Whatsapp',
            value: "Whatsapp",
            icon: <WhatsappShareButton
                className="fadeIn"
                openShareDialogOnClick
                url={url}
                title={title}
                hashtag={hashtag}
                separator={separator}>
                <WhatsappIcon size={30} round />
            </WhatsappShareButton>
        },
        {
            label: 'Pinterest',
            value: "Pinterest",
            icon: <PinterestShareButton
                className="fadeIn"
                openShareDialogOnClick
                url={url}
                title={title}
                hashtag={hashtag}
                separator={separator}>
                <PinterestIcon size={30} round />
            </PinterestShareButton>
        },
        {
            label: 'Copy Link',
            value: "Copy",
            icon: <CopyToClipboard
                copyName={url}
                sx={{
                    backgroundColor: '#7f7f7f',
                    borderRadius: '50%',
                    p: '5px',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: '#7f7f7f',
                    },
                }}
                sxIcon={{ color: 'white' }}>
            </CopyToClipboard >
        },
        {
            label: 'Email',
            value: "Email",
            icon: <EmailShareButton
                className="fadeIn"
                openShareDialogOnClick
                url={url}
                title={title}
                hashtag={hashtag}
                separator={separator}>
                <EmailIcon size={30} round />
            </EmailShareButton>
        },
    ]);

    const handleOpen = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };

    return (
        <>
            <Link onClick={handleOpen} component={RouterLink} {...others}>
                <Iconify icon="carbon:share" sx={{ m: 0, ...sxIcon }} />
            </Link>

            <Popover
                open={!!open}
                onClose={handleClose}
                anchorEl={open}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                PaperProps={{
                    sx: { width: 300, p: 1, my: 1, borderRadius: 0, boxShadow: 'none', border: '1px solid rgb(0, 0, 0, 0.05)' },
                }}
            >
                <Stack direction='row' spacing={1.5} >
                    {actions.map((social) => (
                        <Stack key={social.label}>{social.icon}</Stack>
                    ))}
                </Stack>
            </Popover>

            <Notification notification={notification} setNotification={setNotification} />
        </>
    );
}