CREATE TABLE users (id SERIAL PRIMARY KEY, is_admin CHAR, username VARCHAR(50), password TEXT)

CREATE TABLE posts (id SERIAL PRIMARY KEY, title VARCHAR(40), content VARCHAR (280), user_id INT)

INSERT INTO posts(title, content, user_id)
VALUES('Handsome Squid', 'What a nice looking fella', 1)