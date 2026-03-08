"use client";

import React, { useState } from "react";
import {
    Box,
    Typography,
    Divider,
    Button,
    Stack,
    TextField,
    MenuItem,
} from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import PersonIcon from "@mui/icons-material/Person";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import InfoIcon from "@mui/icons-material/Info";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/layouts/dashboard/DashboardLayout";

export default function CustomerAddPage() {
    const router = useRouter();

    const handleBack = () => {
        router.push("/dashboard/customers");
    };

    const handleCreateCustomer = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock save action
        console.log("Customer saved successfully");
        router.push("/dashboard/customers");
    };

    return (
        <DashboardLayout>
            <Box
                display="flex"
                flexDirection="column"
                height="100%"
                sx={{
                    mt: 1,
                    mb: 1,
                    borderRadius: 5,
                    bgcolor: "#ffffffff",
                    position: "relative",
                    minHeight: "80vh",
                }}
            >
                {/* Page Content */}
                <Box
                    sx={{
                        flexGrow: 1,
                        overflowY: "auto",
                        bgcolor: "#ffffffff",
                        borderRadius: 2,
                        mx: 3,
                        border: "1px solid #5A6EB5",
                        mb: 5,
                        pb: 3,
                    }}
                >
                    <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{
                            backgroundColor: "#5A6EB5",
                            py: 1,
                        }}
                    >
                        <Typography variant="h6" sx={{ ml: 3, color: "white" }}>
                            Add Customer
                        </Typography>
                        <Button
                            size="small"
                            onClick={handleBack}
                            variant="contained"
                            startIcon={<KeyboardReturnIcon />}
                            sx={{
                                px: 4,
                                height: 40,
                                textTransform: "none",
                                mr: 3,
                                fontSize: 15,
                                backgroundColor: "#5A6EB5",
                                border: "none",
                                boxShadow: "none",
                                "&:hover": {
                                    backgroundColor: "#4a5a9e",
                                    border: "none",
                                    boxShadow: "none",
                                },
                            }}
                        >
                            Back
                        </Button>
                    </Box>

                    {/* Form */}
                    <form onSubmit={handleCreateCustomer}>
                        <Box p={3}>
                            <Typography
                                fontWeight={600}
                                sx={{
                                    color: "#001251",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                }}
                                mb={1}
                            >
                                <PersonIcon fontSize="medium" />
                                Basic Information
                            </Typography>
                            <Divider sx={{ mb: 4 }} />
                            {/* Form Fields */}
                            <Box
                                mb={4}
                                rowGap={3}
                                columnGap={2}
                                display="grid"
                                gridTemplateColumns={{
                                    xs: "repeat(1, 1fr)",
                                    sm: "repeat(3, 1fr)",
                                }}
                            >
                                <TextField select label="Base *" fullWidth size="small">
                                    <MenuItem value="IND">Individual</MenuItem>
                                    <MenuItem value="CORP">Corporate</MenuItem>
                                </TextField>
                                <TextField select label="Type *" fullWidth size="small">
                                    <MenuItem value="type1">Standard</MenuItem>
                                    <MenuItem value="type2">Premium</MenuItem>
                                </TextField>
                                <TextField select label="Sub Type" fullWidth size="small">
                                    <MenuItem value="subtype1">Retail</MenuItem>
                                    <MenuItem value="subtype2">Wholesale</MenuItem>
                                </TextField>
                            </Box>

                            <Typography
                                fontWeight={600}
                                sx={{
                                    color: "#001251",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                }}
                                mb={1}
                            >
                                <ContactEmergencyIcon fontSize="medium" />
                                Identity Information
                            </Typography>
                            <Divider sx={{ mb: 4 }} />
                            <Box
                                mb={4}
                                rowGap={3}
                                columnGap={2}
                                display="grid"
                                gridTemplateColumns={{
                                    xs: "repeat(1, 1fr)",
                                    sm: "repeat(3, 1fr)",
                                }}
                            >
                                <TextField select label="Title *" fullWidth size="small">
                                    <MenuItem value="mr">Mr.</MenuItem>
                                    <MenuItem value="mrs">Mrs.</MenuItem>
                                    <MenuItem value="ms">Ms.</MenuItem>
                                </TextField>

                                <TextField label="Full Name *" fullWidth size="small" />

                                <TextField
                                    label="Date of Birth *"
                                    type="date"
                                    fullWidth
                                    size="small"
                                    InputLabelProps={{ shrink: true }}
                                />

                                <TextField select label="Nationality *" fullWidth size="small">
                                    <MenuItem value="us">United States</MenuItem>
                                    <MenuItem value="uk">United Kingdom</MenuItem>
                                    <MenuItem value="lk">Sri Lanka</MenuItem>
                                </TextField>

                                <TextField select label="Gender *" fullWidth size="small">
                                    <MenuItem value="male">Male</MenuItem>
                                    <MenuItem value="female">Female</MenuItem>
                                </TextField>

                                <TextField label="Occupation" fullWidth size="small" />
                            </Box>

                            <Typography
                                fontWeight={600}
                                sx={{
                                    color: "#001251",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                }}
                                mb={1}
                            >
                                <RecentActorsIcon fontSize="medium" />
                                Contact & Identification
                            </Typography>
                            <Divider sx={{ mb: 4 }} />
                            <Box
                                mb={4}
                                rowGap={3}
                                columnGap={2}
                                display="grid"
                                gridTemplateColumns={{
                                    xs: "repeat(1, 1fr)",
                                    sm: "repeat(3, 1fr)",
                                }}
                            >
                                <TextField label="Email *" type="email" fullWidth size="small" />
                                <TextField label="Phone Number *" type="tel" fullWidth size="small" />
                                <TextField label="TIN (Tax ID) *" fullWidth size="small" />
                                <TextField select label="Secondary ID Type" fullWidth size="small">
                                    <MenuItem value="passport">Passport</MenuItem>
                                    <MenuItem value="driverLicense">Driver's License</MenuItem>
                                </TextField>
                                <TextField label="Secondary ID Value" fullWidth size="small" />
                            </Box>

                            <Typography
                                fontWeight={600}
                                sx={{
                                    color: "#001251",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                }}
                                mb={1}
                            >
                                <InfoIcon fontSize="medium" />
                                Other
                            </Typography>
                            <Divider sx={{ mb: 4 }} />
                            <TextField
                                label="Remarks"
                                multiline
                                rows={4}
                                fullWidth
                                placeholder="Add Your Remark Here"
                                size="small"
                            />

                            {/* Submit Button */}
                            <Stack direction="row" justifyContent="flex-end" mt={4} mb={2}>
                                <Button
                                    type="button"
                                    onClick={() => router.push("/dashboard/customers")}
                                    variant="outlined"
                                    sx={{ mr: 2, px: 4, height: 40, textTransform: "none" }}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ px: 4, height: 40, textTransform: "none", backgroundColor: "#5A6EB5" }}
                                >
                                    Save
                                </Button>
                            </Stack>
                        </Box>
                    </form>
                </Box>
            </Box>
        </DashboardLayout>
    );
}
