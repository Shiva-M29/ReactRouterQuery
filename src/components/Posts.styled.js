import styled from "styled-components"
export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Poppins", sans-serif;
`;

export const Title = styled.h1`
margin-top:70px;
margin-left:350px;
  text-align: center;
  color: #333;
  display:inline;
`;

export const Message = styled.p`
  text-align: center;
  color: #777;
`;

export const PostGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

export const PostCard = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  width: 320px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }

  h3 {
    color: #007bff;
    font-size: 1.1rem;
    margin-bottom: 8px;
  }

  p {
    color: #555;
    font-size: 0.95rem;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const UserInfo = styled.p`
  color: teal;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ToggleButton = styled.button`
  background: #007bff;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  margin-top: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #0056b3;
    transform: translateY(-2px);
  }
`;

export const CommentsContainer = styled.div`
  background: #f9f9f9;
  border-radius: 10px;
  padding: 12px;
  margin-top: 12px;
  border: 1px solid #ddd;
  transition: all 0.3s ease;

  &:hover {
    background: #f3f8ff;
  }
`;

export const CommentCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #eee;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }

  p {
    margin: 4px 0;
    color: #444;
    font-size: 0.9rem;
  }
`;