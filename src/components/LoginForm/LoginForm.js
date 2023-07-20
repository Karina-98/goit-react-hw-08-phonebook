import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import { Input, Button} from '@chakra-ui/react';
import { Form, Label } from './LoginForm.styled';
import { CheckIcon } from '@chakra-ui/icons';
import React from 'react';

export const LoginForm = () => {
  const dispatch = useDispatch();

 

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Input spacing={3} size="lg" type="email" name="email" />
      </Label>
      <Label>
        Password
        
          <Input
            spacing={3}
            size="lg"
            
            name="password"
          />
          
      </Label>
      <Button
        size="lg"
        colorScheme="green"
        rightIcon={<CheckIcon />}
        type="submit"
      >
        Log In
      </Button>
    </Form>
  );
};
