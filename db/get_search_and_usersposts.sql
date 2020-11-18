SELECT p.title, u.username, u.picture
FROM posts p
JOIN users u ON p.user_id = u.id
WHERE title LIKE '%' || $1 || '%' ;