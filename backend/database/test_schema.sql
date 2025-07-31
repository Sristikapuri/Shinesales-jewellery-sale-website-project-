-- Test script to verify database structure
-- Run this to check if all required columns exist

-- Check users table structure
SELECT 
    column_name, 
    data_type, 
    is_nullable,
    column_default
FROM information_schema.columns 
WHERE table_name = 'users' 
ORDER BY ordinal_position;

-- Test insert with all fields
INSERT INTO users (name, email, password, phone, address, date_of_birth, role) 
VALUES (
    'Test User', 
    'test@example.com', 
    '$2b$10$test', 
    '+1234567890', 
    '123 Test St, Test City, TS 12345', 
    '1990-01-01', 
    'customer'
) ON CONFLICT (email) DO NOTHING;

-- Check if insert worked
SELECT id, name, email, phone, address, date_of_birth, role 
FROM users 
WHERE email = 'test@example.com';

-- Clean up test data
DELETE FROM users WHERE email = 'test@example.com'; 