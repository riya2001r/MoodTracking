CREATE TABLE moods
(
    id        INT AUTO_INCREMENT PRIMARY KEY,
    user_id   VARCHAR(100) NOT NULL,
    mood      VARCHAR(20)  NOT NULL,
    note      TEXT,
    timestamp DATETIME     NOT NULL DEFAULT NOW()
);
