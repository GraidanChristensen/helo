CREATE TABLE users (id SERIAL PRIMARY KEY, is_admin CHAR, username VARCHAR(50), password TEXT)

INSERT INTO users (username, password)
VALUES ('graidan', 'gg')