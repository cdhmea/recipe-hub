import { useEffect, useState } from 'react'
import { getRecipes } from '../api.ts'
import Header from '../components/header/Header.tsx'
import '../index.css'
import ConvertTab from '../pages/convert/ConvertTab.tsx'
import FavoritesTab from '../pages/favorites/FavoritesTab.tsx'
import RecipeCard from '../pages/recipe/RecipeCard.tsx'
import RecipeForm from '../pages/recipe/RecipeForm.tsx'
import type { Recipe } from '../pages/recipe/recipe-type.data.ts'

function App() {
	const [recipes, setRecipes] = useState<Recipe[]>([])
	const [activeTab, setActiveTab] = useState(() => {
		return localStorage.getItem('activeTab') || 'recipes'
	})

	const handleTabChange = (tab: string) => {
		setActiveTab(tab)
		localStorage.setItem('activeTab', tab)
	}

	const load = () => {
		getRecipes()
			.then(res => setRecipes(res.data))
			.catch(err => console.log(err))
	}

	useEffect(() => {
		load()
	}, [])

	return (
		<div className="bg-gray-100 min-h-screen flex flex-col">
			<Header
				activeTab={activeTab}
				setActiveTab={handleTabChange}
			/>
			<main className="max-w-6xl w-full mx-auto p-5">
				{activeTab === 'recipes' && (
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
				)}
				{activeTab === 'converter' && <ConvertTab />}
				{activeTab === 'favorites' && <FavoritesTab />}
			</main>
		</div>
	)
}

export default App
