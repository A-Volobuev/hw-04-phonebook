import React, { useState, useEffect } from 'react';

import { nanoid } from 'nanoid';

import {Box} from '../contents/Box';
import FormContacts from './FormContacts/FormContacts';
import { ListContacts } from './ListContacts/ListContacts';
import { Filter } from './Filter/Filter';
import {ListTitle} from './App.styled';

const LS_KEY = 'feedback_contacts';
const defaultValue = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ];

export default function App() {
  const [contacts, setContacts] = useState(() => 
  {return JSON.parse(window.localStorage.getItem(LS_KEY)) ?? defaultValue});

  const [filter, setFilter] = useState('');

  // Добавляем в контакты
  const addContacts = (name, number) => {

    // Проверка добавлено ли имя
    console.log(contacts)
    const isNameAdded = contacts.some(contact => {
      // console.log(contact.name);
      return contact.name.toLowerCase() === name.toLowerCase()
    })

    if(isNameAdded) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts((contacts) => (
      [contact, ...contacts]
    ))

  }

  // Фильтр
  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  // Показываем только эл из поиска
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    // console.log(contacts)

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  //? Удаляем контакт
  const deleteContact = contactId => {
    console.log(contactId);
    setContacts(
      contacts.filter(contact => contact.id !== contactId),
    )
  }

  // Проверяем есть ли данные в local storage и загружаем их
  //! Сначала useState задает дефолт значение, а потом только срабатывает useEffect  
  // useEffect(() => {
  //   const savedContacts = window.localStorage.getItem(LS_KEY);
  //   console.log(savedContacts);
  //   console.log(Boolean(savedContacts))

  //   if(Boolean(savedContacts)){
  //     setContacts(JSON.parse(savedContacts));
  //   }
  // }, []);

  //? Добавляем контакты в local storage
  useEffect(() => {
    window.localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Box
    bg="#66A5AD"
    p="20px 20px 480px 20px"
    display="flex"
    justifyContent="space-evenly"
    >
      <FormContacts onSubmit={addContacts}/>

      <Box
      border="2px solid #003B46"
      borderRadius="5px"
      width="350px"
      display="flex"
      flexDirection="column"
      alignItems="start"
      justifyContent="start"
      bg="#C4DFE6"
      >
        <ListTitle>Contacts</ListTitle>

        <Filter value={filter} onChange={changeFilter}/>

        <ListContacts 
        contacts={getVisibleContacts()} 
        onDeleteContact={deleteContact}/>

      </Box>
    </Box>
  );
}






// class App extends Component {
//   // state = { 
//   //   contacts: [
//   //   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//   //   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//   //   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//   //   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//   //   ],
//   //   filter: '',
//   // } 

//   // Добавляем в контакты
//   // addContacts = (name, number) => {
//   //   const {contacts} = this.state;

//   //   // Проверка добавлено ли имя
//   //   const isNameAdded = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());

//   //   console.log(isNameAdded)
//   //   if(isNameAdded) {
//   //     alert(`${name} is already in contacts.`);
//   //     return;
//   //   }

//   //   const contact = {
//   //     id: nanoid(),
//   //     name,
//   //     number,
//   //   };

//   //   this.setState(({contacts}) => ({
//   //     contacts: [contact, ...contacts]
//   //   }))
//   // }

//   // Фильтр
//   // changeFilter = (e) => {
//   //   this.setState({filter: e.currentTarget.value});
//   // };

//   // Показываем только эл из поиска
//   // getVisibleContacts = () => {
//   //   const {contacts, filter} = this.state;
//   //   const normalizedFilter = filter.toLowerCase();

//   //   return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),
//   //   );
//   // };

//   // Удаляем контакт
//   // deleteContact = contactId => {
//   //   this.setState(prevState => ({
//   //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//   //   }))
//   // }

//   // Добавляем контакты в local storage
//   // componentDidUpdate(_, prevState) {
//   //   if(prevState.contacts !== this.state.contacts){
//   //     localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
//   //   }
//   // };

//   // Проверяем есть ли данные в local storage и загружаем их
//   // componentDidMount() {
//   //   // console.log(typeof localStorage.getItem(LS_KEY));
//   //   const savedContacts = localStorage.getItem(LS_KEY);
//   //   // console.log(savedContacts)
//   //   if(savedContacts){
//   //     this.setState({ contacts: JSON.parse(savedContacts) });
//   //   }
//   // }

//   render() { 
//     const visibleContacts = this.getVisibleContacts();

//     // return (
//     //   <Box
//     //   bg="#66A5AD"
//     //   p="20px 20px 480px 20px"
//     //   display="flex"
//     //   justifyContent="space-evenly"
//     //   >
//     //     <FormContacts onSubmit={this.addContacts}/>

//     //     <Box
// 		//     border="2px solid #003B46"
// 		// 	  borderRadius="5px"
// 		// 	  width="350px"
// 		// 	  display="flex"
// 		// 	  flexDirection="column"
// 		// 	  alignItems="start"
// 		// 	  justifyContent="start"
// 		// 	  bg="#C4DFE6"
// 		// 	  >
//     //       <ListTitle>Contacts</ListTitle>

//     //       <Filter value={this.state.filter} onChange={this.changeFilter}/>

//     //       <ListContacts contacts={visibleContacts} onDeleteContact={this.deleteContact}/>

//     //     </Box>
//     //   </Box>
//     // );
//   }
// }

// export default App;
