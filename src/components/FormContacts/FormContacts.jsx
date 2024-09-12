import React, { useState } from 'react';

import {Box} from '../../contents/Box'
import {FormField, FormItem, FormBtn, FormTitle, FormInput} from '../FormContacts/FormContacts.styled'

export default function FormContacts({onSubmit}) {
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');

	const inputNameChange = e => {
		const value = e.currentTarget.value;
		if (value.length <= 30 && /^[a-zA-Zа-яА-Я]*$/.test(value)) {
      setName( value );
    }
	}

	const inputNumberChange = e => {
		const value = e.currentTarget.value;

		if (value.length <= 7 && /^\d*$/.test(value)) {
      setNumber(value );
    }
	}

	const contactsSubmit = e => {
		e.preventDefault();
		
		// console.log(name)
		// console.log(number)

		// console.log(onSubmit)

		onSubmit(name, number);
		setName('');
		setNumber('');
	}

	return (
		<Box
		border="2px solid #003B46"
		borderRadius="5px"
		width="350px"
		display="flex"
		flexDirection="column"
		alignItems="center"
		bg="#C4DFE6"
		p="40px 0px"
		height="170px"
		>
			<FormTitle>Phonebook</FormTitle>

			<FormField onSubmit={contactsSubmit}>

				<FormItem>
					Name
					<FormInput
					type="text"
					name="name"
					placeholder="Name"
					pattern="[a-zA-Zа-яА-Я]{5,20}"
					title="Содержит только буквы, минимум 5"
					maxLength="30"
					required
					value={name}
					onChange={inputNameChange}
					/>
				</FormItem>

				<FormItem>
					Phone number
					<FormInput
					type="tel"
					placeholder="Phone number"
					name="number"
					pattern="\d{7,7}"
					title="Номер телефона состоит из 7 цифр"
					maxLength="7"
					required
					value={number}
					onChange={inputNumberChange}
					/>
				</FormItem>

								<FormBtn type="submit">Add contacts</FormBtn>
			</FormField>
		</Box>
	);
}

