
import { Container } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';

import {  useEffect } from 'react';
import { getContacts } from 'redux/contacts/selectors';
import { Titles } from 'components/Title/Title';
import  ContactForm  from 'components/ContactForm/ContactForm';
import  Filter  from 'components/Filter/Filter';
import  ContactList  from 'components/ContactList/ContactList';
import { getAllContacts } from 'redux/contacts/operations';


export default function Contacts() {
  const dispatch = useDispatch();
const contacts = useSelector(getContacts)
    console.log(contacts)
    
useEffect(() => {
   dispatch(getAllContacts());
 
}, [dispatch]);

  return (
     
    <Container>
      <Titles>Phonebook</Titles>
      <ContactForm />

      <Titles>Contacts</Titles>
      
        <Filter  />
     
    <ContactList/>
      
    </Container>
  );
};