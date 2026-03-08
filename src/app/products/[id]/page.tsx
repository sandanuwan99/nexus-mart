"use client";

import React, { useState, use } from 'react';
import Header from "@/components/header/Header";
import {
    Container,
    Grid,
    Typography,
    Box,
    Button,
    Stack,
    Divider,
    Rating,
    IconButton,
    Avatar,
    Tab,
    Tabs,
    Paper,
    Chip
} from "@mui/material";
import {
    ShoppingCart,
    Heart,
    Share2,
    ShieldCheck,
    Truck,
    RotateCcw,
    Plus,
    Minus,
    ChevronLeft
} from "lucide-react";
import { useRouter } from 'next/navigation';
import { SPICES, SpiceProduct } from '@/data/spices';

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();

    // Find product from spices data
    const product = SPICES.find((p: SpiceProduct) => p.id === id) || SPICES[0];

    const [selectedImage, setSelectedImage] = useState(product.gallery?.[0] || product.image);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState(0);

    return (
        <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh' }}>
            <Header />

            <Container maxWidth="xl" sx={{ py: 4 }}>
                <Button
                    onClick={() => router.back()}
                    startIcon={<ChevronLeft size={20} />}
                    sx={{ mb: 3, fontWeight: 700, color: 'text.secondary', textTransform: 'none' }}
                >
                    Back to results
                </Button>

                <Paper elevation={0} sx={{ p: { xs: 2, md: 4 }, borderRadius: 2, border: '1px solid #efefef' }}>
                    <Grid container spacing={6}>
                        {/* Product Gallery */}
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Box>
                                <Box sx={{
                                    borderRadius: 1.5,
                                    overflow: 'hidden',
                                    bgcolor: '#fff',
                                    mb: 2,
                                    aspectRatio: '1/1',
                                    border: '1px solid #eee'
                                }}>
                                    <Box
                                        component="img"
                                        src={selectedImage}
                                        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </Box>
                                <Stack direction="row" spacing={1.5} sx={{ overflowX: 'auto', pb: 1 }}>
                                    {(product.gallery || [product.image]).map((img: string, idx: number) => (
                                        <Box
                                            key={idx}
                                            onClick={() => setSelectedImage(img)}
                                            sx={{
                                                width: 70,
                                                height: 70,
                                                borderRadius: 1,
                                                overflow: 'hidden',
                                                cursor: 'pointer',
                                                border: selectedImage === img ? '2px solid #111820' : '1px solid #eee',
                                                flexShrink: 0
                                            }}
                                        >
                                            <Box component="img" src={img} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </Box>
                                    ))}
                                </Stack>
                            </Box>
                        </Grid>

                        {/* Product Info */}
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Stack spacing={3}>
                                <Box>
                                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, color: '#111820' }}>
                                        {product.name}
                                    </Typography>
                                    <Stack direction="row" spacing={2} alignItems="center">
                                        <Rating value={product.rating} precision={0.1} readOnly size="small" />
                                        <Typography variant="body2" sx={{ fontWeight: 700 }}>
                                            {product.rating} <Box component="span" sx={{ color: 'text.secondary', fontWeight: 500 }}>({product.reviewCount} reviews)</Box>
                                        </Typography>
                                        <Divider orientation="vertical" flexItem sx={{ height: 16, alignSelf: 'center' }} />
                                        <Typography variant="body2" sx={{ fontWeight: 700, color: 'success.main' }}>
                                            {product.soldCount}+ Sold
                                        </Typography>
                                    </Stack>
                                </Box>

                                <Box sx={{ bgcolor: '#fafafa', p: 2, borderRadius: 2 }}>
                                    <Stack direction="row" alignItems="baseline" spacing={1.5}>
                                        <Typography variant="h3" sx={{ fontWeight: 900, color: '#111820' }}>
                                            LKR {product.basePrice.toLocaleString()}
                                        </Typography>
                                        {product.priceRange && (
                                            <Typography variant="h6" sx={{ textDecoration: 'line-through', color: 'text.secondary', fontWeight: 500 }}>
                                                LKR {product.priceRange.max.toLocaleString()}
                                            </Typography>
                                        )}
                                        {product.priceRange && (
                                            <Chip
                                                label={`-${Math.round((1 - product.basePrice / product.priceRange.max) * 100)}%`}
                                                size="small"
                                                sx={{ bgcolor: '#111820', color: '#fff', fontWeight: 800, borderRadius: 1 }}
                                            />
                                        )}
                                    </Stack>
                                    <Typography variant="caption" sx={{ color: 'success.main', fontWeight: 700, mt: 0.5, display: 'block' }}>
                                        Price includes VAT
                                    </Typography>
                                </Box>

                                <Divider />

                                <Box>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1.5 }}>Ships from Sri Lanka 🇱🇰</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Shipping: {product.shipping === 0 ? 'FREE' : `LKR ${product.shipping}`}
                                    </Typography>
                                </Box>

                                <Box>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1.5 }}>Quantity</Typography>
                                    <Stack direction="row" alignItems="center" spacing={2}>
                                        <Stack direction="row" alignItems="center" sx={{ border: '1px solid #ddd', borderRadius: 10, px: 1 }}>
                                            <IconButton size="small" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={16} /></IconButton>
                                            <Typography sx={{ minWidth: 40, textAlign: 'center', fontWeight: 800 }}>{quantity}</Typography>
                                            <IconButton size="small" onClick={() => setQuantity(quantity + 1)}><Plus size={16} /></IconButton>
                                        </Stack>
                                    </Stack>
                                </Box>

                                <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        size="large"
                                        sx={{
                                            bgcolor: '#111820',
                                            color: '#fff',
                                            borderRadius: 10,
                                            py: 1.8,
                                            fontWeight: 800,
                                            '&:hover': { bgcolor: '#000' }
                                        }}
                                    >
                                        Buy Now
                                    </Button>
                                    <Button
                                        fullWidth
                                        variant="outlined"
                                        size="large"
                                        startIcon={<ShoppingCart size={20} />}
                                        sx={{
                                            borderColor: '#111820',
                                            color: '#111820',
                                            borderRadius: 10,
                                            py: 1.8,
                                            fontWeight: 800,
                                            '&:hover': { bgcolor: '#f5f5f5', borderColor: '#000' }
                                        }}
                                    >
                                        Add to Cart
                                    </Button>
                                </Stack>

                                <Stack direction="row" spacing={3} sx={{ pt: 1 }}>
                                    <Stack direction="row" spacing={1} alignItems="center" sx={{ cursor: 'pointer' }}>
                                        <Heart size={18} />
                                        <Typography variant="caption" sx={{ fontWeight: 700 }}>Wish List</Typography>
                                    </Stack>
                                    <Stack direction="row" spacing={1} alignItems="center" sx={{ cursor: 'pointer' }}>
                                        <Share2 size={18} />
                                        <Typography variant="caption" sx={{ fontWeight: 700 }}>Share</Typography>
                                    </Stack>
                                </Stack>

                                <Divider />

                                <Grid container spacing={2}>
                                    {[
                                        { icon: <ShieldCheck size={20} />, label: 'Buyer Protection' },
                                        { icon: <Truck size={20} />, label: 'Fast Shipping' },
                                        { icon: <RotateCcw size={20} />, label: '7-Day Returns' }
                                    ].map((item) => (
                                        <Grid size={{ xs: 4 }} key={item.label}>
                                            <Stack direction="row" spacing={1} alignItems="center">
                                                <Box sx={{ color: 'text.secondary' }}>{item.icon}</Box>
                                                <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary' }}>{item.label}</Typography>
                                            </Stack>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Stack>
                        </Grid>
                    </Grid>
                </Paper>

                {/* Tabs Section */}
                <Box sx={{ mt: 4 }}>
                    <Tabs
                        value={activeTab}
                        onChange={(_e, val: number) => setActiveTab(val)}
                        sx={{
                            borderBottom: '1px solid #eee',
                            '& .MuiTabs-indicator': { bgcolor: '#111820', height: 3 }
                        }}
                    >
                        <Tab label="Description" sx={{ fontWeight: 800, textTransform: 'none', fontSize: '1rem', color: '#666', '&.Mui-selected': { color: '#111820' } }} />
                        <Tab label="Specifications" sx={{ fontWeight: 800, textTransform: 'none', fontSize: '1rem', color: '#666', '&.Mui-selected': { color: '#111820' } }} />
                        <Tab label={`Reviews (${product.reviewCount})`} sx={{ fontWeight: 800, textTransform: 'none', fontSize: '1rem', color: '#666', '&.Mui-selected': { color: '#111820' } }} />
                    </Tabs>

                    <Paper elevation={0} sx={{ p: 4, borderRadius: 2, border: '1px solid #efefef', borderTop: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
                        {activeTab === 0 && (
                            <Box sx={{ maxWidth: 800 }}>
                                <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>Product Description</Typography>
                                <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8 }}>
                                    {product.description || "Premium quality Sri Lankan spice, sourced directly from the finest estates. Carefully handled to preserve aroma and potency."}
                                </Typography>
                            </Box>
                        )}
                        {activeTab === 1 && (
                            <Box sx={{ maxWidth: 800 }}>
                                <Typography variant="h6" sx={{ fontWeight: 800, mb: 4 }}>Product Specifications</Typography>
                                <Grid container spacing={2}>
                                    {Object.entries(product.specifications).map(([label, value]: [string, string], idx: number) => (
                                        <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                                            <Paper
                                                elevation={0}
                                                sx={{
                                                    p: 2,
                                                    bgcolor: '#f8fafc',
                                                    borderRadius: 1.5,
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <Typography variant="body2" sx={{ fontWeight: 700, color: '#0061FF' }}>
                                                    {label}
                                                </Typography>
                                                <Typography variant="body2" sx={{ fontWeight: 700, color: '#111820', textAlign: 'right' }}>
                                                    {value}
                                                </Typography>
                                            </Paper>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        )}
                        {activeTab === 2 && (
                            <Box>
                                <Typography variant="h6" sx={{ fontWeight: 800, mb: 4 }}>Customer Reviews ({product.reviewCount})</Typography>

                                <Stack spacing={4}>
                                    {(product.reviews || []).map((review, idx) => (
                                        <Box key={idx}>
                                            <Stack direction="row" spacing={2} sx={{ mb: 1.5 }}>
                                                <Avatar
                                                    src={review.avatar}
                                                    sx={{
                                                        width: 48,
                                                        height: 48,
                                                        bgcolor: '#f5f5f5',
                                                        color: '#111820',
                                                        fontWeight: 700,
                                                        fontSize: '0.9rem'
                                                    }}
                                                >
                                                    {review.user.charAt(0)}
                                                </Avatar>
                                                <Box>
                                                    <Typography variant="subtitle1" sx={{ fontWeight: 800, lineHeight: 1.2 }}>
                                                        {review.user}
                                                    </Typography>
                                                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 0.5 }}>
                                                        <Rating value={review.rating} size="small" readOnly />
                                                        <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
                                                            {review.date}
                                                        </Typography>
                                                    </Stack>
                                                </Box>
                                            </Stack>
                                            <Typography variant="body2" sx={{ color: '#444', lineHeight: 1.6, pl: 8 }}>
                                                {review.comment}
                                            </Typography>
                                            <Divider sx={{ mt: 4 }} />
                                        </Box>
                                    ))}

                                    {(!product.reviews || product.reviews.length === 0) && (
                                        <Typography variant="body2" color="text.secondary">No reviews yet for this product.</Typography>
                                    )}
                                </Stack>
                            </Box>
                        )}
                    </Paper>
                </Box>
            </Container>
        </Box>
    );
}
