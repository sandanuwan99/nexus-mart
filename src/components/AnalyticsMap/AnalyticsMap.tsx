"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import { Box, CircularProgress } from '@mui/material';
import { SalesLocation } from '@/data/salesLocations';

const LeafletMap = dynamic(
    () => import('./LeafletMap'),
    {
        ssr: false,
        loading: () => (
            <Box sx={{ height: 400, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
        )
    }
);

interface AnalyticsMapProps {
    locations: SalesLocation[];
}

export const AnalyticsMap: React.FC<AnalyticsMapProps> = ({ locations }) => {
    return <LeafletMap locations={locations} />;
};

// Removed unused styles
