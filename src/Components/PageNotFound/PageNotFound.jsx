import { Helmet } from 'react-helmet-async';
import { Stack, Typography } from "@mui/material";
import Iconify from "../iconify/Iconify";

export default function PageNotFound() {
    return (
        <>
            <Helmet>
                <title>Page Not Found</title>
            </Helmet>

            <Stack alignItems="center" justifyContent="center">
                <Iconify icon="bi:bag-x-fill" width={200} sx={{ m: 5, color: 'text.disabled' }} />
                <Typography variant="h1" paragraph>404</Typography>
                <Typography variant="body2" color="text.disabled" fontSize={18}>PAGE NOT FOUND</Typography>
            </Stack>
        </>
    );
}
