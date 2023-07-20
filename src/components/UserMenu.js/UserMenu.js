import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

import { UserMail, Wrapper } from './UserMenu.styled';
import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <UserMail>Welcome, {user.mail}</UserMail>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </Wrapper>
  );
};