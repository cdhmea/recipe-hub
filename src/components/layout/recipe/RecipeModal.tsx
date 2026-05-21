import type { Recipe } from './recipe-type.data.ts'

interface RecipeModalProps {
	isOpen: boolean
	onClose: () => void
	recipe: Recipe
	ingredientsList: string[]
}

const RecipeModal = ({
	isOpen,
	onClose,
	recipe,
	ingredientsList
}: RecipeModalProps) => {
	if (!isOpen) return null

	const { dish, title, description, imageUrl } = recipe

	return (
		<div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
			<div className="bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] flex flex-col overflow-hidden relative">
				<div className="p-4 border-b border-gray-200 bg-gray-50 pr-12">
					<h3 className="text-2xl font-bold text-gray-800">
						{dish.substring(0, 100)}
					</h3>
				</div>

				<div className="p-6 overflow-y-auto space-y-4">
					<img
						src={imageUrl}
						alt="Не удалось загрузить изображение"
						className="w-full h-64 object-cover rounded border border-gray-200 shadow-sm"
					/>

					<p className="text-sm font-semibold text-gray-500 italic">{title}</p>

					<hr className="border-gray-200" />

					<div>
						<h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">
							Полный список ингредиентов:
						</h4>
						<ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
							{ingredientsList.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</div>

					<hr className="border-gray-200" />

					<div>
						<h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">
							Пошаговое приготовление:
						</h4>
						<p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
							{description}
						</p>
					</div>
				</div>

				<div className="p-4 border-t border-gray-200 flex justify-end bg-gray-50">
					<button
						onClick={onClose}
						className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded text-sm transition-colors"
					>
						Закрыть
					</button>
				</div>
			</div>
		</div>
	)
}

export default RecipeModal
