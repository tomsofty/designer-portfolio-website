-- Создание таблицы для хранения контактов клиентов
CREATE TABLE IF NOT EXISTS clients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Создание индекса для быстрого поиска по email
CREATE INDEX idx_clients_email ON clients(email);

-- Создание индекса для сортировки по дате
CREATE INDEX idx_clients_created_at ON clients(created_at DESC);