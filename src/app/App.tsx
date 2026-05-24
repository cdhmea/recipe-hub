import { useState } from 'react'
import AuthModal from '../components/auth/AuthModal.tsx'
import Header from '../components/header/Header.tsx'
import '../index.css'
import ConvertTab from '../pages/convert/ConvertTab.tsx'
import FavoritesTab from '../pages/favorites/FavoritesTab.tsx'
import RecipeTab from '../pages/recipe/RecipeTab.tsx'

function App() {
	const [activeTab, setActiveTab] = useState(() => {
		return localStorage.getItem('activeTab') || 'recipes'
	})

	const [user, setUser] = useState(localStorage.getItem('username'))
	const [isAuthOpen, setIsAuthOpen] = useState(false)

	const handleTabChange = (tab: string) => {
		setActiveTab(tab)
		localStorage.setItem('activeTab', tab)
	}

	const loginSuccess = (name: string) => {
		setUser(name)
		localStorage.setItem('username', name)
		setIsAuthOpen(false)
	}

	const logout = () => {
		setUser(null)
		localStorage.removeItem('username')
	}

	return (
		<div className="bg-gray-100 min-h-screen flex flex-col">
			<Header
				activeTab={activeTab}
				setActiveTab={handleTabChange}
				user={user}
				onOpenAuth={() => setIsAuthOpen(true)}
				onLogout={logout}
			/>

			<main className="max-w-6xl w-full mx-auto p-5">
				{activeTab === 'recipes' && <RecipeTab />}
				{activeTab === 'converter' && <ConvertTab />}
				{activeTab === 'favorites' && <FavoritesTab />}
			</main>

			<AuthModal
				isOpen={isAuthOpen}
				onClose={() => setIsAuthOpen(false)}
				onLoginSuccess={loginSuccess}
			/>
		</div>
	)
}

export default App
