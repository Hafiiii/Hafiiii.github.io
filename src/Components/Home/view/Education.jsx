// @mui
import { Box, Stack, Typography } from '@mui/material';
// components
import Image from '../../image/Image';
import TitleButton from '../../buttonComponent/TitleButton';
import { educationData } from '../components/contentData';

export default function Education() {
    return (
        <>
            <TitleButton>EDUCATION</TitleButton>

            <Box
                rowGap={2}
                columnGap={2}
                display="grid"
                gridTemplateColumns={{
                    xs: 'repeat(auto, 1fr)',
                    sm: 'repeat(auto, 1fr)',
                    md: 'repeat(3, 1fr)',
                }}
            >
                {educationData.map((data) => (
                    <Stack
                        key={data.id}
                        direction="column"
                        spacing={3}
                        sx={{
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            textAlign: 'center',
                            backgroundColor: '#fff',
                            border: '1.5px solid rgb(0, 0, 0, 0.3)',
                            p: 3,

                        }}
                    >
                        <Stack direction="column" alignItems="center" justifyContent="center" spacing={1}>
                            <Typography variant="body2" color="text.secondary">{data.university}</Typography>
                            <Image src={data.src} alt={data.alt} sx={{ width: 100 }} />
                        </Stack>

                        <Stack direction="column" alignItems="center" justifyContent="center" spacing={1}>
                            <Typography variant="subtitle1">{data.course}</Typography>
                            <Typography variant="body2">{data.grade}</Typography>
                            <Typography variant="caption">The Beginning: {data.start}</Typography>
                            <Typography variant="caption">{data.end}</Typography>
                        </Stack>
                    </Stack>
                ))}
            </Box>
        </>
    );
}