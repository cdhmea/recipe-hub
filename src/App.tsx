import { useEffect, useState } from 'react'
import { getRecipes } from './api.ts'
import RecipeCard from './components/RecipeCard'
import RecipeForm from './components/RecipeForm'
import './index.css'
import type { Recipe } from './types'

function App() {
	const [recipes, setRecipes] = useState<Recipe[]>([])

	const load = () => {
		getRecipes()
			.then(res => setRecipes(res.data))
			.catch(err => console.log(err))
	}

	useEffect(() => {
		load()
	}, [])

	console.log(recipes)
	return (
		<div className="bg-gray-100 min-h-screen p-5">
			<main className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 items-start">
				<div className="w-full md:w-1/3">
					<RecipeForm onRecipeAdded={load} />
				</div>

				<div className="w-full md:w-2/3">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						{recipes.map((recipe, index) => (
							<RecipeCard
								key={index}
								{...recipe}
							/>
						))}
					</div>
				</div>
			</main>
		</div>
	)
}

export default App
