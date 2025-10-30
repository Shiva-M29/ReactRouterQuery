import React from 'react';
import {
  Container,
  TextSection,
  Heading,
  SubText,
  ImageSection,
  Image
} from './Home.styled';

function Home() {
  return (
    <Container>
        <TextSection>
          <Heading>Welcome to the React Router & React Query Demo</Heading>
          <SubText>
            Explore how React Router manages navigation and React Query handles data fetching efficiently. 
            This project demonstrates how modern React tools simplify API integration and UI updates.
          </SubText>
        </TextSection>

        <ImageSection>
          <Image
            src="https://keyholesoftware.com/wp-content/uploads/React-Router.jpg"
            alt="React Router"
          />
          <Image
            src="https://img1.daumcdn.net/thumb/R750x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FdtVVT8%2FbtsLneMt3fu%2FAAAAAAAAAAAAAAAAAAAAAPE92vcVEqKcREa4DJ9hflYj05LbpzMEPC3Y68sv_DZ-%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1761922799%26allow_ip%3D%26allow_referer%3D%26signature%3DefKEXF453w4PVhl9%252FGF5HZO%252FjRE%253D"
            alt="React Query"
          />
        </ImageSection>
    </Container>
  );
}

export default Home;