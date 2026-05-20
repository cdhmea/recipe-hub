import type { ChangeEvent, SubmitEvent } from 'react'
import React, { useState } from 'react'

interface RecipeFormData {
	dish: string
	title: string
	description: string
	ingredients: string
	imageUrl: string
}

const RecipeForm: React.FC = () => {
	const [formData, setFormData] = useState<RecipeFormData>({
		dish: '',
		title: '',
		description: '',
		ingredients: '',
		imageUrl: ''
	})

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value
		}))
	}

	const handleSub = (e: SubmitEvent) => {
		e.preventDefault()
		console.log(formData)
	}

	return (
		<form
			onSubmit={handleSub}
			className="max-w-md mx-auto mt-5 p-5 bg-gray-50 border border-gray-300 rounded"
		>
			<h2 className="text-xl font-bold text-gray-700 mb-4 text-center">
				Добавить новый рецепт
			</h2>

			<div className="space-y-3">
				<div className="flex flex-col">
					<label
						htmlFor="dish"
						className="text-sm font-semibold text-gray-600 mb-1"
					>
						Название блюда
					</label>
					<input
						type="text"
						name="dish"
						id="dish"
						value={formData.dish}
						onChange={handleChange}
						className="p-2 border border-gray-400 rounded"
						placeholder="Например, Пельмешки"
						required
					/>
				</div>
				<div className="flex flex-col">
					<label
						htmlFor="imageUrl"
						className="text-sm font-semibold text-gray-600 mb-1"
					>
						Ссылка на фото блюда
					</label>
					<input
						type="url"
						name="imageUrl"
						id="imageUrl"
						value={formData.imageUrl}
						onChange={handleChange}
						className="p-2 border border-gray-400 rounded"
						placeholder="https://example.com/photo.jpg"
						required
					/>
				</div>

				<div className="flex flex-col">
					<label
						htmlFor="title"
						className="text-sm font-semibold text-gray-600 mb-1"
					>
						Краткое описание
					</label>
					<input
						type="text"
						name="title"
						id="title"
						value={formData.title}
						onChange={handleChange}
						className="p-2 border border-gray-400 rounded"
						placeholder="Коротко о блюде..."
						required
					/>
				</div>

				<div className="flex flex-col">
					<label
						htmlFor="description"
						className="text-sm font-semibold text-gray-600 mb-1"
					>
						Подробное описание
					</label>
					<textarea
						name="description"
						id="description"
						value={formData.description}
						onChange={handleChange}
						className="p-2 border border-gray-400 rounded min-h-40 resize-none"
						placeholder="Пошаговый рецепт приготовления..."
						required
					/>
				</div>

				<div className="flex flex-col">
					<label
						htmlFor="ingredients"
						className="text-sm font-semibold text-gray-600"
					>
						Ингредиенты
					</label>
					<span className="text-xs text-gray-500 mb-1">
						Каждый ингредиент вводите с новой строки и обязательно в таком
						порядке: название ингредиента - количество
					</span>
					<textarea
						name="ingredients"
						id="ingredients"
						value={formData.ingredients}
						onChange={handleChange}
						className="p-2 border border-gray-400 rounded min-h-40 resize-none"
						placeholder={
							'Соль - 1 ч.л.\nЧеснок - 2 зубчика\nЯйца - 3 шт\nМука - 200 г'
						}
						required
					/>
				</div>
				<button
					type="submit"
					className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded"
				>
					Добавить блюдо
				</button>
			</div>
		</form>
	)
}

export default RecipeForm
