import Header from "@/components/header/Header";
import ProductCard from "@/components/common/ProductCard";
import { Container, Grid, Typography, Box, Button, Chip } from "@mui/material";
import { ArrowRight, ChevronRight, Zap } from "lucide-react";

const FEATURED_PRODUCTS = [
  { id: 1, name: "NeuralLink Z1 Smart Glasses - Titan Black", price: 899, originalPrice: 1199, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&auto=format&fit=crop", rating: 4.9, reviews: 124, isNew: true },
  { id: 2, name: "Quantum Pro Audio - Studio Headphones", price: 349, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop", rating: 4.8, reviews: 856 },
  { id: 3, name: "OmniWatch Series X - OLED Edition", price: 449, originalPrice: 599, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop", rating: 4.7, reviews: 231 },
  { id: 4, name: "Lumina S1 Desktop Lighting System", price: 129, image: "https://images.unsplash.com/photo-1526733158173-e6b0a794901c?w=600&auto=format&fit=crop", rating: 4.9, reviews: 42 },
];

export default function Home() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Header />

      <main>
        {/* Hero Section */}
        <Box sx={{
          pt: { xs: 6, md: 10 },
          pb: { xs: 8, md: 12 },
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <Container maxWidth="xl">
            <Grid container spacing={4} alignItems="center">
              <Grid size={{ xs: 12, md: 7 }}>
                <Box className="animate-fade-in">
                  <Chip
                    icon={<Zap size={14} fill="#0061FF" />}
                    label="Spring Collection 2026"
                    color="primary"
                    variant="outlined"
                    sx={{ mb: 3, fontWeight: 700, borderRadius: 2 }}
                  />
                  <Typography variant="h1" sx={{ mb: 3 }}>
                    Elevate Your World <br />
                    With <Box component="span" sx={{ color: 'primary.main' }}>Modern Tech</Box>
                  </Typography>
                  <Typography variant="h5" color="text.secondary" sx={{ mb: 5, maxWidth: 600, fontWeight: 500 }}>
                    NexusMart provides a curated selection of world-class gadgets and fashion, delivered globally with unmatched speed.
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button variant="contained" size="large" endIcon={<ArrowRight size={20} />}>
                      Shop Collection
                    </Button>
                    <Button variant="outlined" size="large">
                      View Categories
                    </Button>
                  </Box>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 5 }}>
                <Box sx={{
                  width: '100%',
                  height: 450,
                  bgcolor: 'rgba(0, 97, 255, 0.03)',
                  borderRadius: 10,
                  border: '1px solid rgba(0, 97, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}>
                  <Box sx={{ position: 'absolute', top: -20, right: -20, p: 3, bgcolor: '#fff', borderRadius: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                    <Typography variant="h4" sx={{ fontWeight: 800, color: 'primary.main' }}>$899</Typography>
                    <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary' }}>Limited Time</Typography>
                  </Box>
                  {/* Image Placeholder - In real use, we'd use generate_image if needed */}
                  <Typography variant="overline" sx={{ fontWeight: 800, color: 'primary.main' }}>Featured Product Spotlight</Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Featured Section */}
        <Container maxWidth="xl" sx={{ pb: 10 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 4 }}>
            <Box>
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 1 }}>Featured Deals</Typography>
              <Typography variant="body1" color="text.secondary">Handpicked technology at the best prices.</Typography>
            </Box>
            <Button variant="text" endIcon={<ChevronRight size={20} />} sx={{ color: 'primary.main', fontWeight: 700 }}>
              See all deals
            </Button>
          </Box>

          <Grid container spacing={3}>
            {FEATURED_PRODUCTS.map((product) => (
              <Grid key={product.id} size={{ xs: 12, sm: 6, md: 3 }}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </Box>
  );
}
