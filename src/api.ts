import axios from 'axios'
import type { Recipe } from '../src/types'

export async function getRecipes() {
	const response = await axios.get<Recipe[]>('/api/recipes')
	return response
}

export async function addRecipes(formData: Recipe) {
	const response = await axios.post('/api/recipes', formData)
	return response
}
