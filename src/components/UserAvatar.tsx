type UserAvatarProps = {
  url: string;
};

const UserAvatar: React.FC<UserAvatarProps> = ({ url }) => {
  return <img src={url} alt="user-avatar" />;
};

export default UserAvatar;
