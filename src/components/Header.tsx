type HeaderProps = {
  owner: string;
  repo: string;
};

const Header: React.FC<HeaderProps> = ({ owner, repo }) => {
  return (
    <header>
      {owner}/{repo}
    </header>
  );
};

export default Header;
