-- Migration script to add missing columns to users table
-- Run this script to update your existing database

-- Add address column if it doesn't exist
ALTER TABLE users ADD COLUMN IF NOT EXISTS address TEXT;

-- Add date_of_birth column if it doesn't exist
ALTER TABLE users ADD COLUMN IF NOT EXISTS date_of_birth DATE;

-- Verify the changes
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'users' 
ORDER BY ordinal_position; 