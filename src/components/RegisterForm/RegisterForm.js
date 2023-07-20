import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import { Input, Button, InputRightElement, InputGroup } from '@chakra-ui/react';
import { Form, Label } from './RegisterForm.styled';
import React from 'react';
import { CheckIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <Input spacing={3} size="lg" type="text" name="name" />
      </Label>
      <Label>
        Email
        <Input spacing={3} size="lg" type="email" name="email" />
          </Label>

          <Label>
        Password
          <InputGroup size='md'>
     
        <Input
          spacing={3}
          size="lg"
          type={show ? 'text' : 'password'}
          name="password"
        />
      <InputRightElement width='4.5rem'>
        <Button h='1.5rem' size='sm' onClick={handleClick}>
          {show ? <ViewIcon/> : <ViewOffIcon/>}
        </Button>
      </InputRightElement>
    </InputGroup>
</Label>
      <Button rightIcon={<CheckIcon />} size='lg' colorScheme='green' type="submit">Register</Button>
    </Form>
  );
};
