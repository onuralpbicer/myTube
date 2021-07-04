import React from 'react'
import { createUseStyles } from 'react-jss'
import { useRedirect } from '../../hooks/useRedirect'
import Thumbnail from './Thumbnail'

const useStyles = createUseStyles({
	container: {
		backgroundColor: 'rgb(248, 248, 248)',
		padding: '1em',
		display: 'flex',
		gap: '1em',
		flexWrap: 'wrap',
		'& > *': {
			'@media (min-width: 0px)': {
				flexBasis: '99%',
			},
			'@media (min-width: 960px)': {
				flexBasis: '48%',
			},
			'@media (min-width: 1200px)': {
				flexBasis: '32%',
			},
			'@media (min-width: 1600px)': {
				flexBasis: '24%',
			},
		},
		overflow: 'auto',
	},
})

const PageContent = (): JSX.Element => {
	const classes = useStyles()

	const redirect = useRedirect()
	return (
		<div className={classes.container}>
			{Array.from({ length: 30 }, (_v, index) => index).map((index) => (
				<Thumbnail
					key={index}
					onThumbnailClick={() => redirect('/watch?v=eWbqjLkTQrM')}
				/>
			))}
		</div>
	)
}

export default PageContent
