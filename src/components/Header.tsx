import styled from "styled-components";

type HeaderProps = {
  owner: string;
  repo: string;
};

const Header: React.FC<HeaderProps> = ({ owner, repo }) => {
  return (
    <StyledHeader>
      {owner} / {repo}
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 5vh 0;
  text-align: center;
  background-color: black;
  color: white;
  font-size: 2rem;
  font-weight: 700;
  user-select: none;
`;

export default Header;
