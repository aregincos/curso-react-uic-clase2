import "./post-user-avatar.css";

type PropsUserAvatar = {
  imgUrl: string;
  alt?: string;
};

const PostUserAvatar: React.FC<PropsUserAvatar> = ({ imgUrl, alt }) => {
  return <img src={imgUrl} alt={alt && "User Avatar"} className="avatar" />;
};

export default PostUserAvatar;
