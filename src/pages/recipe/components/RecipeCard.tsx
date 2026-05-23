import { useEffect, useState } from 'react'
import type { Recipe } from '../recipe-type.data.ts'
import RecipeModal from './RecipeModal.tsx'

const RecipeCard = (props: Recipe) => {
	const { dish, title, description, ingredients, imageUrl } = props
	const [isOpen, setIsOpen] = useState(false)
	const ingredientsList = ingredients.split('\n').filter(el => el.trim() !== '')

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}
	}, [isOpen])

	return (
		<div className="bg-white border border-gray-300 rounded shadow-sm overflow-hidden max-w-sm w-full mx-auto flex flex-col justify-between h-130">
			<div className="overflow-hidden flex flex-col h-full">
				<img
					src={imageUrl}
					alt={'Не удалось загрузить изображение'}
					className="w-full h-40 object-cover border-b border-gray-300"
				/>

				<div className="p-4 space-y-3 overflow-y-auto custom-scrollbar">
					<h3 className="text-xl font-bold text-gray-800">
						{dish.substring(0, 30)}
					</h3>
					<p className="text-sm font-semibold text-gray-500 italic">
						{title.substring(0, 80)}
					</p>

					<hr className="border-gray-200" />

					<div>
						<h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
							Ингредиенты:
						</h4>
						<ul className="list-none text-sm text-gray-600">
							{ingredientsList
								.map(el => el.substring(0, 30))
								.slice(0, 3)
								.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							{ingredientsList.length > 3 && (
								<li className="text-gray-400 list-none font-medium text-xs mt-1">
									...и еще {ingredientsList.length - 3} шт.
								</li>
							)}
						</ul>
					</div>

					<hr className="border-gray-200" />

					<div>
						<h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
							Приготовление:
						</h4>
						<p className="text-sm text-gray-700 leading-relaxed">
							{description.length > 100
								? `${description.substring(0, 100)}...`
								: description}
						</p>
					</div>
				</div>
			</div>
			<div className="p-4 border-t border-gray-200 bg-gray-50">
				<button
					onClick={() => setIsOpen(true)}
					className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded text-sm transition-colors"
				>
					Подробнее
				</button>
			</div>
			<RecipeModal
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				recipe={props}
				ingredientsList={ingredientsList}
			/>
		</div>
	)
}

export default RecipeCard
