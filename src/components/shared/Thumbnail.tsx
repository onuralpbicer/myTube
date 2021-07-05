import React from 'react'
import { createUseStyles } from 'react-jss'
import { useRedirect } from '../../hooks/useRedirect'
import { YTVideo } from '../../types/youtube'

const useStyles = createUseStyles({
	container: (props: ThumbnailProps) => ({
		gridTemplateAreas: `
          "thumb title"
          "thumb channel"
          "thumb empty"
          "thumb empty"
        `,
		gridTemplateColumns: '50% auto',
		gridTemplateRows: 'repeat(3, min-content)',
		display: props.recommended ? 'grid' : 'block',
		marginBottom: props.recommended ? '1em' : 0,
		gap: '0.5em',
	}),
	thumbnail: (props: ThumbnailProps) => ({
		gridArea: 'thumb',
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
		gridArea: 'title',
		fontWeight: 700,
		cursor: 'pointer',
		display: '-webkit-box',
		'-webkit-line-clamp': 2,
		'-webkit-box-orient': 'vertical',
		overflow: 'hidden',
	},
	channelTitle: {
		gridArea: 'channel',
	},
})

interface ThumbnailProps {
	video: YTVideo
	recommended?: boolean
}

const Thumbnail = (props: ThumbnailProps): JSX.Element => {
	const classes = useStyles(props)
	const { video } = props
	const redirect = useRedirect()

	const handleVideoClick = () => {
		redirect(`/watch?v=${video.id}`)
	}

	return (
		<div className={classes.container}>
			<div className={classes.thumbnail} onClick={handleVideoClick}></div>
			<div className={classes.videoTitle} onClick={handleVideoClick}>
				{video.snippet.title}
			</div>
			<div className={classes.channelTitle}>{video.snippet.channelTitle}</div>
		</div>
	)
}

export default Thumbnail
