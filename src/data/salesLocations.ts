export interface SalesLocation {
  id: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
  salesCount: number;
}

export const salesLocations: SalesLocation[] = [
  {
    id: '1',
    city: 'Colombo',
    country: 'Sri Lanka',
    lat: 6.9271,
    lng: 79.8612,
    salesCount: 120,
  },
  {
    id: '2',
    city: 'New York',
    country: 'USA',
    lat: 40.7128,
    lng: -74.0060,
    salesCount: 85,
  },
  {
    id: '3',
    city: 'London',
    country: 'UK',
    lat: 51.5074,
    lng: -0.1278,
    salesCount: 70,
  },
  {
    id: '4',
    city: 'Mumbai',
    country: 'India',
    lat: 19.0760,
    lng: 72.8777,
    salesCount: 95,
  },
];
