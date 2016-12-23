import React from 'react'
import { column, padding as pd } from './Column.css'

export function Column ({ children, padding }) {
	return (
		<div className={`&{column} ${padding ? pd : ''}`}>
			{children}
		</div>
	)
}