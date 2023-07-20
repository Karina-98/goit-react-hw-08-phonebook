import { useDispatch, useSelector } from "react-redux";
import { Conteiner, Input } from "./Filter.styled";
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
      <Conteiner>
      <p>Find contacts by name</p>
      <Input
        type="text"
        name="filter"
        placeholder="Enter name"
        onChange={onChange}
      />
    </Conteiner>
    ) : ( 
      <p>Please add your first contact</p>)
     }
    
  
    </>
  );
};

export default Filter;