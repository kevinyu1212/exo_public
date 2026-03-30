-- Exo:public Database Schema v1.0
-- 유저 정보 (일반, 비즈니스, 관리자)
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    nickname TEXT,
    role TEXT CHECK (role IN ('user', 'business', 'admin')) DEFAULT 'user',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 개체 및 게시글 정보 (도감 및 분양물 포함)
CREATE TABLE items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    category TEXT NOT NULL, -- 파충류, 절지류 등
    species TEXT,           -- 세부 종 명칭
    title TEXT NOT NULL,
    description TEXT,
    price INTEGER DEFAULT 0,
    status TEXT DEFAULT 'available', -- 분양 중, 예약 중, 완료
    is_journal BOOLEAN DEFAULT FALSE, -- 사육 일기 여부
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
