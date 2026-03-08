export type OrderStatus = 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';

export interface OrderItem {
    id: string;
    productId: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

export interface OrderCustomer {
    name: string;
    email: string;
    phone: string;
    address: string;
}

export interface OrderData {
    id: string;
    date: string;
    status: OrderStatus;
    totalAmount: number;
    customer: OrderCustomer;
    items: OrderItem[];
}

export const mockOrders: OrderData[] = [
    {
        id: '#ORD-NEX-001',
        date: '2026-03-07T10:30:00Z',
        status: 'Delivered',
        totalAmount: 1450.00,
        customer: {
            name: 'Alex Rivera',
            email: 'alex.r@example.com',
            phone: '+1 555-0100',
            address: '123 Tech Lane, San Jose, CA 95112',
        },
        items: [
            {
                id: 'item-1',
                productId: 'PROD-001',
                name: 'Ceylon Cinnamon Quills (Premium Grade)',
                price: 850.00,
                quantity: 1,
                image: 'https://via.placeholder.com/80?text=Cinnamon',
            },
            {
                id: 'item-2',
                productId: 'PROD-005',
                name: 'Black Pepper Corns',
                price: 300.00,
                quantity: 2,
                image: 'https://via.placeholder.com/80?text=Pepper',
            }
        ],
    },
    {
        id: '#ORD-NEX-002',
        date: '2026-03-08T08:15:00Z',
        status: 'Shipped',
        totalAmount: 349.00,
        customer: {
            name: 'Sarah Chen',
            email: 'sarah.c@example.com',
            phone: '+44 20 7123 4567',
            address: 'High St, London, UK',
        },
        items: [
            {
                id: 'item-3',
                productId: 'PROD-010',
                name: 'Organic Turmeric Powder',
                price: 349.00,
                quantity: 1,
                image: 'https://via.placeholder.com/80?text=Turmeric',
            }
        ],
    },
    {
        id: '#ORD-NEX-003',
        date: '2026-03-08T14:45:00Z',
        status: 'Pending',
        totalAmount: 1250.00,
        customer: {
            name: 'Devin M',
            email: 'devin@example.com',
            phone: '+61 400 000 000',
            address: 'George St, Sydney, NSW, Australia',
        },
        items: [
            {
                id: 'item-4',
                productId: 'PROD-008',
                name: 'Premium Cardamom Pods',
                price: 1250.00,
                quantity: 1,
                image: 'https://via.placeholder.com/80?text=Cardamom',
            }
        ],
    },
    {
        id: '#ORD-NEX-004',
        date: '2026-03-08T15:20:00Z',
        status: 'Cancelled',
        totalAmount: 120.00,
        customer: {
            name: 'Jane Doe',
            email: 'jane@example.com',
            phone: '+1 555-5555',
            address: '100 Main St, Anytown, USA',
        },
        items: [
            {
                id: 'item-5',
                productId: 'PROD-012',
                name: 'Nutmeg Whole',
                price: 120.00,
                quantity: 1,
                image: 'https://via.placeholder.com/80?text=Nutmeg',
            }
        ],
    }
];
