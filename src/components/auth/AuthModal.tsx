import type { SubmitEvent } from 'react'
import { useState } from 'react'
import { loginUser, registerUser } from '../../api.ts'

interface AuthModalProps {
	isOpen: boolean
	onClose: () => void
	onLoginSuccess: (username: string) => void
}

const AuthModal = ({ isOpen, onClose, onLoginSuccess }: AuthModalProps) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [isLoginMode, setIsLoginMode] = useState(true)
	const [error, setError] = useState('')

	const handleSub = async (e: SubmitEvent) => {
		e.preventDefault()
		setError('')

		const trimmedUser = username.trim()
		const trimmedPass = password.trim()

		if (!trimmedUser || !trimmedPass) {
			setError('Заполните все поля')
			return
		}

		const userData = { username: trimmedUser, password: trimmedPass }

		try {
			if (isLoginMode) {
				const res = await loginUser(userData)
				onLoginSuccess(res.data.username)
				onClose()
			} else {
				await registerUser(userData)
				alert('Аккаунт успешно зарегистрирован')
				setIsLoginMode(true)
				setPassword('')
			}

			setUsername('')
			setPassword('')
		} catch (e) {
			console.log(e)
			setError('Ошибка сервера')
		}
	}

	const toggleMode = () => {
		setIsLoginMode(!isLoginMode)
		setError('')
		setUsername('')
		setPassword('')
	}

	if (!isOpen) return null

	return (
		<div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 z-50">
			<div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-8 relative border border-gray-100">
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 hover:bg-gray-100 p-1.5 rounded-full transition-colors"
				>
					✕
				</button>

				<div className="text-center mb-6">
					<h3 className="text-2xl font-black text-gray-800 tracking-tight">
						{isLoginMode ? 'Вход в RecipeHub' : 'Создать аккаунт'}
					</h3>
				</div>

				{error && (
					<div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs font-semibold text-center">
						{error}
					</div>
				)}
				<form
					onSubmit={handleSub}
					className="space-y-4"
				>
					<div className="flex flex-col">
						<label className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
							Логин
						</label>
						<input
							type="text"
							value={username}
							onChange={e => setUsername(e.target.value)}
							className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm"
							placeholder="ivan_chef"
							required
						/>
					</div>

					<div className="flex flex-col">
						<label className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
							Пароль
						</label>
						<input
							type="password"
							value={password}
							onChange={e => setPassword(e.target.value)}
							className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm"
							placeholder="••••••••"
							required
						/>
					</div>

					<button
						type="submit"
						className="w-full bg-linear-to-r from-blue-600 to-indigo-600 text-white font-bold py-3 rounded-xl text-sm mt-2"
					>
						{isLoginMode ? 'Войти в систему' : 'Зарегистрироваться'}
					</button>
				</form>

				<div className="mt-6 pt-4 border-t border-gray-100 text-center">
					<button
						onClick={toggleMode}
						className="text-xs text-blue-600 font-bold hover:underline"
					>
						{isLoginMode
							? 'Нет аккаунта? Создать новый'
							: 'Уже зарегистрированы? Войти'}
					</button>
				</div>
			</div>
		</div>
	)
}

export default AuthModal
