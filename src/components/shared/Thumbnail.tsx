import React from 'react'
import { createUseStyles } from 'react-jss'
import { YTVideo } from '../../types/youtube'

const useStyles = createUseStyles({
	thumbnail: (props: ThumbnailProps) => ({
		overflow: 'hidden',
		height: 0,
		paddingTop: '56%',
		// background: 'lightgray',
		cursor: 'pointer',
		'&:hover': {
			backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.45), 
            rgba(0, 0, 0, 0.45)
            ), url(${props.video.snippet.thumbnails.high.url})`,
		},
		backgroundImage: `url(${props.video.snippet.thumbnails.high.url})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	}),
	videoTitle: {
		fontWeight: 700,
	},
	channelTitle: {},
})

interface ThumbnailProps {
	video: YTVideo
	onThumbnailClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

const Thumbnail = (props: ThumbnailProps): JSX.Element => {
	const classes = useStyles(props)
	const { onThumbnailClick, video } = props

	return (
		<div>
			<div className={classes.thumbnail} onClick={onThumbnailClick}></div>
			<div className={classes.videoTitle}>{video.snippet.title}</div>
			<div className={classes.channelTitle}>{video.snippet.channelTitle}</div>
		</div>
	)
}

export default Thumbnail
