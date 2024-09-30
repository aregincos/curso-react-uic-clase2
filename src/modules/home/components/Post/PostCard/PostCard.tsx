import { useState } from "react";
import Button from "../../../../../core/components/button/Button";
import PostOptions from "../PostOptions/PostOptions";
import PostUserAvatar from "../PostUserAvatar/PostUserAvatar";
import './post-card.css'

type PropsCard = {
  imgURL: string;
  alt?: string
}

const PostCard: React.FC<PropsCard> = ({ imgURL, alt }) => {

  const [lengthInput, setLengthInput] = useState('')

  const handleInput = () => {
    const inputElement = document.getElementById('input-post') as HTMLInputElement
    setLengthInput(inputElement.value)
  }

  return (
    <div className="post-card-container">
      <PostUserAvatar imgUrl={imgURL} alt={alt}/>
      <div>
        <input id="input-post" className="post-card-input" type="text" placeholder="What is happening?!" onChange={()=>handleInput()}/>
        <div className="post-card-container-options">
          <PostOptions/>
          <Button key={"button-post-card"} text="POST" disabled={lengthInput.length > 0 ? false : true} variant='primary' onClick={()=>console.log(lengthInput)} />
        </div>
      </div>
    </div>
    
  );
};

export default PostCard;
