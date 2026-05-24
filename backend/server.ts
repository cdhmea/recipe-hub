import 'dotenv/config'
import fastify from 'fastify'
import { Pool } from 'pg'

const app = fastify()
const port = 3000

const pool = new Pool({
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME
})

interface Recipe {
	id: number
	dish: string
	title: string
	description: string
	ingredients: string
	imageUrl: string
}

app.get('/api/recipes', async (_req, res) => {
	try {
		const result = await pool.query('SELECT * FROM recipes')
		const formatted = result.rows.map(row => ({
			id: row.id,
			dish: row.dish,
			title: row.title,
			description: row.description,
			ingredients: row.ingredients,
			imageUrl: row.image_url
		}))
		res.send(formatted)
	} catch (e) {
		console.log(e)
	}
})

app.post('/api/recipes', async req => {
	try {
		const { dish, title, description, ingredients, imageUrl } =
			req.body as Recipe
		await pool.query(
			'INSERT INTO recipes (dish, title, description, ingredients, image_url) VALUES ($1, $2, $3, $4, $5)',
			[dish, title, description, ingredients, imageUrl]
		)
	} catch (e) {
		console.log(e)
	}
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
