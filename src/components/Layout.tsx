import React from 'react'
import Header from './Header'

interface LayoutProps {
	children: React.ReactNode
	activeTab: string
	setActiveTab: (tab: string) => void
}

const Layout: React.FC<LayoutProps> = ({
	children,
	activeTab,
	setActiveTab
}) => {
	return (
		<div className="bg-gray-100 min-h-screen flex flex-col">
			<Header
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
			<main className="max-w-6xl w-full mx-auto p-5 grow">{children}</main>
		</div>
	)
}

export default Layout
