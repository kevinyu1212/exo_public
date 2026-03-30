-- Exo:public Database Schema v1.0
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    nickname TEXT,
    role TEXT CHECK (role IN ('user', 'business', 'admin')) DEFAULT 'user',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    category TEXT NOT NULL,
    species TEXT,
    title TEXT NOT NULL,
    description TEXT,
    price INTEGER DEFAULT 0,
    status TEXT DEFAULT 'available',
    is_journal BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
