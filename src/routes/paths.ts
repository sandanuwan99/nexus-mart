export const PATH_DASHBOARD = {
  root: '/dashboard',
  orders: '/dashboard/orders',
  products: '/dashboard/products',
  customers: '/dashboard/customers',
  analytics: '/dashboard/analytics',
  settings: '/dashboard/settings',
};

export const PATH_PAGE = {
  home: '/',
  product: (id: string) => `/product/${id}`,
  cart: '/cart',
  checkout: '/checkout',
};
