CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    dish VARCHAR(100) NOT NULL,
    title VARCHAR(150),
    ingredients TEXT NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT,
    user_id INT REFERENCES users(id) ON DELETE CASCADE NOT NULL
);

INSERT INTO users (id, username, password) VALUES 
(1, 'maksim', '123');

INSERT INTO recipes (id, dish, title, ingredients, description, image_url, user_id) VALUES
(
1,
'Паста Карбонара',
'Для настоящих мужиков',
'Спагетти - 1.5кг
Бекон - 3кг',
'1. Сварить пасту. 2. Съесть пасту...',
'https://images.unsplash.com/photo-1612874742237-6526221588e3',
1
),
(
2,
'Пельмени',
'Сочные, сливочные',
'Молоко - 250 мл
Яйцо - 1 шт.
Мука - 500г',
'1. В миску высыпать муку, добавить яйцо, масло и соль. Перемешать. 2. Влить молоко и замесить тесто. 3. Сформировать из теста шар, накрыть плёнкой и оставить на 40 минут.',
'https://img.povar.ru/uploads/1b/13/ff/4c/pelmeni_iz_baranini-883366.jpg',
1
);

SELECT * FROM recipes WHERE dish = 'Пельмени';

INSERT INTO recipes (dish, title, ingredients, description, image_url, user_id) 
VALUES ('Десерты', 'Кекс', 'Мука, сахар, какао', 'Смешать в кружке и в микроволновку', '', 1);

UPDATE recipes SET title = 'Карбонара для шефа' WHERE id = 1;

DELETE FROM recipes WHERE id = 3;

SELECT r.id, r.title, r.dish, u.username 
FROM recipes r
JOIN users u ON r.user_id = u.id
WHERE u.username = 'maksim';