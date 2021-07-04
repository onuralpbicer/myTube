import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	thumbnail: {
		overflow: 'hidden',
		height: 0,
		paddingTop: '56%',
		background: 'lightgray',
		cursor: 'pointer',
		'&:hover': {
			background: 'gray',
		},
	},
})

interface ThumbnailProps {
	onThumbnailClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

const Thumbnail = (props: ThumbnailProps): JSX.Element => {
	const classes = useStyles()
	const { onThumbnailClick } = props
	return (
		<div>
			<div className={classes.thumbnail} onClick={onThumbnailClick}></div>
			<div>Video Title Hello</div>
			<div>Channel Name</div>
		</div>
	)
}

export default Thumbnail
