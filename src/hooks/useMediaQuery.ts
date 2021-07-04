import { useLayoutEffect, useState } from 'react'

export function useMediaQueryWidth(): number {
	const [width, setWidth] = useState(document.body.clientWidth)

	useLayoutEffect(() => {
		const resizeObserver = new ResizeObserver((entries) => {
			const entry = entries[0]
			if (entry) {
				setWidth(entry.target.clientWidth)
			}
		})

		resizeObserver.observe(document.body)

		return () => {
			resizeObserver.unobserve(document.body)
		}
	}, [])

	return width
}
