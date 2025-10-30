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
  margin-bottom: 20px;
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  transition: all 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.4);
  }
`;

export const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #0056b3;
    transform: translateY(-2px);
  }
`;


export const Message = styled.p`
  text-align: center;
  color: #666;
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  width: 280px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }

  h3 {
    color: #007bff;
    margin-bottom: 10px;
  }

  p {
    color: #555;
    margin: 4px 0;
  }
  b{
    color:purple;}

  @media (max-width: 600px) {
    width: 100%;
  }
`;