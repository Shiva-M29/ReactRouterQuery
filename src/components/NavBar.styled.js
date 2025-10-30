import {Link} from "react-router-dom";
import styled from "styled-components";
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  background: linear-gradient(90deg, #e0c3fc, #8ec5fc);
  color: #fff;
  font-family: "Poppins", sans-serif;
`;
export const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const Links = styled.div`
  display: flex;
  gap: 25px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 8px;
  transition: all 0.3s;

  &:hover {
    background-color: #fff;
    color: #ff758c;
    transform: translateY(-2px);
  }
`;