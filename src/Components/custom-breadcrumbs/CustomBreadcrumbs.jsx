import PropTypes from 'prop-types';
// @mui
import { Box, Link, Stack, Typography, Breadcrumbs } from '@mui/material';
//
import LinkItem from './LinkItem';

// ----------------------------------------------------------------------

export default function CustomBreadcrumbs({
    links,
    action,
    heading,
    moreLink,
    activeLast,
    textColor,
    disabledColor,
    sx,
    ...other
}) {
    const lastLink = links[links.length - 1].name;

    return (
        <Box sx={{ mb: 2, ...sx }}>
            <Stack direction="row" alignItems="center">
                <Box sx={{ flexGrow: 1 }}>
                    {/* HEADING */}
                    {heading && (
                        <Typography variant="h4" gutterBottom>
                            {heading}
                        </Typography>
                    )}

                    {/* BREADCRUMBS */}
                    {!!links.length && (
                        <Breadcrumbs separator={<Separator disabledColor={disabledColor} />} {...other}>
                            {links.map((link) => (
                                <LinkItem
                                    key={link.name || ''}
                                    link={link}
                                    activeLast={activeLast}
                                    disabled={link.name === lastLink}
                                    underline="hover"
                                    textColor={textColor}
                                    disabledColor={disabledColor}
                                />
                            ))}
                        </Breadcrumbs>
                    )}
                </Box>

                {action && <Box sx={{ flexShrink: 0 }}> {action} </Box>}
            </Stack>

            {/* MORE LINK */}
            {!!moreLink && (
                <Box sx={{ mt: 2 }}>
                    {moreLink.map((href) => (
                        <Link
                            noWrap
                            key={href}
                            href={href}
                            variant="body2"
                            target="_blank"
                            rel="noopener"
                            sx={{ display: 'table' }}
                        >
                            {href}
                        </Link>
                    ))}
                </Box>
            )}
        </Box>
    );
}

CustomBreadcrumbs.propTypes = {
    sx: PropTypes.object,
    action: PropTypes.node,
    links: PropTypes.array,
    heading: PropTypes.string,
    moreLink: PropTypes.array,
    activeLast: PropTypes.bool,
    textColor: PropTypes.object,
    disabledColor: PropTypes.object,
};

// ----------------------------------------------------------------------

function Separator({ disabledColor = "text.disabled" }) {
    return (
        // <Iconify icon="material-symbols-light:chevron-right" sx={{ m: 0, mt: 0.5 }}/>
        <Typography variant='caption' color={disabledColor} mx={0.5}>|</Typography>
    );
}
