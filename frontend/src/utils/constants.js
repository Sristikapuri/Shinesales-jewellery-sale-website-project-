// API Configuration
export const API_BASE_URL = 'http://localhost:8080/api';

// Theme Colors
export const THEME_COLORS = {
  primary: '#C6A27E',
  secondary: '#B89D79',
  dark: '#3E2C28',
  light: '#FAF8F6',
  cream: '#F9F3EF',
  gold: '#D8C3A5'
};

// User Roles
export const USER_ROLES = {
  ADMIN: 'admin',
  CUSTOMER: 'customer'
};

// Order Status
export const ORDER_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled'
};

// Payment Status
export const PAYMENT_STATUS = {
  PENDING: 'pending',
  PAID: 'paid',
  FAILED: 'failed',
  REFUNDED: 'refunded'
};

// Local Storage Keys
export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER: 'user',
  CART: 'cart'
}; 