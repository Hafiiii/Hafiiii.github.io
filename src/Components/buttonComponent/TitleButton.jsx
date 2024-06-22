// @mui
import { Button, Stack } from '@mui/material';

export default function HeroHome({children}) {
    return (
        <Stack alignItems="center">
            <Button
                sx={{
                    typography: 'body1',
                    color: 'inherit',
                    letterSpacing: 1.5,
                    backgroundColor: '#fff',
                    boxShadow: '0px 3px 7px rgba(0, 0, 0, 0.2)',
                    px: 5,
                    py: 1.5,
                    borderRadius: 50,
                    cursor: 'default',
                    mb: 8,
                    mt: 20,
                    '&:hover': {
                        backgroundColor: '#fff',
                    }
                }}
            >
                {children}
            </Button>
        </Stack>
    );
}