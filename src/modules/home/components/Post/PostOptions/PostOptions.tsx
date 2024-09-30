import PostOptionsEmoji from "./PostOptionsEmoji"
import PostOptionsGif from "./PostOptionsGif"
import PostOPtionsPhotos from "./PostOPtionsPhotos"
import PostOptionsProgramming from "./PostOptionsProgramming"
import PostOptionsSurvey from "./PostOptionsSurvey"
import './post-options.css'

const PostOptions = () => {
  return (
    <div className="post-options-container">
      <div className="post-options-icon"><PostOPtionsPhotos/></div>
      <div className="post-options-icon"><PostOptionsGif/></div>
      <div className="post-options-icon"><PostOptionsSurvey/></div>
      <div className="post-options-icon"><PostOptionsEmoji/></div>
      <div className="post-options-icon"><PostOptionsProgramming/></div>
    </div>
  )
}

export default PostOptions