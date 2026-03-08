import React from 'react';
import { Card, Box, Typography, Grid } from '@mui/material';
import { TrendingUp, Globe, Map, ShoppingCart } from 'lucide-react';
import { SalesLocation } from '@/data/salesLocations';

interface AnalyticsOverviewProps {
    locations: SalesLocation[];
}

export const AnalyticsOverview: React.FC<AnalyticsOverviewProps> = ({ locations }) => {
    const totalSales = locations.reduce((sum, loc) => sum + loc.salesCount, 0);
    const totalRegions = locations.length;
    const topRegion = locations.reduce((prev, current) => (prev.salesCount > current.salesCount ? prev : current), locations[0]);

    const stats = [
        {
            label: 'Global Sales',
            value: totalSales.toLocaleString(),
            icon: <ShoppingCart size={24} />,
            color: '#0061FF',
        },
        {
            label: 'Active Regions',
            value: totalRegions,
            icon: <Globe size={24} />,
            color: '#27C7FF',
        },
        {
            label: 'Top Region',
            value: topRegion?.country || 'N/A',
            icon: <TrendingUp size={24} />,
            color: '#FF61C7',
        },
        {
            label: 'Top City',
            value: topRegion?.city || 'N/A',
            icon: <Map size={24} />,
            color: '#7B61FF',
        },
    ];

    return (
        <Grid container spacing={3} sx={{ mb: 4 }}>
            {stats.map((stat) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={stat.label}>
                    <Card sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box
                            sx={{
                                p: 1.5,
                                borderRadius: 2,
                                bgcolor: `${stat.color}15`,
                                color: stat.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {stat.icon}
                        </Box>
                        <Box>
                            <Typography variant="body2" color="text.secondary" fontWeight={600}>
                                {stat.label}
                            </Typography>
                            <Typography variant="h5" fontWeight={800}>
                                {stat.value}
                            </Typography>
                        </Box>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};
