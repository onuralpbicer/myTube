import React from 'react'
import { createUseStyles } from 'react-jss'
import { Redirect } from 'react-router'
import { useLocation } from 'react-router-dom'
import { createEmptyArray, getSearchString } from '../../api/api'
import Thumbnail from '../shared/Thumbnail'
import Comment from './Comment'
import { useRelatedVideos } from './relatedVideos'

const useStyles = createUseStyles({
	container: {
		backgroundColor: 'rgb(248, 248, 248)',
		height: '100%',
		padding: '1.5em',
		display: 'grid',
		gridTemplateAreas: `
          "vid recommended"
          "description recommended"
          "comments recommended"
        `,
		gap: '1.5em',
		gridTemplateColumns: 'minmax(auto, 75%) minmax(300px, 350px)',
		gridTemplateRows: 'repeat(3, min-content)',
		overflow: 'auto',
	},
	videoContainer: {
		gridArea: 'vid',
	},
	video: {
		overflow: 'hidden',
		height: 0,
		paddingTop: '56%',
		backgroundColor: 'lightgrey',
	},
	recommended: {
		gridArea: 'recommended',
	},
	recommendedItem: {
		display: 'flex',
		marginBottom: '0.5em',
		gap: '0.5em',
		'& > *:first-child': {
			flexBasis: '50%',
			height: 0,
			paddingTop: '26%',
			background: 'lightgrey',
		},
		'& > *:last-child': {
			flexGrow: 1,
		},
	},
	comments: {
		gridArea: 'comments',
	},
})

const Watch = (): JSX.Element => {
	const { search } = useLocation()

	const classes = useStyles()

	const params = getSearchString(search)

	const videoID = params.v

	const relatedVideos = useRelatedVideos(videoID)

	if (!search || !videoID) return <Redirect to="/" />
	return (
		<div className={classes.container}>
			<div className={classes.videoContainer}>
				<div className={classes.video}>{videoID}</div>
				<div>title</div>
				<div>channel</div>
			</div>
			<div className={classes.recommended}>
				{relatedVideos.isLoading || !relatedVideos.data ? (
					<div>Loading</div>
				) : (
					relatedVideos.data.items.map((video, index) => (
						<Thumbnail key={index} video={video} recommended />
					))
				)}
			</div>
			<div className={classes.comments}>
				{createEmptyArray(300).map((index) => (
					<Comment key={index} />
				))}
			</div>
		</div>
	)
}

export default Watch
