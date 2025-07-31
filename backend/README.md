# ShineSales Backend API

This is the backend API for the ShineSales jewellery website built with Node.js, Express, and PostgreSQL.

## Features

### Authentication
- User registration with extended fields (name, email, password, phone, address, date_of_birth)
- User login with JWT token authentication
- Profile management

### Database Schema
- Users table with all required fields
- Products and categories management
- Orders and cart functionality
- Reviews and wishlist support

## API Endpoints

### Auth Routes
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Product Routes
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)

## Database Migration
Run the migration script to add new user fields:
```sql
ALTER TABLE users ADD COLUMN IF NOT EXISTS address TEXT;
ALTER TABLE users ADD COLUMN IF NOT EXISTS date_of_birth DATE;
```

## Environment Variables
- `JWT_SECRET` - Secret key for JWT tokens
- `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME` - Database configuration 