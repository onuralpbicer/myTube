import React from 'react'

export interface ComponentWithChildren<Child = React.ReactNode> {
	children: Child
}
