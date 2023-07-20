import {  useSelector, useDispatch } from "react-redux";
import {  Span, } from "./ContactList.styled";
import { getContacts, getFilter } from "redux/contacts/selectors";


import { Loader } from "components/Loader/Loader";
import { deleteContacts } from "redux/contacts/operations";
import {  Button, Icon, List,  ListItem } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";





const ContactList = () => {
  const {  error, isLoading} = useSelector(state=>state.contacts.contacts);
 const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch()



const filtredContacts = contacts?.filter(contact =>
  contact.name.toLowerCase().includes(filter.toLowerCase()))

  
  return (<>
  {isLoading && <Loader></Loader>}
    <List spacing={3}>
      {filtredContacts.map(({id, name, phone}) => (
        <ListItem key={id}>
          <Icon as={PhoneIcon} boxSize={4} />
          <Span>{name}: {phone}</Span>
          <Button colorScheme='red' type="button" onClick={()=>{dispatch(deleteContacts(id))}}>Delete</Button>
        </ListItem>
      ))}
    </List>
    {error && <p>{error}</p>}

    </>
  );
};

export default ContactList;