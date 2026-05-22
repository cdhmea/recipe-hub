import { useState } from 'react'
import { headerMenu } from './header-tabs.data'
import MobileMenu from './MobileMenu'

interface HeaderProps {
	activeTab: string
	setActiveTab: (tab: string) => void
}

const Header = ({ activeTab, setActiveTab }: HeaderProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const handleTabClick = (tab: string) => {
		setActiveTab(tab)
		setIsMenuOpen(false)
	}

	return (
		<header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
			<div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
				<div
					className="flex items-center space-x-2 cursor-pointer"
					onClick={() => handleTabClick('recipes')}
				>
					<span className="text-xl font-black tracking-tight gray-800 bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
						RecipeHub
					</span>
				</div>

				<nav className="sm:flex hidden space-x-1">
					{headerMenu.map(item => (
						<button
							key={item.id}
							onClick={() => setActiveTab(item.id)}
							className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
								activeTab === item.id
									? 'bg-blue-50 text-blue-600'
									: 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
							}`}
						>
							{item.title}
						</button>
					))}
				</nav>

				<div className="flex items-center gap-2.5">
					<button
						onClick={() => alert('реализую чуть позже')}
						className="flex items-center bg-gray-50 hover:bg-gray-100 border border-gray-300 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors"
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
						<span className="hidden sm:inline ml-2">Войти</span>
					</button>
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="sm:hidden flex items-center justify-center px-3 py-1.5 rounded-lg border border-gray-300 bg-gray-50 text-gray-500 hover:bg-gray-100 transition-colors"
					>
						<svg
							className="w-4 h-4"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							viewBox="0 0 24 24"
						>
							{isMenuOpen ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							)}
						</svg>
					</button>
				</div>
				<MobileMenu
					isMenuOpen={isMenuOpen}
					activeTab={activeTab}
					onTabClick={handleTabClick}
				/>
			</div>
		</header>
	)
}

export default Header
