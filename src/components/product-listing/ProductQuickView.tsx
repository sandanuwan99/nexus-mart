'use client';

import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    IconButton,
    Box,
    Typography,
    Grid,
    Stack,
    Rating,
    Button,
    Divider,
    Tabs,
    Tab,
    Avatar,
    TextField,
    InputAdornment,
    Chip,
    Paper
} from '@mui/material';
import {
    X,
    ChevronRight,
    MapPin,
    ShieldCheck,
    RotateCcw,
    Share2,
    Heart,
    Plus,
    Minus,
    Truck
} from 'lucide-react';
import { SpiceProduct } from '@/data/spices';

interface Props {
    product: SpiceProduct | null;
    open: boolean;
    onClose: () => void;
}

export default function ProductQuickView({ product, open, onClose }: Props) {
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedVariant, setSelectedVariant] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState(0);

    if (!product) return null;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="lg"
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: 1.5,
                    overflow: 'hidden',
                    bgcolor: '#fff'
                }
            }}
        >
            <IconButton
                onClick={onClose}
                sx={{ position: 'absolute', right: 16, top: 16, zIndex: 10, bgcolor: 'rgba(0,0,0,0.05)' }}
            >
                <X size={20} />
            </IconButton>

            <DialogContent sx={{ p: 4 }}>
                <Grid container spacing={4}>
                    {/* 1. Image Gallery Column */}
                    <Grid size={{ xs: 12, md: 4.5 }}>
                        <Stack direction="row" spacing={1.5}>
                            {/* Thumbnails */}
                            <Stack spacing={1.5} sx={{ width: 64 }}>
                                {product.gallery?.map((img, idx) => (
                                    <Box
                                        key={idx}
                                        onClick={() => setSelectedImage(idx)}
                                        sx={{
                                            width: 64,
                                            height: 64,
                                            borderRadius: 0.5,
                                            border: `2px solid ${selectedImage === idx ? '#ff4747' : 'transparent'}`,
                                            overflow: 'hidden',
                                            cursor: 'pointer',
                                            bgcolor: '#f7f7f7'
                                        }}
                                    >
                                        <Box component="img" src={img} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </Box>
                                ))}
                            </Stack>
                            {/* Main Image */}
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    aspectRatio: '1/1',
                                    borderRadius: 1.5,
                                    overflow: 'hidden',
                                    bgcolor: '#f7f7f7',
                                    position: 'relative'
                                }}
                            >
                                <Box
                                    component="img"
                                    src={product.gallery?.[selectedImage] || product.image}
                                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Box>
                        </Stack>
                    </Grid>

                    {/* 2. Product Info Column */}
                    <Grid size={{ xs: 12, md: 4.5 }}>
                        <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, lineHeight: 1.2 }}>
                            {product.name}
                        </Typography>

                        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="body2" sx={{ fontWeight: 700, borderBottom: '1px solid #111820' }}>
                                by {product.seller.name}
                            </Typography>
                            <Rating value={product.rating} precision={0.5} size="small" readOnly />
                            <Typography variant="caption" color="text.secondary">
                                {product.rating} | {product.soldCount} sold
                            </Typography>
                        </Stack>

                        <Box sx={{ bgcolor: '#fff5f5', p: 2, borderRadius: 1, mb: 3 }}>
                            <Stack direction="row" spacing={1} alignItems="baseline">
                                <Typography variant="h3" sx={{ fontWeight: 900, color: '#ff4747' }}>
                                    LKR{(product.basePrice * 450 + (product.variants?.[selectedVariant]?.priceDelta || 0) * 450).toLocaleString()}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                                    LKR{((product.basePrice * 450) * 1.68).toLocaleString()}
                                </Typography>
                                <Chip label="68% off" size="small" sx={{ bgcolor: '#ff4747', color: '#fff', fontWeight: 800, height: 20 }} />
                            </Stack>
                            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5 }}>
                                Tax excluded, add at checkout if applicable • Extra 5% off with coins
                            </Typography>
                        </Box>

                        {/* Variants */}
                        {product.variants && (
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5 }}>
                                    Color/Weight: <Box component="span" sx={{ fontWeight: 400 }}>{product.variants[selectedVariant].name}</Box>
                                </Typography>
                                <Stack direction="row" spacing={1}>
                                    {product.variants.map((v, idx) => (
                                        <Box
                                            key={v.id}
                                            onClick={() => setSelectedVariant(idx)}
                                            sx={{
                                                width: 48,
                                                height: 48,
                                                borderRadius: 0.5,
                                                border: `2px solid ${selectedVariant === idx ? '#111820' : '#e5e5e5'}`,
                                                overflow: 'hidden',
                                                cursor: 'pointer',
                                                p: 0.25
                                            }}
                                        >
                                            <Box component="img" src={v.image} sx={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '2px' }} />
                                        </Box>
                                    ))}
                                </Stack>
                            </Box>
                        )}

                        {/* Mini Dashboard Tabs */}
                        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
                            <Tabs value={activeTab} onChange={(e, v) => setActiveTab(v)} sx={{ minHeight: 40 }}>
                                <Tab label={`Customer Reviews (${product.reviewCount})`} sx={{ textTransform: 'none', fontWeight: 700, fontSize: '0.8rem', minHeight: 40 }} />
                                <Tab label="Specifications" sx={{ textTransform: 'none', fontWeight: 700, fontSize: '0.8rem', minHeight: 40 }} />
                                <Tab label="Description" sx={{ textTransform: 'none', fontWeight: 700, fontSize: '0.8rem', minHeight: 40 }} />
                            </Tabs>
                        </Box>

                        <Box sx={{ maxHeight: 200, overflowY: 'auto', pr: 1 }}>
                            {activeTab === 0 && (
                                <Stack spacing={2}>
                                    {product.reviews?.map((review) => (
                                        <Box key={review.id}>
                                            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.5 }}>
                                                <Rating value={review.rating} size="small" readOnly />
                                                <Typography variant="caption" sx={{ fontWeight: 700 }}>{review.user}</Typography>
                                                <Typography variant="caption" color="text.secondary">{review.date}</Typography>
                                            </Stack>
                                            <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>{review.comment}</Typography>
                                        </Box>
                                    ))}
                                </Stack>
                            )}
                            {activeTab === 1 && (
                                <Grid container spacing={1}>
                                    {Object.entries(product.specifications).map(([key, val]) => (
                                        <Grid size={{ xs: 6 }} key={key}>
                                            <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>{key}</Typography>
                                            <Typography variant="body2" sx={{ fontWeight: 600 }}>{val}</Typography>
                                        </Grid>
                                    ))}
                                </Grid>
                            )}
                            {activeTab === 2 && (
                                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                                    {product.description}
                                </Typography>
                            )}
                        </Box>
                    </Grid>

                    {/* 3. Purchase Sidebar */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Paper variant="outlined" sx={{ p: 2.5, borderRadius: 1.5, border: '1px solid #e5e5e5' }}>
                            <Stack spacing={2.5}>
                                <Box>
                                    <Typography variant="caption" color="text.secondary">Sold By</Typography>
                                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                                        <Typography variant="body2" sx={{ fontWeight: 800 }}>{product.seller.name} Store</Typography>
                                        <ChevronRight size={14} />
                                    </Stack>
                                </Box>

                                <Divider />

                                <Stack spacing={1.5}>
                                    <Box sx={{ display: 'flex', gap: 1.5 }}>
                                        <Truck size={18} color="#707070" />
                                        <Box>
                                            <Typography variant="body2" sx={{ fontWeight: 800 }}>Shipping: LKR 2,844.44</Typography>
                                            <Typography variant="caption" color="text.secondary">Delivery: Mar 18 - 25</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: 1.5 }}>
                                        <ShieldCheck size={18} color="#00aa5b" />
                                        <Typography variant="body2" sx={{ fontWeight: 800 }}>Security & Privacy</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: 1.5 }}>
                                        <RotateCcw size={18} color="#707070" />
                                        <Typography variant="body2" sx={{ fontWeight: 800 }}>Return & Refund policy</Typography>
                                    </Box>
                                </Stack>

                                <Box>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5 }}>Quantity</Typography>
                                    <Stack direction="row" alignItems="center" spacing={1.5}>
                                        <IconButton size="small" onClick={() => setQuantity(q => Math.max(1, q - 1))} sx={{ border: '1px solid #e5e5e5' }}>
                                            <Minus size={14} />
                                        </IconButton>
                                        <Typography sx={{ fontWeight: 700, minWidth: 20, textAlign: 'center' }}>{quantity}</Typography>
                                        <IconButton size="small" onClick={() => setQuantity(q => q + 1)} sx={{ border: '1px solid #e5e5e5' }}>
                                            <Plus size={14} />
                                        </IconButton>
                                        <Typography variant="caption" color="text.secondary">57 available</Typography>
                                    </Stack>
                                </Box>

                                <Stack spacing={1}>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        sx={{
                                            borderRadius: 10,
                                            py: 1.5,
                                            fontWeight: 800,
                                            bgcolor: '#ff4747',
                                            '&:hover': { bgcolor: '#e63e3e' },
                                            textTransform: 'none'
                                        }}
                                    >
                                        Buy now
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        fullWidth
                                        sx={{
                                            borderRadius: 10,
                                            py: 1.5,
                                            fontWeight: 800,
                                            color: '#111820',
                                            borderColor: '#111820',
                                            '&:hover': { borderColor: '#111820', bgcolor: 'rgba(0,0,0,0.02)' },
                                            textTransform: 'none'
                                        }}
                                    >
                                        Add to cart
                                    </Button>
                                </Stack>

                                <Stack direction="row" spacing={1}>
                                    <Button
                                        variant="text"
                                        startIcon={<Share2 size={16} />}
                                        fullWidth
                                        sx={{ color: '#111820', fontWeight: 700, textTransform: 'none', bgcolor: '#f7f7f7' }}
                                    >
                                        Share
                                    </Button>
                                    <Button
                                        variant="text"
                                        startIcon={<Heart size={16} />}
                                        fullWidth
                                        sx={{ color: '#111820', fontWeight: 700, textTransform: 'none', bgcolor: '#f7f7f7' }}
                                    >
                                        11
                                    </Button>
                                </Stack>
                            </Stack>
                        </Paper>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
}
