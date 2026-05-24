import fastifyCookie from '@fastify/cookie'
import crypto from 'crypto'
import 'dotenv/config'
import fastify from 'fastify'
import { Pool } from 'pg'

const app = fastify()
const port = 3000

app.register(fastifyCookie, {
	secret: 'super-secret'
})

const sessions: { [token: string]: string } = {}

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

interface Auth {
	username: string
	password: string
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
		const token = req.cookies.session_id

		if (!token || !sessions[token]) {
			return
		}

		const username = sessions[token]
		const userResult = await pool.query(
			'SELECT id FROM users WHERE username = $1',
			[username]
		)

		if (userResult.rows.length === 0) {
			return
		}

		const userId = userResult.rows[0].id
		const { dish, title, description, ingredients, imageUrl } =
			req.body as Recipe

		await pool.query(
			'INSERT INTO recipes (dish, title, description, ingredients, image_url, user_id) VALUES ($1, $2, $3, $4, $5, $6)',
			[dish, title, description, ingredients, imageUrl, userId]
		)

		return
	} catch (e) {
		console.log(e)
		return
	}
})

app.post('/api/register', async (req, res) => {
	try {
		const { username, password } = req.body as Auth

		if (!username || !password) {
			return res.status(400).send({ message: 'Логин и пароль обязательны' })
		}

		const userCheck = await pool.query(
			'SELECT * FROM users WHERE username = $1',
			[username]
		)
		if (userCheck.rows.length > 0) {
			return res.status(400).send({ message: 'Этот логин уже занят' })
		}

		await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [
			username,
			password
		])

		return res.send({ message: 'Успешная регистрация' })
	} catch (e) {
		console.error(e)
		return res.status(500).send({ message: 'Ошибка сервера при регистрации' })
	}
})

app.post('/api/login', async (req, res) => {
	try {
		const { username, password } = req.body as Auth

		if (!username || !password) {
			return res.status(400).send({ message: 'Заполните все поля' })
		}

		const result = await pool.query('SELECT * FROM users WHERE username = $1', [
			username
		])

		if (result.rows.length === 0 || result.rows[0].password !== password) {
			return res.status(400).send({ message: 'Неверный логин или пароль' })
		}

		const sessionToken = 'sess_' + crypto.randomBytes(16).toString('hex')
		sessions[sessionToken] = username
		res.setCookie('session_id', sessionToken, {
			path: '/',
			httpOnly: true,
			maxAge: 86400
		})

		return res.send({ username })
	} catch (e) {
		console.error(e)
		return res.status(500).send({ message: 'Ошибка сервера при входе' })
	}
})

app.post('/api/logout', async (req, res) => {
	try {
		const token = req.cookies.session_id

		if (token) {
			delete sessions[token]
		}

		res.setCookie('session_id', '', {
			path: '/',
			maxAge: 0
		})

		return
	} catch (e) {
		console.error(e)
		res.status(500)
		return { message: 'Ошибка при выходе на сервере' }
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
