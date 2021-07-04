import React from 'react'
import { Redirect } from 'react-router'
import { useLocation } from 'react-router-dom'

const Watch = (): JSX.Element => {
	const { search } = useLocation()

	if (!search) return <Redirect to="/" />

	return <div>test</div>
}

export default Watch
