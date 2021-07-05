export function handleErrors<T>(res: Response): Promise<T> {
	if (!res.ok) throw new Error(res.statusText)
	return res.json()
}
