import { styled } from "styled-components";

type UserAvatarProps = {
  url: string;
};

const UserAvatar: React.FC<UserAvatarProps> = ({ url }) => {
  return (
    <StyledUserAvatar>
      <img src={url} alt="user-avatar" />
    </StyledUserAvatar>
  );
};

const StyledUserAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    border-radius: 50%;
    width: 80px;
    aspect-ratio: 1 / 1;
  }
`;

export default UserAvatar;
