import React from 'react';
import {Box} from '../../contents/Box';
import { List, ListItem, DeleteBtn} from './ListContacts.styled';

export const ListContacts = ({contacts, onDeleteContact}) => {
	// console.log(contacts.onDeleteContact)
	// console.log(onDeleteContact)
	return(
		//! Почитать как сделать, что бы после добавление все контакты располагались в алфавитном порядке
		<Box>
				
			<List>
          {contacts.map(({id, name, number}) => (
						<ListItem key={id}>
							<span>{name} : {number}</span>
						<DeleteBtn onClick={() => onDeleteContact(id)}>Delete</DeleteBtn>
						</ListItem>
					))}
      </List>
		</Box>
	)
}
