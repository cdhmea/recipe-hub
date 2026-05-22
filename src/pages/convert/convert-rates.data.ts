export interface ProductRate {
	name: string
	cup: number
	spoon: number
	teaspoon: number
}

export const CONVERSION_RATES: { [key: string]: ProductRate } = {
	muka: { name: 'Мука', cup: 160, spoon: 30, teaspoon: 10 },
	sahar: { name: 'Сахар', cup: 200, spoon: 25, teaspoon: 8 },
	moloko: { name: 'Молоко', cup: 250, spoon: 20, teaspoon: 5 },
	grechka: { name: 'Гречка', cup: 210, spoon: 25, teaspoon: 8 },
	ris: { name: 'Рис', cup: 230, spoon: 25, teaspoon: 8 },
	maslo: { name: 'Масло растительное', cup: 230, spoon: 17, teaspoon: 5 },
	sol: { name: 'Соль', cup: 320, spoon: 30, teaspoon: 10 }
}
