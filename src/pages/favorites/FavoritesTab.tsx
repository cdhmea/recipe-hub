const FavoritesTab = () => {
	return (
		<div className="max-w-md mx-auto text-center bg-white border border-gray-300 rounded p-10 shadow-sm mt-6">
			<span className="text-5xl">⭐</span>
			<hr className="m-5" />
			<h2 className="text-xl font-bold text-gray-700 mt-4 mb-2">
				Избранные рецепты
			</h2>
			<p className="text-sm text-gray-500 leading-relaxed">
				Система добавления рецептов в избранные будет доступна сразу после
				авторизации в системе{' '}
				<span className="italic">'в ближайшем обновлении =)'</span>
			</p>
		</div>
	)
}

export default FavoritesTab
