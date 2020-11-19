CREATE TABLE users (id SERIAL PRIMARY KEY, is_admin CHAR, username VARCHAR(50), password TEXT)

CREATE TABLE posts (id SERIAL PRIMARY KEY, title VARCHAR(40), content VARCHAR(280), postPicture VARCHAR(200), user_id INT);

INSERT INTO posts(title, content, postPicture, user_id)
VALUES('Handsome Squid', 'What a nice looking fella', 'https://i.kym-cdn.com/entries/icons/facebook/000/003/047/omg.jpg',19);

INSERT INTO posts(title, content, postPicture, user_id)
VALUES('Hash', 'A bit frightening', 'https://images-na.ssl-images-amazon.com/images/I/41VQhcp8qLL._AC_.jpg',19);

INSERT INTO posts(title, content, postPicture, user_id)
VALUES('Pinhead', 'Who you calling pin head?', 'https://static.wikia.nocookie.net/spongebob/images/7/78/Survival_of_the_Idiots_082.png/revision/latest?cb=20191128212016',20);

