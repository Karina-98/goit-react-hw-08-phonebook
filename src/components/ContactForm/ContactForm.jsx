import React from 'react';
import {  Conteiner, Label } from './ContactForm.styled';
import { getContacts } from 'redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import { createContacts } from 'redux/contacts/operations';
import { Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { ArrowForwardIcon, InfoIcon, PhoneIcon } from '@chakra-ui/icons';


const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handelSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const number = form.number.value;
    const contact = { name: name, number: number };

    if (contacts?.find(contact => contact.name === name)) {
      Notiflix.Notify.failure(`${name} is already in your contacts`);

      return;
    } else {
      dispatch(createContacts(contact));
    }

    event.target.reset();
  };

  return (
    <Conteiner>
      <form onSubmit={handelSubmit}>
        <Label>
          Name
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <InfoIcon color="gray.300" />
            </InputLeftElement>
          <Input mb={30}
            size="lg"
            variant="filled"
            placeholder="Please enter name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
            </InputGroup>
        </Label>
        <Label>
          Number
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <PhoneIcon color="gray.300" />
            </InputLeftElement>
            <Input mb={30}
              size="lg"
              variant="filled"
              placeholder="Please enter number"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </InputGroup>
        </Label>
        <Button  colorScheme='green' rightIcon={<ArrowForwardIcon />} type="submit">Add Contact</Button>
      </form>
    </Conteiner>
  );
};

export default ContactForm;
