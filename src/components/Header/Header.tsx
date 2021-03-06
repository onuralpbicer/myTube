import React from 'react'
import { createUseStyles } from 'react-jss'
import IconButton from '../shared/IconButton'
import MenuIcon from 'mdi-react/MenuIcon'
import YoutubeIcon from 'mdi-react/YoutubeIcon'
import SearchInput from './SearchInput'
import CameraIcon from 'mdi-react/CameraIcon'
import DotsGridIcon from 'mdi-react/DotsGridIcon'
import BellIcon from 'mdi-react/BellIcon'
import { Link, useLocation } from 'react-router-dom'

const useStyles = createUseStyles({
	header: {
		gridColumn: 'span 2',
		padding: '0 0.5em',
		display: 'flex',
		alignItems: 'center',
		borderBottom: '1px solid grey',
	},
	youtubeIcon: {
		display: 'inline-flex',
		alignItems: 'center',
		fontSize: '1.2em',
		fontWeight: 600,
		textDecoration: 'none',
		color: 'black',
	},
	searchArea: {
		flexGrow: 1,
		display: 'flex',
	},
	profileIcon: {
		backgroundColor: 'lightblue',
		margin: '1em',
		padding: '0.5em',
		borderRadius: '50%',
		textAlign: 'center',
		cursor: 'pointer',
		height: 24,
		width: 24,
		color: 'white',
	},
})

interface HeaderProps {
	toggleMenu: () => void
}

const Header = (props: HeaderProps): JSX.Element => {
	const classes = useStyles()
	const { toggleMenu } = props

	const location = useLocation()

	return (
		<header className={classes.header}>
			<IconButton onClick={toggleMenu}>
				<MenuIcon />
			</IconButton>
			<Link
				to="/"
				replace={location.pathname === '/'}
				className={classes.youtubeIcon}
			>
				<YoutubeIcon size="1.8em" color="red" />
				MyTube
			</Link>
			<div className={classes.searchArea}>
				<SearchInput onClickSearch={(str) => console.log('search this', str)} />
			</div>
			<IconButton>
				<CameraIcon />
			</IconButton>
			<IconButton>
				<DotsGridIcon />
			</IconButton>
			<IconButton>
				<BellIcon />
			</IconButton>
			<span className={classes.profileIcon}>O</span>
		</header>
	)
}

export default Header
