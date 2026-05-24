CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    dish VARCHAR(100) NOT NULL,
    title VARCHAR(150),
    ingredients TEXT NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT
);


INSERT INTO recipes (id, dish, title, ingredients, description, image_url) VALUES
(
1,
'Паста Карбонара',
'Для настоящих мужиков',
'Спагетти - 1.5кг
Бекон - 3кг',
'1. Сварить пасту. 2. Съесть пасту...',
'https://images.unsplash.com/photo-1612874742237-6526221588e3'
),
(
2,
'Пельмени',
'Сочные, сливочные',
'Молоко - 250 мл
Яйцо - 1 шт.
Мука - 500г',
'1. В миску высыпать муку, добавить яйцо, масло и соль. Перемешать. 2. Влить молоко и замесить тесто. 3. Сформировать из теста шар, накрыть плёнкой и оставить на 40 минут.',
'https://img.povar.ru/uploads/1b/13/ff/4c/pelmeni_iz_baranini-883366.jpg'
);
