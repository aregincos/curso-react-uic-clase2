import { getPosts } from "../../../services/post";
import { Post } from "../../../types/post";
import useFetch from "../../../../../core/hooks/useFetch";
import PostMetadata from "../PostMetadata/PostMetadata";
import PostStats from "../PostStats/PostStats";
import PostUserAvatar from "../PostUserAvatar/PostUserAvatar";
import './post-list.css'
import PostCard from "../PostCard/PostCard";

const PostList = () => {
  const { data, loading, error } = useFetch<Post>(getPosts);

  if (error) {
    return <span>{error}</span>;
  }

  return (
    <div>
      <PostCard imgURL="https://pbs.twimg.com/profile_images/1833701474620116992/rlhMLJ17_400x400.jpg"/>
      {loading && <span>Loading...</span>}
      {data.map((post, key) => (
        <div key={`post-${key}`} className="container-post-list">
          <div>
            <PostUserAvatar imgUrl={post.user.avatar} />
          </div>
          <div >
            <PostMetadata
              fullName={post.user.name}
              username={post.user.username}
              createdAt={post.postDate}
              verified
            />
            <span>
              <div>{post.content}</div>
              <div>
                <img className="container-post-img" src={post.image} alt="asda" />
              </div>
            </span>
          <div>
            <PostStats likes={post.likes} retweets={post.retweets} comments={post.comments} views={post.views}/>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList