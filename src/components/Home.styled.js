import styled from 'styled-components';
 export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  min-height: 100vh;
  background: linear-gradient(120deg, #a1c4fd, #c2e9fb);
  color: #222;
  font-family: "Poppins", sans-serif;

  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }
`;

export const TextSection = styled.div`
  flex: 1;
  padding: 20px;
  margin-bottom: 200px;
`;

export const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const SubText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
`;


export const ImageSection = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: center;
  padding: 20px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const Image = styled.img`
  width: 70%;
  max-width: 400px;
  border-radius: 10px;
  transition: transform 0.3s;
  margin: 10px 10px;

  &:hover {
    transform: scale(1.03);
  }
`;