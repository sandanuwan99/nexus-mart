"use client";

import React from 'react';
import { Box, Typography, TextField, Button, Switch, Divider } from '@mui/material';

export default function SecuritySettings() {
    return (
        <Box sx={{ maxWidth: 600 }}>
            <Typography variant="h6" fontWeight={700} mb={3}>
                Security & Login
            </Typography>

            <Box sx={{ mb: 6 }}>
                <Typography variant="subtitle2" fontWeight={600} mb={2}>
                    Change Password
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <TextField
                        fullWidth
                        label="Current Password"
                        type="password"
                        variant="outlined"
                    />
                    <TextField
                        fullWidth
                        label="New Password"
                        type="password"
                        variant="outlined"
                    />
                    <TextField
                        fullWidth
                        label="Confirm New Password"
                        type="password"
                        variant="outlined"
                    />
                    <Box sx={{ mt: 1 }}>
                        <Button variant="contained" color="primary">
                            Update Password
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Divider sx={{ mb: 4 }} />

            <Box>
                <Typography variant="subtitle2" fontWeight={600} mb={1}>
                    Two-Factor Authentication (2FA)
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={3}>
                    Add an extra layer of security to your account by requesting a verification code in addition to your password.
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 3, border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
                    <Box>
                        <Typography fontWeight={600}>Enable 2FA</Typography>
                        <Typography variant="body2" color="text.secondary">Currently enabled using Authenticator App</Typography>
                    </Box>
                    <Switch defaultChecked color="success" />
                </Box>
            </Box>
        </Box>
    );
}
