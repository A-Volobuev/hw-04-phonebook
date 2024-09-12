import React from 'react';
import {FilterLabel, FilterInput} from './Filter.styled'

export const Filter = ({value, onChange}) => {
	return(
		<FilterLabel>
			Filter 
			<FilterInput type="text" value={value} onChange={onChange} placeholder="Name"/>
		</FilterLabel>
	)
}

