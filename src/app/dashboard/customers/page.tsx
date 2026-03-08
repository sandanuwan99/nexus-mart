"use client";

import React, { useState } from "react";
import { Box, Typography, Paper, Card, CardContent, Avatar, Chip, IconButton, Tooltip } from "@mui/material";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import DataTable from "@/components/table/DataTable";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import { useRouter } from "next/navigation";

// Mock data for customers
const mockCustomers = [
    { id: 1, uid: "CUST-001", name: "Alice Johnson", email: "alice@example.com", phone: "+1 555-0100", status: "Active", joinDate: "2023-01-15", totalOrders: 24, totalSpent: 1450.0 },
    { id: 2, uid: "CUST-002", name: "Bob Smith", email: "bob.smith@example.com", phone: "+1 555-0101", status: "Inactive", joinDate: "2023-02-20", totalOrders: 5, totalSpent: 300.5 },
    { id: 3, uid: "CUST-003", name: "Charlie Davis", email: "charlie.d@example.com", phone: "+1 555-0102", status: "Active", joinDate: "2023-03-10", totalOrders: 12, totalSpent: 850.25 },
    { id: 4, uid: "CUST-004", name: "Diana Prince", email: "diana@amazon.com", phone: "+1 555-0103", status: "Active", joinDate: "2023-04-05", totalOrders: 8, totalSpent: 420.0 },
    { id: 5, uid: "CUST-005", name: "Ethan Hunt", email: "ethan.h@imf.gov", phone: "+1 555-0104", status: "Suspended", joinDate: "2023-05-12", totalOrders: 1, totalSpent: 50.0 },
    { id: 6, uid: "CUST-006", name: "Fiona Gallagher", email: "fiona@example.com", phone: "+1 555-0105", status: "Active", joinDate: "2023-06-18", totalOrders: 19, totalSpent: 1200.75 },
    { id: 7, uid: "CUST-007", name: "George Costanza", email: "george@vandelay.com", phone: "+1 555-0106", status: "Inactive", joinDate: "2023-07-22", totalOrders: 3, totalSpent: 150.0 },
    { id: 8, uid: "CUST-008", name: "Hannah Abbott", email: "hannah@hogwarts.edu", phone: "+1 555-0107", status: "Active", joinDate: "2023-08-30", totalOrders: 7, totalSpent: 510.5 },
    { id: 9, uid: "CUST-009", name: "Ian Malcolm", email: "ian@jurassic.com", phone: "+1 555-0108", status: "Active", joinDate: "2023-09-14", totalOrders: 32, totalSpent: 3500.0 },
    { id: 10, uid: "CUST-010", name: "Julia Roberts", email: "julia@example.com", phone: "+1 555-0109", status: "Active", joinDate: "2023-10-01", totalOrders: 11, totalSpent: 750.0 },
    { id: 11, uid: "CUST-011", name: "Kevin Hart", email: "kevin@example.com", phone: "+1 555-0110", status: "Active", joinDate: "2023-11-11", totalOrders: 14, totalSpent: 900.25 },
    { id: 12, uid: "CUST-012", name: "Liam Neeson", email: "liam@taken.com", phone: "+1 555-0111", status: "Inactive", joinDate: "2023-12-05", totalOrders: 2, totalSpent: 120.0 },
];

