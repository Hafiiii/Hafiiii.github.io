import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box, Link, Stack, Tab, Tabs, Typography } from '@mui/material';
// components
import Iconify from '../../iconify/Iconify';
import { creationGridData } from './contentData'

export default function CreationGrid() {
    const [selectedTab, setSelectedTab] = useState('All');

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const filteredData = creationGridData.filter((data) =>
        selectedTab === 'All' || data.tab === selectedTab
    );

    return (
        <>
            <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                variant="fullWidth"
                textColor="inherit"
                sx={{
                    mb: 3,
                    '& .MuiTabs-indicator': {
                        backgroundColor: '#000',
                    },
                }}
            >
                <Tab label="All" value="All" />
                <Tab label="Web" value="Web" />
                <Tab label="Java" value="Java" />
            </Tabs>

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

                {filteredData.map((data) => (
                    <Stack
                        key={data.id}
                        direction="column"
                        spacing={4}
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
                            <Typography variant="subtitle2">{data.title}</Typography>
                            <Typography variant="caption" color="text.secondary">{data.desc}</Typography>
                            <Typography variant="caption">{data.team}</Typography>
                        </Stack>

                        <Stack direction="column" alignItems="center" justifyContent="center" spacing={1}>
                            <Typography variant="caption">{data.language}</Typography>
                            <Link component={RouterLink} onClick={() => { window.open(data.githubURL, '_blank') }}>
                                <Iconify icon="ph:github-logo" sx={{ color: '#000', m: 0 }} />
                            </Link>
                        </Stack>
                    </Stack>
                ))}

            </Box >
        </>
    );
}