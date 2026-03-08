"use client";

import React from 'react';
import { Box, Container, Typography, Grid, Card } from '@mui/material';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import { AnalyticsMap } from '@/components/AnalyticsMap/AnalyticsMap';
import { AnalyticsOverview } from '@/components/AnalyticsOverview/AnalyticsOverview';
import { SalesByRegion } from '@/components/SalesByRegion/SalesByRegion';
import { salesLocations } from '@/data/salesLocations';

export default function AnalyticsPage() {
    return (
        <DashboardLayout>
            <Container maxWidth="xl" sx={{ py: 4 }}>
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h4" sx={{ fontWeight: 800 }}>
                        Sales Analytics
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Visualize where your spice products are being purchased around the world.
                    </Typography>
                </Box>

                {/* Top Metrics Cards */}
                <AnalyticsOverview locations={salesLocations} />

                {/* Map and Regional Breakdown */}
                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Card sx={{ height: '100%', overflow: 'hidden' }}>
                            <AnalyticsMap locations={salesLocations} />
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <SalesByRegion locations={salesLocations} />
                    </Grid>
                </Grid>

            </Container>
        </DashboardLayout>
    );
}
