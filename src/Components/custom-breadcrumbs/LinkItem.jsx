import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box, Link } from '@mui/material';

// ----------------------------------------------------------------------

export default function BreadcrumbsLink({ link, activeLast, disabled, underline, textColor="text.primary", disabledColor="text.disabled" }) {
    const { name, href, icon } = link;

    const styles = {
        display: 'inline-flex',
        alignItems: 'center',
        color: textColor,
        typography: 'caption',
        textDecoration: 'none',
        textTransform: 'uppercase',
        letterSpacing: '-0.5px',
        ...(disabled &&
            !activeLast && {
            cursor: 'default',
            pointerEvents: 'none',
            color: disabledColor,
        }),
    };

    const renderContent = (
        <>
            {icon && (
                <Box
                    component="span"
                    sx={{
                        mr: 1,
                        display: 'inherit',
                        '& svg': { width: 20, height: 20 },
                    }}
                >
                    {icon}
                </Box>
            )}

            {name}
        </>
    );

    if (href) {
        return (
            <Link component={RouterLink} to={href} sx={styles} underline={underline}>
                {renderContent}
            </Link>
        );
    }

    return <Box sx={styles}> {renderContent} </Box>;
}

BreadcrumbsLink.propTypes = {
    activeLast: PropTypes.bool,
    disabled: PropTypes.bool,
    link: PropTypes.shape({
        href: PropTypes.string,
        icon: PropTypes.node,
        name: PropTypes.string,
    }),
    underline: PropTypes.oneOf(['none', 'hover', 'always']),
    textColor: PropTypes.object,
    disabledColor: PropTypes.object,
};
