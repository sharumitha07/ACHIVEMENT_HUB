CREATE DATABASE IF NOT EXISTS achievement_hub;

USE achievement_hub;

-- =========================
-- USERS
-- =========================

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255),
    role ENUM('STUDENT', 'STAFF', 'ADMIN') NOT NULL DEFAULT 'STUDENT',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================
-- DEPARTMENTS
-- =========================

CREATE TABLE departments (
    department_id INT AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(100) NOT NULL,
    department_code VARCHAR(20) NOT NULL UNIQUE,
    is_active BOOLEAN DEFAULT TRUE
);

-- =========================
-- STUDENTS
-- =========================

CREATE TABLE students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL UNIQUE,
    name VARCHAR(150) NOT NULL,
    register_number VARCHAR(50) NOT NULL UNIQUE,
    department_id INT NOT NULL,
    year INT NOT NULL,
    section VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE,

    FOREIGN KEY (department_id)
        REFERENCES departments(department_id)
);

-- =========================
-- STAFF
-- =========================

CREATE TABLE staff (
    staff_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL UNIQUE,
    name VARCHAR(150) NOT NULL,
    department_id INT,
    designation VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE,

    FOREIGN KEY (department_id)
        REFERENCES departments(department_id)
        ON DELETE SET NULL
);

-- =========================
-- ACHIEVEMENT CATEGORIES
-- =========================

CREATE TABLE achievement_categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL UNIQUE,
    is_active BOOLEAN DEFAULT TRUE
);

-- =========================
-- EVENTS
-- =========================

CREATE TABLE events (
    event_id INT AUTO_INCREMENT PRIMARY KEY,
    event_name VARCHAR(255) NOT NULL,
    organizer VARCHAR(255),
    event_level ENUM(
        'COLLEGE',
        'INTER_COLLEGE',
        'DISTRICT',
        'STATE',
        'NATIONAL',
        'INTERNATIONAL'
    ) NOT NULL,
    mode ENUM(
        'OFFLINE',
        'ONLINE',
        'HYBRID'
    ) DEFAULT 'OFFLINE',
    event_date DATE
);

-- =========================
-- POSITIONS / ACHIEVEMENTS
-- =========================

CREATE TABLE positions (
    position_id INT AUTO_INCREMENT PRIMARY KEY,
    position_name VARCHAR(100) NOT NULL UNIQUE,
    display_order INT DEFAULT 0
);

-- =========================
-- ACHIEVEMENTS
-- =========================

CREATE TABLE achievements (
    achievement_id INT AUTO_INCREMENT PRIMARY KEY,

    student_id INT NOT NULL,
    event_id INT NOT NULL,
    category_id INT NOT NULL,
    position_id INT NOT NULL,

    project_title VARCHAR(255),
    project_description TEXT,

    student_role VARCHAR(100),
    participation_type ENUM(
        'INDIVIDUAL',
        'TEAM'
    ) DEFAULT 'INDIVIDUAL',

    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    verification_status ENUM(
        'PENDING',
        'VERIFIED',
        'REJECTED'
    ) DEFAULT 'PENDING',

    verified_by INT NULL,
    verified_at TIMESTAMP NULL,
    verification_remarks TEXT,

    FOREIGN KEY (student_id)
        REFERENCES students(student_id)
        ON DELETE CASCADE,

    FOREIGN KEY (event_id)
        REFERENCES events(event_id),

    FOREIGN KEY (category_id)
        REFERENCES achievement_categories(category_id),

    FOREIGN KEY (position_id)
        REFERENCES positions(position_id),

    FOREIGN KEY (verified_by)
        REFERENCES staff(staff_id)
        ON DELETE SET NULL
);

-- =========================
-- CERTIFICATES
-- =========================

CREATE TABLE certificates (
    certificate_id INT AUTO_INCREMENT PRIMARY KEY,
    achievement_id INT NOT NULL,
    file_name VARCHAR(255) NOT NULL,
    file_path VARCHAR(500) NOT NULL,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (achievement_id)
        REFERENCES achievements(achievement_id)
        ON DELETE CASCADE
);