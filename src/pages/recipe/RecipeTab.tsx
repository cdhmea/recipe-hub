import { useEffect, useState } from 'react'
import { getRecipes } from '../../api.ts'
import RecipeCard from './components/RecipeCard.tsx'
import RecipeForm from './components/RecipeForm.tsx'
import type { Recipe } from './recipe-type.data.ts'

const RecipeTab = () => {
	const [recipes, setRecipes] = useState<Recipe[]>([])
	const load = () => {
		getRecipes()
			.then(res => setRecipes(res.data))
			.catch(err => console.log(err))
	}
	useEffect(() => {
		load()
	}, [])

	return (
		<div className="flex flex-col md:flex-row gap-6 items-start pt-2">
			<div className="w-full md:w-1/3">
				<RecipeForm onRecipeAdded={load} />
			</div>

			<div className="w-full md:w-2/3">
				{recipes.length === 0 ? (
					<div className="text-center p-10 bg-white rounded border border-gray-300 text-gray-500">
						Загрузка рецептов или база данных пуста...
					</div>
				) : (
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						{recipes.map((recipe, index) => (
							<RecipeCard
								key={index}
								{...recipe}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default RecipeTab
