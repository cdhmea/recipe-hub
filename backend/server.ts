import fastify from 'fastify'

const app = fastify()
const port = 3000

interface Recipe {
	dish: string
	title: string
	description: string
	ingredients: string
	imageUrl: string
}

const recipes: Recipe[] = [
	{
		dish: 'Паста Карбонара',
		title: 'Для настоящих мужиков',
		ingredients: 'Спагетти - 1.5кг\nБекон - 3кг',
		description: '1. Сварить пасту. 2. Съесть пасту...',
		imageUrl:
			'https://yastatic.net/naydex/yandex-search/8HdvKO638/533cf44Ev/XSWbhv721he1UpqLaHM5bJMdUtBXvJ3reAJRnWiLZIyjgfadrWUBwV9m15hGC6cmLqKM0hrinPPs-3BTgIL0MwFpKt72j5Mq_EPXgmB_KUjaOSKZW_yp3nQyCNRt213kTgg3VGT5tQy6mzp1f27SV3LK6d5LXmg'
	},
	{
		dish: 'Пельмени',
		title: 'Сочные, сливочные',
		ingredients:
			'Молоко - 250 мл\nЯйцо - 1 шт.\nРастительное масло - 1 ст.л.\nСоль - 1 ч.л.\nМука - 500-550 г.',
		description:
			'1. В миску высыпать муку, добавить яйцо, масло и соль. Перемешать. 2. Влить молоко и замесить тесто. Количество молока может варьироваться в зависимости от качества муки. 3. Сформировать из теста шар, накрыть пищевой плёнкой и оставить на столе на 40–45 минут для «созревания».',
		imageUrl:
			'https://img.povar.ru/uploads/1b/13/ff/4c/pelmeni_iz_baranini-883366.jpg'
	}
]

app.get('/api/recipes', async () => {
	return recipes
})

app.post('/api/recipes', async req => {
	const newRecipe = req.body as Recipe
	recipes.push(newRecipe)
})

const start = async () => {
	try {
		await app.listen({ port })
		console.log(`бек запущен`)
	} catch (e) {
		console.log(e)
	}
}

start()
