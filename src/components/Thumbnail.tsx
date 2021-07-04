import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	thumbnail: {
		overflow: 'hidden',
		height: 0,
		paddingTop: '56%',
		background: 'gray',
		cursor: 'pointer',
	},
})

const Thumbnail = (): JSX.Element => {
	const classes = useStyles()
	return (
		<div>
			<div className={classes.thumbnail}></div>
			<div>Video Title Hello</div>
			<div>Channel Name</div>
		</div>
	)
}

export default Thumbnail
