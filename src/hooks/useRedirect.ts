import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

export function useRedirect(): (path: string) => void {
	const history = useHistory()
	return useCallback(
		(path: string) => {
			history.push(path)
		},
		[history],
	)
}
