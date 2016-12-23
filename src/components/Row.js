import React from 'react'
import { row } from './Row.css'

export function Row ({ children }) {
	return (
		<div className={row}>
			{children}
		</div>
	)
}