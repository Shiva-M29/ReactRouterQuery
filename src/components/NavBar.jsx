import { Link } from "react-router-dom";
import { Nav, Logo, Links, StyledLink } from "./NavBar.styled";
function NavBar() {
  return (
    <Nav>
      <Logo>ReactDemo</Logo>
      <Links>
       <StyledLink to="/home">Home</StyledLink>
        <StyledLink to="/users">Users</StyledLink>
        <StyledLink to="/posts">Posts</StyledLink>
        <StyledLink to="/albums">Albums</StyledLink>
      </Links>
    </Nav>
  );
}

export default NavBar