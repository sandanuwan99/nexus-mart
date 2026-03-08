"use client";

import React from 'react';
import { Box, Typography, TextField, Button, MenuItem, Grid } from '@mui/material';

export default function StoreSettings() {
    const currencies = [
        { value: 'USD', label: '$ (USD)' },
        { value: 'EUR', label: '€ (EUR)' },
        { value: 'LKR', label: 'Rs (LKR)' }
    ];

    const timezones = [
        { value: 'Asia/Colombo', label: '(GMT+5:30) Sri Jayawardenepura' },
        { value: 'America/New_York', label: '(GMT-5:00) Eastern Time' },
        { value: 'Europe/London', label: '(GMT+0:00) London' }
    ];

    return (
        <Box>
            <Typography variant="h6" fontWeight={700} mb={3}>
                Store Details
            </Typography>

            <Grid container spacing={4} sx={{ maxWidth: 800 }}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" fontWeight={600} mb={2}>
                        Basic Information
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <TextField
                            fullWidth
                            label="Store Name"
                            defaultValue="NexusMart Spices"
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            label="Contact Email"
                            defaultValue="support@nexusmart.com"
                            type="email"
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            label="Support Phone"
                            defaultValue="+94 77 000 0000"
                            variant="outlined"
                        />
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" fontWeight={600} mb={2}>
                        Regional Settings
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <TextField
                            select
                            fullWidth
                            label="Default Currency"
                            defaultValue="LKR"
                            variant="outlined"
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            select
                            fullWidth
                            label="Timezone"
                            defaultValue="Asia/Colombo"
                            variant="outlined"
                        >
                            {timezones.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                </Grid>
            </Grid>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4, maxWidth: 800 }}>
                <Button variant="contained" size="large">
                    Save Settings
                </Button>
            </Box>
        </Box>
    );
}
