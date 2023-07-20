import { HomeDiv, Text, TextH1 } from "./Home.styled";

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <HomeDiv >
      <TextH1 >
        Welcome to AdressBook!
        </TextH1>
        <Text>
           You need to register to use this application.
        </Text>
      
    </HomeDiv>
  );
}
