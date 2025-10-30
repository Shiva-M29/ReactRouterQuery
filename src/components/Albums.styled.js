import styled from "styled-components";
export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Poppins", sans-serif;
`;

export const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 30px;
  font-size: 2rem;
  letter-spacing: 1px;
  display:block;
`;

export const Message = styled.p`
  text-align: center;
  color: #777;
  font-size: 1.1rem;
  padding: 20px;
`;

export const AlbumGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

export const AlbumCard = styled.div`
  width: 260px;
  border-radius: 14px;
  border: 2px solid green;
  padding: 20px;
  color: #333;
  text-align: center;
  background-color: ${(props) =>
    props.index % 2 === 0 ? "#eaf4fc" : "#f7f7f7"};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
  transition: all 0.35s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.2);
    background-color: #f0f8ff;
    border-color: #4a90e2;
    border-style:solid;
  }
    

  @media (max-width: 600px) {
    width: 100%;
  }
`;