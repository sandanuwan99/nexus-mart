import React from 'react';
import { Card, Typography, Box, LinearProgress, Stack } from '@mui/material';
import { SalesLocation } from '@/data/salesLocations';

interface SalesByRegionProps {
    locations: SalesLocation[];
}

export const SalesByRegion: React.FC<SalesByRegionProps> = ({ locations }) => {
    // Sort locations by highest sales
    const sortedLocations = [...locations].sort((a, b) => b.salesCount - a.salesCount);
    const maxSales = sortedLocations[0]?.salesCount || 1;

    return (
        <Card sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                Sales by Region
            </Typography>
            <Stack spacing={3} sx={{ flexGrow: 1, overflowY: 'auto' }}>
                {sortedLocations.map((loc) => {
                    const progressValue = (loc.salesCount / maxSales) * 100;
                    return (
                        <Box key={loc.id}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                    {loc.city}, {loc.country}
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 700 }} color="primary">
                                    {loc.salesCount.toLocaleString()}
                                </Typography>
                            </Box>
                            <LinearProgress
                                variant="determinate"
                                value={progressValue}
                                sx={{
                                    height: 8,
                                    borderRadius: 4,
                                    bgcolor: 'rgba(0, 97, 255, 0.1)',
                                    '& .MuiLinearProgress-bar': {
                                        bgcolor: 'primary.main',
                                        borderRadius: 4,
                                    },
                                }}
                            />
                        </Box>
                    );
                })}
            </Stack>
        </Card>
    );
};
