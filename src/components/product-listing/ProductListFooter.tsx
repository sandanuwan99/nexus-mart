'use client';

import React from 'react';
import {
    Box,
    Typography,
    Stack,
    Chip,
    Divider,
    Link,
    IconButton,
    Select,
    MenuItem,
    FormControl,
    Grid
} from '@mui/material';
import { ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import { RELATED_SEARCHES, BRANDS } from '@/data/spices';

export default function ProductListFooter() {
    return (
        <Box sx={{ mt: 10, pb: 10 }}>
            {/* Feedback Section */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>
                    <Typography variant="caption" sx={{ fontSize: '0.75rem', color: '#111820' }}>
                        Tell us what you think
                    </Typography>
                </Stack>
            </Box>

            {/* Pagination Section */}
            <Divider sx={{ mb: 4 }} />
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', mb: 8 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                    <IconButton size="small" sx={{ bgcolor: '#f7f7f7' }} disabled>
                        <ChevronLeft size={20} />
                    </IconButton>

                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                        <Box
                            key={num}
                            sx={{
                                width: 32,
                                height: 32,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                borderRadius: '50%',
                                position: 'relative',
                                '&:hover': { bgcolor: 'rgba(0,0,0,0.05)' }
                            }}
                        >
                            <Typography variant="body2" sx={{ fontWeight: num === 1 ? 700 : 400 }}>
                                {num}
                            </Typography>
                            {num === 1 && (
                                <Box sx={{ position: 'absolute', bottom: 0, width: 12, height: 2, bgcolor: '#111820', borderRadius: 4 }} />
                            )}
                        </Box>
                    ))}

                    <IconButton size="small" sx={{ bgcolor: '#f7f7f7' }}>
                        <ChevronRight size={20} />
                    </IconButton>
                </Stack>

                <Box sx={{ position: 'absolute', right: 0, display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>Items Per Page</Typography>
                    <FormControl size="small" sx={{ minWidth: 80 }}>
                        <Select value={60} sx={{ borderRadius: 2, fontSize: '0.85rem' }}>
                            <MenuItem value={60}>60</MenuItem>
                            <MenuItem value={120}>120</MenuItem>
                            <MenuItem value={240}>240</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>

            {/* Related Searches Section */}
            <Box sx={{ mb: 8 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, fontSize: '1.5rem' }}>
                    Related searches
                </Typography>
                <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
                    {RELATED_SEARCHES.map((term) => (
                        <Chip
                            key={term}
                            label={term}
                            variant="outlined"
                            onClick={() => { }}
                            sx={{
                                borderRadius: 4,
                                px: 1,
                                bgcolor: '#f7f7f7',
                                border: 'none',
                                fontWeight: 500,
                                fontSize: '0.85rem',
                                '&:hover': { bgcolor: '#ececec' }
                            }}
                        />
                    ))}
                </Stack>
            </Box>

            {/* Brands Section */}
            <Box sx={{ mb: 10 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, fontSize: '1.5rem' }}>
                    Brands you might love
                </Typography>
                <Grid container spacing={2}>
                    {BRANDS.map((brand) => (
                        <Grid size={{ xs: 2.4 }} key={brand.name}>
                            <Box sx={{ cursor: 'pointer', group: 'brand' }}>
                                <Box
                                    sx={{
                                        aspectRatio: '1/1',
                                        bgcolor: '#f7f7f7',
                                        borderRadius: 3,
                                        overflow: 'hidden',
                                        mb: 1.5,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'transform 0.2s',
                                        '&:hover': { transform: 'scale(1.02)' }
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={brand.image}
                                        alt={brand.name}
                                        sx={{ width: '80%', height: '80%', objectFit: 'contain' }}
                                    />
                                </Box>
                                <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '0.9rem' }}>
                                    {brand.name}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Bottom Footer Links */}
            <Divider sx={{ mb: 4 }} />
            <Box sx={{ mb: 4 }}>
                <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem sx={{ height: 12, mt: 0.5 }} />} flexWrap="wrap" useFlexGap>
                    {['About eBay', 'Announcements', 'Community', 'Safety Centre', 'Seller Centre', 'VeRO: Protecting Intellectual Property', 'Policies', 'Product Safety Tips', 'Help & Contact', 'Site Map'].map((link) => (
                        <Link key={link} href="#" sx={{ fontSize: '0.75rem', color: '#707070', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                            {link}
                        </Link>
                    ))}
                </Stack>
            </Box>

            <Box sx={{ mb: 4 }}>
                <Typography variant="caption" sx={{ fontSize: '0.7rem', color: '#707070' }}>
                    Copyright © 1995-2026 eBay Inc. All Rights Reserved.{' '}
                    <Link href="#" sx={{ color: 'inherit', textDecoration: 'underline' }}>User Agreement</Link>,{' '}
                    <Link href="#" sx={{ color: 'inherit', textDecoration: 'underline' }}>Privacy</Link>,{' '}
                    <Link href="#" sx={{ color: 'inherit', textDecoration: 'underline' }}>Payments Terms of Use</Link>,{' '}
                    <Link href="#" sx={{ color: 'inherit', textDecoration: 'underline' }}>Cookies</Link> and{' '}
                    <Link href="#" sx={{ color: 'inherit', textDecoration: 'underline' }}>AdChoice</Link>
                </Typography>
            </Box>

            <Box>
                <Typography variant="caption" sx={{ fontSize: '0.7rem', color: '#707070', display: 'block', mb: 1 }}>
                    This page was last updated: 08-Mar 00:11. Number of bids and bid amounts may be slightly out of date. See each listing for international postage options and costs.
                </Typography>
            </Box>
        </Box>
    );
}
