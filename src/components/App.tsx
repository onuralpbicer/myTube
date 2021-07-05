import React, { useLayoutEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { Route, Switch } from 'react-router-dom'
import Header from './Header/Header'
import PageContent from './MainPage/PageContent'
import Watch from './WatchPage/Watch'

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

	useLayoutEffect(() => {
		document.title = 'MyTube'
	}, [])

	const [menuOpened, setMenuOpened] = useState(true)
	const toggleMenu = () => {
		setMenuOpened(!menuOpened)
	}

	return (
		<div className={classes.container}>
			<Header toggleMenu={toggleMenu} />
			<Switch>
				<Route exact path="/watch">
					<Watch />
				</Route>

				<Route path="*">
					<div>left side</div>
					<PageContent />
				</Route>
			</Switch>
		</div>
	)
}

export default App
