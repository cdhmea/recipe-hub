import axios from 'axios'
import type { Recipe } from './pages/recipe/recipe-type.data'

interface Auth {
	username: string
	password: string
}

export async function getRecipes() {
	const response = await axios.get<Recipe[]>('/api/recipes')
	return response
}

export async function addRecipes(formData: Recipe) {
	const response = await axios.post('/api/recipes', formData)
	return response
}

export async function registerUser(userData: Auth) {
	const response = await axios.post('api/register', userData)
	return response
}

export async function loginUser(userData: Auth) {
	const response = await axios.post('/api/login', userData)
	return response
}
