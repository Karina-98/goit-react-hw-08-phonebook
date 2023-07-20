
import { useAuth } from 'hooks/useAuth';
import { LinkNavigation } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <LinkNavigation  to="/">
        Home
      </LinkNavigation>
      {isLoggedIn && (
        <LinkNavigation  to="/Contacts">
          Contacts
        </LinkNavigation>
      )}
    </nav>
  );
};