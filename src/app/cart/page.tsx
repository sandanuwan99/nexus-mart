"use client";

import React, { useState } from 'react';
import Header from "@/components/header/Header";
import {
    Container,
    Grid,
    Typography,
    Box,
    Button,
    Stack,
    Divider,
    IconButton,
    Paper,
    Avatar,
    TextField,
    InputAdornment
} from "@mui/material";
import {
    Trash2,
    Plus,
    Minus,
    ArrowRight,
    Tag,
    CreditCard,
    ShieldCheck,
    Truck,
    ShoppingBag
} from "lucide-react";
import { useRouter } from 'next/navigation';

const CART_ITEMS = [
    {
        id: 1,
        name: "NeuralLink Z1 Smart Glasses",
        price: 899,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&auto=format&fit=crop",
        variant: 'Titan Black'
    },
    {
        id: 2,
        name: "Quantum Pro Audio Headphones",
        price: 349,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop",
        variant: 'Studio Edition'
    }
];

export default function CartPage() {
    const [items, setItems] = useState(CART_ITEMS);
    const router = useRouter();

    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = items.length > 0 ? 15 : 0;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    const updateQuantity = (id: number, delta: number) => {
        setItems(items.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        ));
    };

    return (
        <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
            <Header />

            <Container maxWidth="xl" sx={{ py: 6 }}>
                <Typography variant="h3" sx={{ fontWeight: 900, mb: 4, letterSpacing: '-1.5px' }}>
                    Your Shopping Cart
                </Typography>

                <Grid container spacing={6}>
                    {/* Cart Items */}
                    <Grid size={{ xs: 12, lg: 8 }}>
                        <Stack spacing={3}>
                            {items.map((item) => (
                                <Paper key={item.id} sx={{ p: 3, borderRadius: 4, position: 'relative' }}>
                                    <Grid container spacing={3} alignItems="center">
                                        <Grid size={{ xs: 12, sm: 2.5 }}>
                                            <Box sx={{
                                                borderRadius: 3,
                                                overflow: 'hidden',
                                                aspectRatio: '1/1',
                                                border: '1px solid rgba(0,0,0,0.05)'
                                            }}>
                                                <Box component="img" src={item.image} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </Box>
                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 5.5 }}>
                                            <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.5 }}>{item.name}</Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, mb: 1.5 }}>
                                                Variant: <Box component="span" sx={{ color: 'text.primary' }}>{item.variant}</Box>
                                            </Typography>
                                            <Stack direction="row" alignItems="center" spacing={1} sx={{ color: 'success.main' }}>
                                                <Truck size={14} />
                                                <Typography variant="caption" sx={{ fontWeight: 700 }}>In Stock, Ready to ship</Typography>
                                            </Stack>
                                        </Grid>
                                        <Grid size={{ xs: 6, sm: 2 }}>
                                            <Stack direction="row" alignItems="center" spacing={1.5} sx={{ bgcolor: 'rgba(0,0,0,0.03)', width: 'fit-content', p: 0.8, borderRadius: 2 }}>
                                                <IconButton size="small" onClick={() => updateQuantity(item.id, -1)}><Minus size={14} /></IconButton>
                                                <Typography sx={{ minWidth: 20, textAlign: 'center', fontWeight: 800, fontSize: 14 }}>{item.quantity}</Typography>
                                                <IconButton size="small" onClick={() => updateQuantity(item.id, 1)}><Plus size={14} /></IconButton>
                                            </Stack>
                                        </Grid>
                                        <Grid size={{ xs: 6, sm: 2 }} sx={{ textAlign: 'right' }}>
                                            <Typography variant="h6" sx={{ fontWeight: 800 }}>${item.price * item.quantity}</Typography>
                                            <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>${item.price} each</Typography>
                                        </Grid>
                                    </Grid>
                                    <IconButton sx={{ position: 'absolute', top: 12, right: 12, color: 'text.disabled', '&:hover': { color: 'error.main' } }}>
                                        <Trash2 size={18} />
                                    </IconButton>
                                </Paper>
                            ))}

                            {items.length === 0 && (
                                <Box sx={{ textAlign: 'center', py: 10 }}>
                                    <Box sx={{ mb: 3, opacity: 0.2 }}><ShoppingBag size={80} /></Box>
                                    <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>Your cart is empty</Typography>
                                    <Button variant="contained" onClick={() => router.push('/products')}>Browse Products</Button>
                                </Box>
                            )}
                        </Stack>

                        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
                            <Button variant="text" startIcon={<ShoppingBag size={18} />} sx={{ fontWeight: 700 }} onClick={() => router.push('/products')}>
                                Continue Shopping
                            </Button>
                        </Box>
                    </Grid>

                    {/* Summary */}
                    <Grid size={{ xs: 12, lg: 4 }}>
                        <Stack spacing={3} sx={{ position: 'sticky', top: 110 }}>
                            <Paper sx={{ p: 4, borderRadius: 4, bgcolor: 'rgba(0, 97, 255, 0.02)', border: '1px solid rgba(0, 97, 255, 0.1)' }}>
                                <Typography variant="h6" sx={{ fontWeight: 900, mb: 3 }}>Order Summary</Typography>
                                <Stack spacing={2}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography color="text.secondary" sx={{ fontWeight: 500 }}>Subtotal</Typography>
                                        <Typography sx={{ fontWeight: 700 }}>${subtotal.toFixed(2)}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography color="text.secondary" sx={{ fontWeight: 500 }}>Estimated Shipping</Typography>
                                        <Typography sx={{ fontWeight: 700 }}>${shipping.toFixed(2)}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography color="text.secondary" sx={{ fontWeight: 500 }}>Estimated Tax (8%)</Typography>
                                        <Typography sx={{ fontWeight: 700 }}>${tax.toFixed(2)}</Typography>
                                    </Box>
                                    <Divider sx={{ my: 1 }} />
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography variant="h6" sx={{ fontWeight: 900 }}>Total</Typography>
                                        <Typography variant="h6" sx={{ fontWeight: 900, color: 'primary.main' }}>${total.toFixed(2)}</Typography>
                                    </Box>
                                </Stack>

                                <Box sx={{ mt: 4 }}>
                                    <TextField
                                        fullWidth
                                        placeholder="Promo Code"
                                        size="small"
                                        variant="outlined"
                                        sx={{ bgcolor: 'white', borderRadius: 2 }}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <Button sx={{ fontWeight: 700 }}>Apply</Button>
                                                </InputAdornment>
                                            ),
                                            sx: { borderRadius: 2 }
                                        }}
                                    />
                                </Box>

                                <Button
                                    fullWidth
                                    variant="contained"
                                    size="large"
                                    endIcon={<ArrowRight size={20} />}
                                    sx={{ mt: 4, borderRadius: 3, py: 2, fontWeight: 900, boxShadow: '0 10px 20px rgba(0, 97, 255, 0.2)' }}
                                >
                                    Proceed to Checkout
                                </Button>
                            </Paper>

                            <Paper sx={{ p: 3, borderRadius: 4 }}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 2 }}>Secure Payments</Typography>
                                <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                                    <CreditCard size={24} color="#64748B" />
                                    <ShieldCheck size={24} color="#64748B" />
                                </Stack>
                                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500 }}>
                                    Every transaction on NexusMart is encrypted and secure. We do not store your full card details.
                                </Typography>
                            </Paper>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
