export function handleErrors<T>(res: Response): Promise<T> {
	if (!res.ok) throw new Error(res.statusText)
	return res.json()
}

export function getSearchString(str: string): Record<string, string> {
	return str
		.slice(1)
		.split('&')
		.reduce((acc, cur) => {
			const [key, value] = cur.split('=')
			const firstValue = value.split(',')[0]
			acc[key] = firstValue
			return acc
		}, {} as Record<string, string>)
}

export function createEmptyArray(length: number): number[] {
	return Array.from({ length }, (_i, i) => i)
}
