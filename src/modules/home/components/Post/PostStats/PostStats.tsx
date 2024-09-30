import PostStatsComments from "./PostStatsComments";
import PostStatsLikes from "./PostStatsLikes";
import PostStatsRetweets from "./PostStatsRetweets";
import PostStatsViews from "./PostStatsViews";
import './post-stats.css'

type PropsStats = {
  likes: number;
  retweets: number;
  comments: number;
  views: number;
}

const PostStats: React.FC<PropsStats> = ({ likes, retweets, comments, views }) => {
  return (
    <div className='post-stats-container'>
      <div className='post-stats'>
        <div className="post-stats-icon-comments">
          <PostStatsComments />
        </div>
        <p>{comments}</p>
      </div>
      <div className='post-stats'>
        <div className="post-stats-icon-retweets">
          <PostStatsRetweets />
        </div>
        <p>{retweets}</p>
      </div>
      <div className='post-stats'>
        <div className="post-stats-icon-likes">
          <PostStatsLikes />
        </div>
        <p>{likes}</p>
      </div>
      <div className='post-stats'>
        <div className="post-stats-icon-views">
        <PostStatsViews />
        </div>
        <p className="p-views">{views}</p>
      </div>
    </div >
  )
}

export default PostStats;