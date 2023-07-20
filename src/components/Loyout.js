import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Loader } from './Loader/Loader';
import { Div } from './Loyout.styled';


export const Layout = () => {
  return (
    <Div>
      <AppBar />
      <Suspense fallback={<Loader color={'#0099FF'} size={'100'}/>}>
        <Outlet />
      </Suspense>
      
    </Div>
  );
};
