import React from 'react'

interface HeaderProps {
	activeTab: string
	setActiveTab: (tab: string) => void
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
	return (
		<header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
			<div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
				<div
					className="flex items-center space-x-2 cursor-pointer"
					onClick={() => setActiveTab('recipes')}
				>
					<span className="text-xl font-black tracking-tight gray-800 bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
						RecipeHub
					</span>
				</div>

				<nav className="flex space-x-1">
					<button
						onClick={() => setActiveTab('recipes')}
						className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
							activeTab === 'recipes'
								? 'bg-blue-50 text-blue-600'
								: 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
						}`}
					>
						Рецепты
					</button>
					<button
						onClick={() => setActiveTab('calculator')}
						className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
							activeTab === 'calculator'
								? 'bg-blue-50 text-blue-600'
								: 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
						}`}
					>
						Калькулятор КБЖУ
					</button>
					<button
						onClick={() => setActiveTab('favorites')}
						className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
							activeTab === 'favorites'
								? 'bg-blue-50 text-blue-600'
								: 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
						}`}
					>
						Избранное
					</button>
				</nav>

				<div className="flex items-center">
					<button
						onClick={() => alert('реализую чуть позже')}
						className="flex items-center space-x-2 bg-gray-50 hover:bg-gray-100 border border-gray-300 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors"
					>
						<svg
							className="w-4 h-4 text-gray-500"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
							/>
						</svg>
						<span className="hidden sm:inline">Войти</span>
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header
