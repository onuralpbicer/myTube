import React from 'react'
import { createUseStyles } from 'react-jss'
import { ComponentWithChildren } from '../../types/util'
import clsx from 'clsx'

const useStyles = createUseStyles({
	iconButton: (props: IconButtonProps) => ({
		padding: '0.75rem',
		height: '24px',
		width: '24px',
		display: 'inline-block',
		cursor: props.disabled ? 'default' : 'pointer',
		borderRadius: '50%',
		backgroundPosition: 'center',
		transition: 'background 0.5s',
	}),
	iconButtonDisabled: {
		pointerEvents: 'none',
		color: 'rgba(0,0,0,.26)',
	},
	iconButtonEnabled: {
		'&:hover': {
			backgroundColor: 'rgba(0,0,0,.1)',
		},
		'&:active': {
			backgroundColor: 'rgba(0,0,0,.24)',
			backgroundSize: '100%',
			transition: 'background 0s',
		},
	},
})

interface IconButtonProps
	extends ComponentWithChildren,
		Omit<
			React.DetailedHTMLProps<
				React.HTMLAttributes<HTMLSpanElement>,
				HTMLSpanElement
			>,
			'children'
		> {
	disabled?: boolean
}

const IconButton = (props: IconButtonProps): JSX.Element => {
	const classes = useStyles(props)
	const { children, disabled = false, ...rest } = props

	return (
		<span
			className={clsx(classes.iconButton, {
				[classes.iconButtonEnabled]: !disabled,
				[classes.iconButtonDisabled]: disabled,
			})}
			{...rest}
		>
			{children}
		</span>
	)
}

export default IconButton
