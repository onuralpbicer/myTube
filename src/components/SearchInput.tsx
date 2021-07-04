import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import MagnifyIcon from 'mdi-react/MagnifyIcon'

const useStyles = createUseStyles({
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
	},
	textfield: {
		padding: '0.3em 0.5em',
		maxWidth: '550px',
		width: '100%',
		fontSize: '1em',
	},
	searchButton: {
		height: '100%',
		padding: '0 1.5em',
		cursor: 'pointer',
		border: '1px solid gray',
		display: 'flex',
		placeItems: 'center',
		boxSizing: 'border-box',
		backgroundColor: 'rgba(0,0,0,.05)',
		'&:hover': {
			backgroundColor: 'rgba(0,0,0,.1)',
		},
	},
})

interface SearchInputProps {
	onClickSearch: (searchStr: string) => void
	initialValue?: string
}

const SearchInput = (props: SearchInputProps): JSX.Element => {
	const { onClickSearch, initialValue = '' } = props
	const classes = useStyles()

	const [value, setValue] = useState(initialValue)

	return (
		<div className={classes.container}>
			<input
				className={classes.textfield}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder="Search"
			></input>
			<div
				className={classes.searchButton}
				onClick={() => onClickSearch(value)}
			>
				<MagnifyIcon size={20} />
			</div>
		</div>
	)
}

export default SearchInput
