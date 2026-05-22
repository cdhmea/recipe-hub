import { headerMenu } from './header-tabs.data'

interface MobileMenuProps {
	isMenuOpen: boolean
	activeTab: string
	onTabClick: (tab: string) => void
}

const MobileMenu = ({ isMenuOpen, activeTab, onTabClick }: MobileMenuProps) => {
	if (!isMenuOpen) return null
	return (
		<div className="absolute top-16 right-5 bg-white border border-gray-200 rounded-xl shadow-xl py-2 w-52 mt-1 sm:hidden flex flex-col z-50">
			{headerMenu.map(item => (
				<button
					key={item.id}
					onClick={() => onTabClick(item.id)}
					className={`px-4 py-2.5 text-left text-sm font-medium transition-colors ${
						activeTab === item.id
							? 'bg-blue-50 text-blue-600'
							: 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
					}`}
				>
					{item.title}
				</button>
			))}
		</div>
	)
}

export default MobileMenu