export default function CustomersPage() {
    const router = useRouter();
    const [paginationModel, setPaginationModel] = useState({
        page: 1,
        pageSize: 10,
    });

    const columns: GridColDef[] = [
        {
            field: "uid",
            headerName: "Customer ID",
            width: 130,
        },
        {
            field: "name",
            headerName: "Name",
            width: 200,
            renderCell: (params: GridRenderCellParams) => (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, height: "100%" }}>
                    <Avatar sx={{ width: 28, height: 28, bgcolor: "#5A6EB5", fontSize: "0.875rem" }}>
                        {params.row.name.charAt(0)}
                    </Avatar>
                    <Typography variant="body2" fontWeight={500}>
                        {params.row.name}
                    </Typography>
                </Box>
            ),
        },
        {
            field: "email",
            headerName: "Email",
            width: 220,
        },
        {
            field: "phone",
            headerName: "Phone",
            width: 150,
        },
        {
            field: "status",
            headerName: "Status",
            width: 130,
            renderCell: (params: GridRenderCellParams) => {
                let color: "success" | "error" | "default" | "warning" = "default";
                let icon = null;

                if (params.value === "Active") {
                    color = "success";
                    icon = <CheckCircleIcon fontSize="small" />;
                } else if (params.value === "Inactive") {
                    color = "warning";
                } else if (params.value === "Suspended") {
                    color = "error";
                    icon = <CancelIcon fontSize="small" />;
                }

                return (
                    <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
                        <Chip
                            label={params.value}
                            color={color}
                            size="small"
                            icon={icon || undefined}
                            sx={{ fontWeight: 600, borderRadius: "6px" }}
                            variant="outlined"
                        />
                    </Box>
                );
            },
        },
        {
            field: "totalOrders",
            headerName: "Orders",
            width: 100,
            type: "number",
            align: "center",
            headerAlign: "center",
        },
        {
            field: "totalSpent",
            headerName: "Total Spent",
            width: 130,
            type: "number",
            renderCell: (params: GridRenderCellParams) => (
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    ${params.value.toFixed(2)}
                </Typography>
            ),
        },
        {
            field: "joinDate",
            headerName: "Joined On",
            width: 130,
        },
        {
            field: "actions",
            headerName: "Actions",
            sortable: false,
            align: "center",
            headerAlign: "center",
            width: 120,
            renderCell: (params: GridRenderCellParams) => {
                const handleView = () => {
                    router.push(`/dashboard/customers/view/${params.row.uid}`);
                };

                const handleEdit = () => {
                    router.push(`/dashboard/customers/edit/${params.row.uid}`);
                };

                return (
                    <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
                        <Tooltip title="View">
                            <IconButton onClick={handleView} size="small">
                                <VisibilityIcon fontSize="small" sx={{ color: "#00B8D9" }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Edit">
                            <IconButton onClick={handleEdit} size="small">
                                <EditIcon fontSize="small" sx={{ color: "#212B36" }} />
                            </IconButton>
                        </Tooltip>
                    </Box>
                );
            },
        },
    ];

    const handlePaginationChange = (model: { page: number; pageSize: number }) => {
        setPaginationModel(model);
    };

    return (
        <DashboardLayout>
            <Box sx={{ p: 3, backgroundColor: "#F4F6F9", minHeight: "100vh" }}>
                {/* Page Header */}
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
                    <Box>
                        <Typography variant="h4" fontWeight="bold" color="#1A202C">
                            Customers
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Manage your customers and view their purchase history.
                        </Typography>
                    </Box>
                </Box>

                {/* KPI Cards */}
                <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" }, gap: 3, mb: 4 }}>
                    <Box>
                        <Card elevation={0} sx={{ borderRadius: 3, border: "1px solid #E2E8F0" }}>
                            <CardContent>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Box>
                                        <Typography variant="body2" color="text.secondary" fontWeight={600} mb={1}>
                                            Total Customers
                                        </Typography>
                                        <Typography variant="h4" fontWeight="bold" color="#1A202C">
                                            2,845
                                        </Typography>
                                    </Box>
                                    <Avatar sx={{ bgcolor: "#E0E7FF", color: "#4F46E5", width: 48, height: 48 }}>
                                        <PeopleAltIcon />
                                    </Avatar>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box>
                        <Card elevation={0} sx={{ borderRadius: 3, border: "1px solid #E2E8F0" }}>
                            <CardContent>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Box>
                                        <Typography variant="body2" color="text.secondary" fontWeight={600} mb={1}>
                                            New This Week
                                        </Typography>
                                        <Typography variant="h4" fontWeight="bold" color="#1A202C">
                                            124
                                        </Typography>
                                    </Box>
                                    <Avatar sx={{ bgcolor: "#DCFCE7", color: "#16A34A", width: 48, height: 48 }}>
                                        <PersonAddIcon />
                                    </Avatar>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box>
                        <Card elevation={0} sx={{ borderRadius: 3, border: "1px solid #E2E8F0" }}>
                            <CardContent>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Box>
                                        <Typography variant="body2" color="text.secondary" fontWeight={600} mb={1}>
                                            Active Members
                                        </Typography>
                                        <Typography variant="h4" fontWeight="bold" color="#1A202C">
                                            1,945
                                        </Typography>
                                    </Box>
                                    <Avatar sx={{ bgcolor: "#FEF9C3", color: "#CA8A04", width: 48, height: 48 }}>
                                        <HowToRegIcon />
                                    </Avatar>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                </Box>

                {/* DataTable Section */}
                <Paper elevation={0} sx={{ borderRadius: 3, border: "1px solid #E2E8F0", overflow: "hidden" }}>
                    <DataTable
                        data={mockCustomers}
                        columns={columns}
                        rowCount={mockCustomers.length}
                        page={paginationModel.page}
                        pageSize={paginationModel.pageSize}
                        onPaginationChange={handlePaginationChange}
                        isSearchEnabled={true}
                        searchWidth="300px"
                        isSelectionEnabled={true}
                        isRowSelectionOnClick={true}
                        filterOptions={[
                            {
                                columnField: "status",
                                label: "Status",
                                options: ["Active", "Inactive", "Suspended"],
                            },
                        ]}
                        actionButtons={[
                            {
                                label: "Export",
                                onClick: () => console.log("Exporting..."),
                                variant: "outlined",
                            },
                            {
                                label: "Add Customer",
                                onClick: () => router.push("/dashboard/customers/add"),
                                variant: "contained",
                                icon: <AddIcon />,
                            },
                        ]}
                    />
                </Paper>
            </Box>
        </DashboardLayout>
    );
}
