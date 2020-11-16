CREATE TABLE users (id SERIAL PRIMARY KEY, is_admin CHAR, username VARCHAR(50), password TEXT)

CREATE TABLE posts (id SERIAL PRIMARY KEY, title VARCHAR(40), author VARCHAR(40), authors_picture VARCHAR(200), content VARCHAR(2000));

