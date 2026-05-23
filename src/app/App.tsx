import { useState } from 'react'
import Header from '../components/header/Header.tsx'
import '../index.css'
import ConvertTab from '../pages/convert/ConvertTab.tsx'
import FavoritesTab from '../pages/favorites/FavoritesTab.tsx'
import RecipeTab from '../pages/recipe/RecipeTab.tsx'

function App() {
	const [activeTab, setActiveTab] = useState(() => {
		return localStorage.getItem('activeTab') || 'recipes'
	})

	const handleTabChange = (tab: string) => {
		setActiveTab(tab)
		localStorage.setItem('activeTab', tab)
	}

	return (
		<div className="bg-gray-100 min-h-screen flex flex-col">
			<Header
				activeTab={activeTab}
				setActiveTab={handleTabChange}
			/>
			<main className="max-w-6xl w-full mx-auto p-5">
				{activeTab === 'recipes' && <RecipeTab />}
				{activeTab === 'converter' && <ConvertTab />}
				{activeTab === 'favorites' && <FavoritesTab />}
			</main>
		</div>
	)
}

export default App
