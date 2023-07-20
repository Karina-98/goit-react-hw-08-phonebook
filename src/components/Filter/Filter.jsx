import { Input,  Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import { setFilter } from "redux/contacts/filterSlice";
import { getContacts } from "redux/contacts/selectors";



const Filter = () => {
  const dispatch = useDispatch()
  
  const contacts = useSelector(getContacts)
 
  const onChange = (e) => {
  
    dispatch(setFilter(e.target.value))
  }


  return (<>
    {contacts.length > 0 ?
     (
      <Box mb={30} mt={30}> 
      <p>Find contacts by name</p>
      <Input
        type="text"
        name="filter"
        placeholder="Enter name"
        onChange={onChange}
      />
    </Box>
    ) : ( 
      <p>Please add your first contact</p>)
     }
    
  
    </>
  );
};

export default Filter;