import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	container: {
		//
	},
})

const Comment = (): JSX.Element => {
	const classes = useStyles()
	return <div className={classes.container}>Comment</div>
}

export default Comment
