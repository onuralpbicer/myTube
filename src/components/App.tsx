import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import Header from './Header'
import PageContent from './PageContent'

const useStyles = createUseStyles({
	container: {
		display: 'grid',
		gridTemplateColumns: '240px auto',
		height: '100vh',
		gridTemplateRows: 'max-content auto',
	},
})

const App = (): JSX.Element => {
	const classes = useStyles()

	const [menuOpened, setMenuOpened] = useState(true)
	const toggleMenu = () => {
		setMenuOpened(!menuOpened)
	}

	return (
		<div className={classes.container}>
			<Header toggleMenu={toggleMenu} />
			<div>left side</div>
			<PageContent />
		</div>
	)
}

export default App
