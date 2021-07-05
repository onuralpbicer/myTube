import React, { useLayoutEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { Route, Switch } from 'react-router-dom'
import Header from './Header/Header'
import PageContent from './MainPage/PageContent'
import Watch from './WatchPage/Watch'

const useStyles = createUseStyles({
	container: {
		display: 'flex',
		height: '100vh',
		flexDirection: 'column',
	},
	mainContentContainer: {
		display: 'flex',
		height: '100%',
		overflow: 'auto',
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
					<div className={classes.mainContentContainer}>
						<div style={{ width: '240px', flexShrink: 0 }}>left side</div>
						<PageContent />
					</div>
				</Route>
			</Switch>
		</div>
	)
}

export default App
