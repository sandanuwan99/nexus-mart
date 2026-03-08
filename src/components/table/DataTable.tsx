/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import formatOptionLabel from "@/utils/formatLabel";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import {
    Box,
    Button,
    FormControl,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
    DatePicker,
    DateValidationError,
    LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useEffect, useRef, useState } from "react";
import { CustomFooter } from "./CustomFooter";

interface FilterOption {
    columnField: string;
    label: string;
    options: string[] | number[];
    isFormatText?: boolean;
}
interface DateFilter {
    columnField: string;
    label: string;
    isDateRange?: boolean;
    width?: number;
}

interface ActionButton {
    label: string;
    icon?: React.ReactNode;
    onClick: () => void;
    variant?: "contained" | "outlined";
    disabled?: boolean;
}

interface DataTableProps {
    data: unknown[];
    columns: GridColDef[];
    rowCount: number;
    page: number;
    pageSize: number;
    rowsPerPageOptions?: number[];
    isSelectionEnabled?: boolean;
    isSearchEnabled?: boolean;
    isRowSelectionOnClick?: boolean;
    filterOptions?: FilterOption[];
    dateFilters?: DateFilter[];
    searchWidth?: string;
    actionButtons?: ActionButton[];
    extraLables?: string[];
    columnHeaderColor?: string;
    titleHeaderColor?: string;
    columnSeparatorColor?: string;
    filterBoxWidth?: string;
    felxGrowFilterBox?: number;
    justifyContentFilterBox?: string;
    onPaginationChange: (model: { page: number; pageSize: number }) => void;
    onFilterChange?: (filters: Record<string, string>) => void;
    setSelectedRows?: React.Dispatch<React.SetStateAction<unknown[]>>;
    setSingleSelectedRow?: React.Dispatch<React.SetStateAction<unknown | null>>;
    boldLastRow?: boolean;
    isAutoHeight?: boolean;
    tableOffsetPx?: number;
    rowSelectionModel?: {
        type: "include" | "exclude";
        ids: Set<string | number>;
    };
}
export default function DataTable({
    data,
    columns,
    rowCount,
    page,
    pageSize,
    filterOptions = [],
    dateFilters = [],
    isSelectionEnabled = false,
    isSearchEnabled = false,
    isRowSelectionOnClick = false,
    onPaginationChange,
    setSelectedRows,
    onFilterChange,
    searchWidth,
    actionButtons = [],
    extraLables = [],
    rowsPerPageOptions = [5, 10, 15, 100],
    columnHeaderColor,
    titleHeaderColor,
    columnSeparatorColor,
    filterBoxWidth,
    felxGrowFilterBox,
    justifyContentFilterBox,
    setSingleSelectedRow,
    boldLastRow = false,
    isAutoHeight = false,
    tableOffsetPx = 210,
    rowSelectionModel,
}: DataTableProps) {
    const [filteredData, setFilteredData] = useState(data);
    const [selectedFilters, setSelectedFilters] = useState<
        Record<string, string>
    >({});
    const [dateFilterValues, setDateFilterValues] = useState<
        Record<
            string,
            { start?: Date | null; end?: Date | null; single?: Date | null }
        >
    >({});
    const [searchQuery, setSearchQuery] = useState("");
    const [dateErrors, setDateErrors] = useState<Record<string, string>>({});
    const stackRef = useRef<HTMLDivElement>(null);
    const filterRef = useRef<HTMLDivElement>(null);
    const [filtersTakeFullRow, setFiltersTakeFullRow] = useState(false);

    useEffect(() => {
        let newData = [...(data || [])];

        // Global search filter
        if (searchQuery.trim() !== "") {
            const lowered = searchQuery.toLowerCase();
            newData = newData.filter((row) =>
                Object.values(row as Record<string, unknown>).some((value) =>
                    value?.toString().toLowerCase().includes(lowered),
                ),
            );
        }

        // Apply date filters
        if (dateFilters && dateFilters.length > 0) {
            dateFilters.forEach((filter) => {
                const dateValues = dateFilterValues[filter.columnField] || {};
                newData = newData.filter((row) => {
                    const value = (row as Record<string, unknown>)[filter.columnField];
                    const rowDate = new Date(value as string | number | Date);

                    if (filter.isDateRange) {
                        const { start, end } = dateValues;

                        const normalizedStart = start
                            ? new Date(start.setHours(0, 0, 0, 0))
                            : null;
                        const normalizedEnd = end
                            ? new Date(end.setHours(23, 59, 59, 999))
                            : null;

                        return (
                            (!normalizedStart || rowDate >= normalizedStart) &&
                            (!normalizedEnd || rowDate <= normalizedEnd)
                        );
                    } else {
                        const { single } = dateValues;
                        return (
                            !single ||
                            rowDate.toDateString() === new Date(single).toDateString()
                        );
                    }
                });
            });
        }

        setFilteredData(newData);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        data,
        searchQuery,
        selectedFilters,
        dateFilterValues,
        filterOptions?.length,
        dateFilters?.length,
    ]);

    useEffect(() => {
        const stackEl = stackRef.current;
        const filterEl = filterRef.current;
        if (!stackEl || !filterEl) return;

        const observer = new ResizeObserver(() => {
            const stackWidth = stackEl.clientWidth;
            const filterWidth = filterEl.scrollWidth; // full content width

            // If filter width exceeds available width → it wraps
            setFiltersTakeFullRow(filterWidth > stackWidth * 0.8); // 80% heuristic
        });

        observer.observe(stackEl);
        observer.observe(filterEl);

        return () => observer.disconnect();
    }, []);

    const handleDateChange = (
        column: string,
        value: Date | null,
        type: "start" | "end" | "single",
    ) => {
        setDateFilterValues((prev) => ({
            ...prev,
            [column]: {
                ...prev[column],
                [type]: value,
            },
        }));
        if (type === "end" || type === "start") {
            const start = type === "start" ? value : dateFilterValues[column]?.start;
            const end = type === "end" ? value : dateFilterValues[column]?.end;

            if (start && end && end < start) {
                setDateErrors((prev) => ({
                    ...prev,
                    [column]: `"To" date cannot be earlier than "From" date`,
                }));
            } else {
                setDateErrors((prev) => ({
                    ...prev,
                    [column]: "",
                }));
            }
        }
    };

    const resetFilters = () => {
        setSelectedFilters({});
        setDateFilterValues({});
        setFilteredData(data);
        setSearchQuery("");
        setDateErrors({});
        const newFilters: Record<string, string> = {};
        setSelectedFilters(newFilters);
        onFilterChange?.(newFilters);
    };

    return (
        <>
            <Stack
                ref={stackRef}
                direction="row"
                spacing={2}
                gap={1.5}
                m={2}
                alignItems="flex-start"
                flexWrap="wrap"
                justifyContent={"space-between"}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "nowrap",
                        gap: 1.5,
                        justifyContent: justifyContentFilterBox
                            ? justifyContentFilterBox
                            : "space-between",
                        width: filterBoxWidth ? filterBoxWidth : "50%",
                        flexGrow: felxGrowFilterBox ? felxGrowFilterBox : 0,
                    }}
                    ref={filterRef}
                >
                    {/* search */}
                    {isSearchEnabled && (
                        <TextField
                            size="small"
                            variant="outlined"
                            label="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            sx={{
                                width: searchWidth || 250,
                                borderRadius: 2,
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: 2,
                                    "& fieldset": { borderColor: "#d1d5db" },
                                    "&:hover fieldset": { borderColor: "#6E799B" },
                                    "&.Mui-focused fieldset": { borderColor: "#6E799B" },
                                },
                                "& .MuiInputLabel-root": {
                                    color: "#6b7280",
                                    fontWeight: 500,
                                },
                                "& .MuiInputBase-input": {
                                    padding: "8px 12px",
                                },
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon sx={{ color: "#6b7280" }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    )}

                    {/* filter options */}
                    {filterOptions.map((filter) => (
                        <FormControl
                            key={filter.columnField}
                            size="small"
                            sx={{
                                minWidth: 150,
                                "& .MuiInputLabel-root": {
                                    color: "#6b7280",
                                    fontWeight: 500,
                                },
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: 2,
                                    "& fieldset": { borderColor: "#d1d5db" },
                                    "&:hover fieldset": { borderColor: "#6E799B" },
                                    "&.Mui-focused fieldset": { borderColor: "#6E799B" },
                                },
                            }}
                        >
                            <InputLabel>{filter.label}</InputLabel>
                            <Select
                                value={selectedFilters[filter.columnField] || "All"}
                                onChange={(e) => {
                                    const newFilters = {
                                        ...selectedFilters,
                                        [filter.columnField]:
                                            e.target.value === "All" ? "" : e.target.value,
                                    };
                                    setSelectedFilters(newFilters);
                                    onFilterChange?.(newFilters);
                                }}
                                label={filter.label}
                            >
                                <MenuItem value="All">All</MenuItem>
                                {filter.options.map((opt) => (
                                    <MenuItem key={opt} value={opt}>
                                        {filter.isFormatText ? formatOptionLabel(opt) : opt}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    ))}

                    {/* date filters */}
                    {dateFilters.map((filter) => (
                        <LocalizationProvider
                            key={filter.columnField}
                            dateAdapter={AdapterDateFns}
                        >
                            <Stack direction="row" spacing={2}>
                                {filter.isDateRange ? (
                                    <>
                                        <DatePicker
                                            label={`${filter.label} From`}
                                            value={
                                                dateFilterValues[filter.columnField]?.start || null
                                            }
                                            onChange={(newDate) =>
                                                handleDateChange(
                                                    filter.columnField,
                                                    newDate as any,
                                                    "start",
                                                )
                                            }
                                            onError={(reason: DateValidationError) => {
                                                if (reason === "invalidDate") {
                                                    setDateErrors((prev) => ({
                                                        ...prev,
                                                        [filter.columnField]: "Invalid start date",
                                                    }));
                                                }
                                            }}
                                            slotProps={{
                                                textField: {
                                                    size: "small",
                                                    error: !!dateErrors[filter.columnField],
                                                    helperText: dateErrors[filter.columnField],
                                                    sx: {
                                                        width: filter?.width || 190,
                                                        "& .MuiOutlinedInput-root": {
                                                            borderRadius: 2,
                                                            "& fieldset": { borderColor: "#d1d5db" },
                                                            "&:hover fieldset": { borderColor: "#6E799B" },
                                                            "&.Mui-focused fieldset": {
                                                                borderColor: "#6E799B",
                                                            },
                                                        },
                                                        "& .MuiInputLabel-root": {
                                                            color: "#6b7280",
                                                            fontWeight: 500,
                                                        },
                                                        "& .MuiInputBase-input": {
                                                            padding: "8px 12px",
                                                        },
                                                    },
                                                },
                                            }}
                                        />
                                        <DatePicker
                                            label={`${filter.label} To`}
                                            value={dateFilterValues[filter.columnField]?.end || null}
                                            onChange={(newDate) =>
                                                handleDateChange(
                                                    filter.columnField,
                                                    newDate as any,
                                                    "end",
                                                )
                                            }
                                            slotProps={{
                                                textField: {
                                                    size: "small",
                                                    sx: {
                                                        width: filter?.width || 190,
                                                        "& .MuiOutlinedInput-root": {
                                                            borderRadius: 2,
                                                            "& fieldset": { borderColor: "#d1d5db" },
                                                            "&:hover fieldset": { borderColor: "#6E799B" },
                                                            "&.Mui-focused fieldset": {
                                                                borderColor: "#6E799B",
                                                            },
                                                        },
                                                        "& .MuiInputLabel-root": {
                                                            color: "#6b7280",
                                                            fontWeight: 500,
                                                        },
                                                        "& .MuiInputBase-input": {
                                                            padding: "8px 12px",
                                                        },
                                                    },
                                                },
                                            }}
                                        />
                                    </>
                                ) : (
                                    <DatePicker
                                        label={filter.label}
                                        value={dateFilterValues[filter.columnField]?.single || null}
                                        onChange={(newDate) =>
                                            handleDateChange(
                                                filter.columnField,
                                                newDate as any,
                                                "single",
                                            )
                                        }
                                        slotProps={{
                                            textField: {
                                                size: "small",
                                                sx: {
                                                    width: filter?.width || 190,
                                                    "& .MuiOutlinedInput-root": {
                                                        borderRadius: 2,
                                                        "& fieldset": { borderColor: "#d1d5db" },
                                                        "&:hover fieldset": { borderColor: "#6E799B" },
                                                        "&.Mui-focused fieldset": {
                                                            borderColor: "#6E799B",
                                                        },
                                                    },
                                                    "& .MuiInputLabel-root": {
                                                        color: "#6b7280",
                                                        fontWeight: 500,
                                                    },
                                                    "& .MuiInputBase-input": {
                                                        padding: "8px 12px",
                                                    },
                                                },
                                            },
                                        }}
                                    />
                                )}
                            </Stack>
                        </LocalizationProvider>
                    ))}

                    {/* reset */}
                    {(dateFilters.length > 0 || filterOptions.length > 0) && (
                        <Button
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                            onClick={resetFilters}
                            sx={{ borderRadius: 2, height: 40, textTransform: "none" }}
                        >
                            Reset
                        </Button>
                    )}
                </Box>

                {/* Action Buttons */}
                {(actionButtons.length > 0 || extraLables.length > 0) && (
                    <Box
                        sx={{
                            width: filtersTakeFullRow ? "100%" : "auto",
                            display: "flex",
                            gap: 2,
                            flexShrink: 0,
                            flexBasis: "auto",
                            order: filtersTakeFullRow ? -1 : 0,
                            ml: "auto",
                            justifyContent: "flex-end",
                        }}
                    >
                        {extraLables.length > 0 &&
                            extraLables.map((label: string, index: number) => (
                                <Box
                                    key={index}
                                    sx={{
                                        p: 1,
                                        border: "1.5px solid #2684FC33",
                                        borderRadius: 2,
                                        backgroundColor: "#2643FC0D",
                                    }}
                                >
                                    {label}
                                </Box>
                            ))}
                        {actionButtons.map((btn, index) => (
                            // @ts-ignore
                            <Button
                                key={index}
                                startIcon={btn.icon}
                                variant={btn.variant ?? "outlined"}
                                onClick={btn.onClick}
                                disabled={btn.disabled}
                                sx={{
                                    padding: "6px 16px",
                                    borderRadius: 2,
                                    fontWeight: 800,
                                    ml: 2,
                                    borderWidth: 2,
                                }}
                            >
                                {btn.label}
                            </Button>
                        ))}
                    </Box>
                )}
            </Stack>
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    maxHeight: `calc(100vh - ${tableOffsetPx}px)`,
                    overflow: "auto",
                }}
            >
                {/* @ts-ignore */}
                <DataGrid
                    sx={{
                        "& .MuiDataGrid-columnHeaders": {
                            backgroundColor: columnHeaderColor
                                ? columnHeaderColor
                                : "#5A6EB5 !important",
                            color: "#fff",
                            fontWeight: "bold",
                        },
                        "& .MuiDataGrid-columnHeader": {
                            backgroundColor: columnHeaderColor
                                ? columnHeaderColor
                                : "#5A6EB5 !important",
                        },
                        "& .MuiDataGrid-columnHeaderTitle": {
                            color: titleHeaderColor
                                ? titleHeaderColor
                                : "#ffffffff !important",
                        },
                        "& .MuiDataGrid-columnSeparator": {
                            color: columnSeparatorColor
                                ? columnSeparatorColor
                                : "#F4F6F9 !important",
                        },
                        "& .MuiDataGrid-row.total-row": {
                            fontWeight: boldLastRow ? "bold" : "normal",
                            color: boldLastRow ? "#000" : "inherit",
                        },
                        "& .MuiDataGrid-main": {
                            overflow: "auto",
                            minHeight: "unset",
                        },
                        ...(isRowSelectionOnClick && {
                            "& .MuiDataGrid-row": {
                                cursor: "pointer",
                                "&:hover": {
                                    backgroundColor: "#f5f5f5",
                                },
                            },
                        }),
                    }}
                    rows={filteredData}
                    getRowId={(row: any) => row.uid || row.id || Math.random().toString()}
                    columns={columns}
                    checkboxSelection={isSelectionEnabled}
                    pagination
                    paginationMode="server"
                    rowCount={rowCount}
                    paginationModel={{
                        page: page > 0 ? page - 1 : 0,
                        pageSize,
                    }}
                    onPaginationModelChange={(model) => {
                        onPaginationChange({
                            page: model.page + 1,
                            pageSize: model.pageSize,
                        });
                    }}
                    pageSizeOptions={rowsPerPageOptions}
                    disableRowSelectionOnClick={isRowSelectionOnClick}
                    slots={{
                        footer: () => <CustomFooter />,
                    }}
                    getRowClassName={(params) => {
                        // @ts-ignore
                        if (
                            boldLastRow &&
                            params.indexRelativeToCurrentPage === filteredData.length - 1
                        ) {
                            return "total-row";
                        }
                        return "";
                    }}
                    {...(rowSelectionModel !== undefined && {
                        rowSelectionModel: rowSelectionModel?.ids ? Array.from(rowSelectionModel.ids) : []
                    })}
                    onRowSelectionModelChange={(model) => {
                        let idArray: (string | number)[] = [];

                        if (Array.isArray(model)) {
                            idArray = model;
                        } else if (model && typeof model === "object" && "ids" in model) {
                            idArray = Array.from(model.ids);
                        }

                        const selected = idArray
                            .map((id) =>
                                filteredData.find(
                                    (row) => (row as Record<string, unknown>).uid === id || (row as Record<string, unknown>).id === id,
                                ),
                            )
                            .filter(Boolean);

                        setSelectedRows?.(selected);
                    }}
                    onRowClick={(params) => {
                        if (!isRowSelectionOnClick) return;

                        const clickedRow = filteredData.find(
                            // @ts-ignore
                            (row) => (row as Record<string, unknown>).uid === params.id || (row as Record<string, unknown>).id === params.id,
                        );
                        if (clickedRow) {
                            setSingleSelectedRow?.(clickedRow);
                        }
                    }}
                />
            </Box>
        </>
    );
}

export const dataGridStyles = (isRowSelectionOnClick?: boolean) => ({
    "& .MuiDataGrid-columnHeaders": {
        borderBottom: "1px solid #e0e0e0",
    },
    "& .MuiDataGrid-columnHeader": {
        backgroundColor: "#6E799B1A !important",
    },
    "& .MuiDataGrid-columnHeaderTitle": {
        fontSize: "0.8rem",
        fontWeight: 600,
        color: "#848DA3",
        whiteSpace: "pre-line",
        lineHeight: 1.2,
    },
    "& .MuiDataGrid-sortIcon": {
        color: "#848DA3",
    },
    ...(isRowSelectionOnClick && {
        "& .MuiDataGrid-row": {
            cursor: "pointer",
            "&:hover": {
                backgroundColor: "#f5f5f5",
            },
        },
    }),
});
