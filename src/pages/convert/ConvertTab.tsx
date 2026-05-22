import { useState } from 'react'
import { CONVERSION_RATES } from './convert-rates.data'

const ConvertTab = () => {
	const [product, setProduct] = useState('muka')
	const [measureType, setMeasureType] = useState<'cup' | 'spoon' | 'teaspoon'>(
		'cup'
	)
	const [inputValue, setInputValue] = useState(1)

	const currentProduct = CONVERSION_RATES[product]
	const rate = currentProduct[measureType]
	const resultGrams = Math.round(inputValue * rate)

	return (
		<div className="max-w-md mx-auto bg-white border border-gray-300 rounded p-6 shadow-sm mt-6">
			<h2 className="text-xl font-bold text-gray-700 mb-4 text-center">
				Конвертер кулинарных мер в граммы
			</h2>

			<div className="space-y-4">
				<div className="flex flex-col">
					<label className="text-sm font-semibold text-gray-600 mb-1">
						Выберите продукт
					</label>
					<select
						value={product}
						onChange={e => setProduct(e.target.value)}
						className="p-2 border border-gray-400 rounded bg-white"
					>
						{Object.keys(CONVERSION_RATES).map(key => (
							<option
								key={key}
								value={key}
							>
								{CONVERSION_RATES[key].name}
							</option>
						))}
					</select>
				</div>

				<div className="flex flex-col">
					<label className="text-sm font-semibold text-gray-600 mb-1">
						Мера измерения
					</label>
					<select
						value={measureType}
						onChange={e =>
							setMeasureType(e.target.value as 'cup' | 'spoon' | 'teaspoon')
						}
						className="p-2 border border-gray-400 rounded bg-white"
					>
						<option value="cup">Стакан (250 мл)</option>
						<option value="spoon">Столовая ложка</option>
						<option value="teaspoon">Чайная ложка</option>
					</select>
				</div>
				<div className="flex flex-col">
					<label className="text-sm font-semibold text-gray-600 mb-1">
						Количество
					</label>
					<input
						type="number"
						value={inputValue === 0 ? '' : inputValue}
						onChange={e => setInputValue(Math.max(0, Number(e.target.value)))}
						className="p-2 border border-gray-400 rounded"
						min="0"
						step="0.5"
						required
					/>
				</div>

				<div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded text-center">
					<p className="text-amber-800 font-medium text-sm">
						Итоговый вес ингредиента:
					</p>
					<p className="text-3xl font-black text-amber-600 mt-1">
						{resultGrams} г
					</p>
				</div>
			</div>
		</div>
	)
}

export default ConvertTab
