import RecipeForm from './components/RecipeForm.tsx'
import './index.css'

function App() {
	return (
		<div className="bg-gray-100 min-h-screen p-5">
			<header>
				<h1 className="text-xl font-bold text-center text-gray-800">
					Проверка формочки добавления рецепта
				</h1>
			</header>
			<main>
				<RecipeForm />
			</main>
		</div>
	)
}

export default App
